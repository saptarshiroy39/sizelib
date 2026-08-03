import Link from "next/link";

export default function Page() {
  return (
    <article className="space-y-6 font-mono">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link
          href="/introduction"
          className="hover:text-foreground transition-colors"
        >
          Docs
        </Link>
        <span>&gt;</span>
        <span className="text-foreground font-medium">Author</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Author
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Development –{" "}
          </strong>
          Created and maintained by{" "}
          <a
            href="https://hirishi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            Saptarshi Roy
          </a>{" "}
          to provide zero-overhead byte conversions.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">GitHub – </strong>
          Explore the project repository at{" "}
          <a
            href="https://github.com/saptarshiroy39/sizelib"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            saptarshiroy39/sizelib
          </a>{" "}
          and follow developer profile updates at{" "}
          <a
            href="https://github.com/saptarshiroy39"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            @saptarshiroy39
          </a>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            PyPI Package –{" "}
          </strong>
          View releases and download instructions directly from{" "}
          <a
            href="https://pypi.org/project/sizelib/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            sizelib
          </a>{" "}
          on PyPI (profile:{" "}
          <a
            href="https://github.com/saptarshiroy39"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            @saptarshiroy39
          </a>
          ).
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">License – </strong>
          Distributed openly under the permissive{" "}
          <a
            href="https://github.com/saptarshiroy39/sizelib/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-sidebar-primary hover:underline"
          >
            MIT License
          </a>{" "}
          terms.
        </li>
      </ul>
    </article>
  );
}
