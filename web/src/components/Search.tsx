"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { IconSearch, IconFileText } from "@tabler/icons-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { docsData, navigationItems } from "@/data/docs";

interface SearchResult {
  slug: string;
  pageTitle: string;
  type: "title" | "content";
  matchedText: string;
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            className="bg-amber-500/20 text-sidebar-primary font-bold px-0.5"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

function getSnippet(text: string, query: string): string {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) {
    return text.length > 80 ? text.substring(0, 80) + "..." : text;
  }
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + query.length + 40);
  let snippet = text.substring(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  return snippet;
}

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const results = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const list: SearchResult[] = [];
    const seen = new Set<string>();

    navigationItems.forEach((category) => {
      const catMatch = category.title.toLowerCase().includes(q);

      category.items.forEach((item) => {
        const itemSlug = item.href.replace("/", "");
        const itemTitle = item.title;
        const page = docsData[itemSlug];
        const pageTitle = page ? page.title : itemTitle;

        const slugMatch = itemSlug.toLowerCase().includes(q);
        const navTitleMatch = itemTitle.toLowerCase().includes(q);
        const docPageTitleMatch = page ? page.title.toLowerCase().includes(q) : false;

        if (catMatch || navTitleMatch || slugMatch || docPageTitleMatch) {
          if (!seen.has(itemSlug)) {
            seen.add(itemSlug);
            
            let matchedText = itemTitle;
            if (catMatch) {
              matchedText = `${category.title} > ${itemTitle}`;
            } else if (docPageTitleMatch && !navTitleMatch) {
              matchedText = pageTitle;
            }

            list.push({
              slug: itemSlug,
              pageTitle: pageTitle,
              type: "title",
              matchedText: matchedText,
            });
          }
        }
      });
    });

    for (const [slug, page] of Object.entries(docsData)) {
      const pageTitle = page.title;
      if (pageTitle.toLowerCase().includes(q) || slug.toLowerCase().includes(q)) {
        if (!seen.has(slug)) {
          seen.add(slug);
          list.push({
            slug,
            pageTitle,
            type: "title",
            matchedText: pageTitle,
          });
        }
      }
    }

    for (const [slug, page] of Object.entries(docsData)) {
      const pageTitle = page.title;

      page.blocks.forEach((block) => {
        if (block.type === "paragraph") {
          if (block.text.toLowerCase().includes(q)) {
            list.push({
              slug,
              pageTitle,
              type: "content",
              matchedText: block.text,
            });
          }
        } else if (block.type === "list") {
          block.items.forEach((item) => {
            if (item.toLowerCase().includes(q)) {
              list.push({
                slug,
                pageTitle,
                type: "content",
                matchedText: item,
              });
            }
          });
        } else if (block.type === "api") {
          const apiMatches = [
            block.name,
            block.signature,
            block.description,
            block.notes || "",
            block.returns.type,
            block.returns.description,
          ];
          block.parameters.forEach((p) => {
            apiMatches.push(p.name, p.type, p.description);
          });

          const isMatch = apiMatches.some((text) =>
            text.toLowerCase().includes(q),
          );
          if (isMatch) {
            list.push({
              slug,
              pageTitle,
              type: "content",
              matchedText: `${block.signature} - ${block.description}`,
            });
          }
        } else if (block.type === "code") {
          const titleMatch =
            block.title && block.title.toLowerCase().includes(q);
          const codeMatch = block.code.toLowerCase().includes(q);
          if (titleMatch || codeMatch) {
            list.push({
              slug,
              pageTitle,
              type: "content",
              matchedText: block.title
                ? `${block.title}: ${block.code}`
                : block.code,
            });
          }
        }
      });
    }

    return list.sort((a, b) => {
      if (a.type === "title" && b.type !== "title") return -1;
      if (a.type !== "title" && b.type === "title") return 1;
      return 0;
    });
  }, [query]);

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, []);

  const handleNavigate = React.useCallback(
    (slug: string) => {
      router.push(`/${slug}`);
      setOpen(false);
      setQuery("");
    },
    [router],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = results[selectedIndex];
      if (selected) {
        handleNavigate(selected.slug);
      }
    }
  };

  React.useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const activeEl = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [selectedIndex, results]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between w-full min-w-[120px] sm:min-w-[140px] md:min-w-[160px] max-w-[180px] h-[34px] px-3.5 border border-border bg-muted/40 hover:bg-muted/80 text-xs text-muted-foreground transition-all cursor-pointer select-none rounded-full focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <div className="flex items-center gap-2">
          <IconSearch className="h-3.5 w-3.5" />
          <span>Search...</span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] font-bold text-muted-foreground/80">
          Ctrl+K
        </span>
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="p-0 gap-0 max-w-lg border-border"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Search Documentation</DialogTitle>
          <div
            className="flex items-center border-b border-border px-3 py-3"
            onKeyDown={handleKeyDown}
          >
            <IconSearch className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              className="flex h-9 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
              placeholder="Search docs (e.g. humanize, gib, base)..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              autoFocus
            />
          </div>

          <div
            className="max-h-[320px] overflow-y-auto font-mono scrollbar-thin divide-y divide-border/40"
            ref={resultsRef}
          >
            {query.trim() === "" ? (
              <div className="p-4 text-xs text-muted-foreground space-y-3">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Quick Links
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {navigationItems
                    .flatMap((s) => s.items)
                    .map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          handleNavigate(item.href.replace("/", ""))
                        }
                        className="flex items-center gap-2 p-2 hover:bg-muted/60 text-left border border-border/40 hover:border-border transition-colors text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        <IconFileText className="h-3.5 w-3.5 text-sidebar-primary" />
                        <span className="truncate">{item.title}</span>
                      </button>
                    ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-xs text-muted-foreground leading-relaxed">
                No results found for &ldquo;
                <span className="text-foreground font-semibold">{query}</span>
                &rdquo;.
              </div>
            ) : (
              results.map((result, idx) => {
                const isSelected = idx === selectedIndex;
                const isTitleMatch = result.type === "title";

                return (
                  <div
                    key={idx}
                    onClick={() => handleNavigate(result.slug)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group flex flex-col gap-1 p-3 transition-colors cursor-pointer select-none text-left ${
                      isSelected ? "bg-muted" : "hover:bg-muted/40"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">
                        {result.pageTitle}
                      </span>
                    </div>

                    <p className="text-xs text-foreground/80 leading-normal line-clamp-2">
                      <Highlight
                        text={isTitleMatch ? result.matchedText : getSnippet(result.matchedText, query)}
                        query={query}
                      />
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
