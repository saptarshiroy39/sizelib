"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useReducedMotion, AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ComponentPropsWithoutRef,
  type RefObject,
} from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
  iconClassName?: string;
  duration?: number;
}

const BLUR_TRANSITION = { duration: 0.2, ease: "easeInOut" } as const;
const SWAP_BLUR = "blur(8px)";

const ICON_VARIANTS = {
  initial: { opacity: 0, scale: 0.25, filter: SWAP_BLUR },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: BLUR_TRANSITION,
  },
  exit: {
    opacity: 0,
    scale: 0.25,
    filter: SWAP_BLUR,
    transition: BLUR_TRANSITION,
  },
};

const emptySubscribe = () => () => {};

function getCircleClipPaths(
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number
): [string, string] {
  const toX = (x: number) => `${(x / viewportWidth) * 100}%`;
  const toY = (y: number) => `${(y / viewportHeight) * 100}%`;
  const point = (x: number, y: number) => `${toX(x)} ${toY(y)}`;
  const toRadius = (r: number) =>
    `${(r / (Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2)) * 100}%`;

  return [
    `circle(0% at ${point(cx, cy)})`,
    `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
  ];
}

export function useThemeToggle(
  buttonRef?: RefObject<HTMLButtonElement | null>,
  duration = 400
) {
  const { setTheme, resolvedTheme } = useTheme();
  const reduce = useReducedMotion() ?? false;
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const isTransitioningRef = useRef(false);
  const activeAnimRef = useRef<Animation | null>(null);

  const isDark = mounted && resolvedTheme === "dark";

  const cancelAnim = useCallback(() => {
    activeAnimRef.current?.cancel();
    activeAnimRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      cancelAnim();
      const root = document.documentElement;
      if (root.dataset.magicuiThemeVt !== "active") return;
      delete root.dataset.magicuiThemeVt;
      root.style.removeProperty("--magicui-theme-toggle-vt-duration");
      root.style.removeProperty("--magicui-theme-vt-clip-from");
    };
  }, [cancelAnim]);

  const toggle = useCallback(() => {
    if (
      isTransitioningRef.current ||
      document.documentElement.dataset.magicuiThemeVt === "active"
    ) {
      return;
    }

    const next = isDark ? "light" : "dark";

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => {
        finished: Promise<void>;
        ready: Promise<void>;
      };
    };

    if (reduce || typeof doc.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = viewportWidth / 2;
    let y = viewportHeight / 2;
    if (buttonRef?.current) {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      x = left + width / 2;
      y = top + height / 2;
    }

    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );

    const clipPath = getCircleClipPaths(
      x,
      y,
      maxRadius,
      viewportWidth,
      viewportHeight
    );

    const root = document.documentElement;
    root.dataset.magicuiThemeVt = "active";
    root.style.setProperty(
      "--magicui-theme-toggle-vt-duration",
      `${duration}ms`
    );
    root.style.setProperty("--magicui-theme-vt-clip-from", clipPath[0]);

    const cleanup = () => {
      isTransitioningRef.current = false;
      delete root.dataset.magicuiThemeVt;
      root.style.removeProperty("--magicui-theme-toggle-vt-duration");
      root.style.removeProperty("--magicui-theme-vt-clip-from");
      cancelAnim();
    };

    isTransitioningRef.current = true;
    const transition = doc.startViewTransition(() => {
      flushSync(applyTheme);
    });

    if (typeof transition?.finished?.finally === "function") {
      transition.finished.finally(cleanup).catch(() => {});
    } else {
      cleanup();
    }

    transition?.ready
      ?.then(() => {
        const anim = document.documentElement.animate(
          { clipPath },
          {
            duration,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          } as KeyframeAnimationOptions
        );
        activeAnimRef.current = anim;
      })
      .catch(() => {});
  }, [buttonRef, cancelAnim, duration, isDark, reduce, setTheme]);

  return { isDark, mounted, toggle };
}

export function ThemeToggle({
  className,
  iconClassName,
  duration = 400,
  ...rest
}: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isDark, mounted, toggle } = useThemeToggle(buttonRef, duration);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn(
        "flex size-8 shrink-0 aspect-square items-center justify-center rounded-full border border-border bg-accent hover:bg-accent/70 p-0 transition-colors cursor-pointer",
        className
      )}
      {...rest}
    >
      {mounted ? (
        <span className="relative inline-grid shrink-0 place-items-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={isDark ? "dark" : "light"}
              aria-hidden
              variants={ICON_VARIANTS}
              initial={false}
              animate="animate"
              exit="exit"
              className="col-start-1 row-start-1 inline-flex items-center justify-center will-change-[opacity,filter,transform]"
            >
              {isDark ? (
                <IconSun
                  size={18}
                  className={cn("transition-transform duration-200", iconClassName)}
                />
              ) : (
                <IconMoon
                  size={18}
                  className={cn("transition-transform duration-200", iconClassName)}
                />
              )}
            </motion.span>
          </AnimatePresence>
        </span>
      ) : (
        <IconSun size={18} className={cn("opacity-0", iconClassName)} aria-hidden="true" />
      )}
    </button>
  );
}
