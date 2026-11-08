"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useReducedMotion, AnimatePresence, motion } from "motion/react";
import { useEffect, useSyncExternalStore, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
  iconClassName?: string;
}

const VT_STYLE_ID = "beui-theme-toggle-vt";

const VT_CSS = `
html[data-beui-vt="circle-blur"]::view-transition-old(root) {
  animation: none;
  mix-blend-mode: normal;
}
html[data-beui-vt="circle-blur"]::view-transition-new(root) {
  mix-blend-mode: normal;
  animation: beui-circle-blur-reveal 700ms cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes beui-circle-blur-reveal {
  from {
    clip-path: circle(0% at 100% 0%);
    filter: blur(8px);
  }
  to {
    clip-path: circle(150% at 100% 0%);
    filter: blur(0px);
  }
}
`;

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

export function useThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const reduce = useReducedMotion() ?? false;
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (document.getElementById(VT_STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = VT_STYLE_ID;
    el.textContent = VT_CSS;
    document.head.appendChild(el);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";

    if (reduce || !("startViewTransition" in document)) {
      setTheme(next);
      return;
    }

    const root = document.documentElement;
    root.dataset.beuiVt = "circle-blur";

    const vt = (
      document as Document & {
        startViewTransition(cb: () => void): { finished: Promise<void> };
      }
    ).startViewTransition(() => setTheme(next));

    vt.finished.finally(() => {
      delete root.dataset.beuiVt;
    });
  };

  return { isDark, mounted, toggle };
}

export function ThemeToggle({
  className,
  iconClassName,
  ...rest
}: ThemeToggleProps) {
  const { isDark, mounted, toggle } = useThemeToggle();

  return (
    <button
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
