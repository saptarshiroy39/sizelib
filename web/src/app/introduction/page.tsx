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
        <span className="text-foreground font-medium">Introduction</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        What is sizelib?
      </h1>

      <div className="h-px bg-border" />

      <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
        sizelib is a simple, pythonic library designed for calculating,
        converting, and humanizing file sizes. It offers a zero-overhead and
        highly readable API.
      </p>

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Size Helper Functions –{" "}
          </strong>
          Define constraints easily using binary (base 2 / 1024) or decimal
          (base 10 / 1000) helper methods.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Type Preservation –{" "}
          </strong>
          All unit helper functions return integers when passed an integer
          value, preserving precise types for type-checkers and calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Humanizing Byte Sizes –{" "}
          </strong>
          Convert raw byte values back into clean, readable strings using the{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            humanize()
          </code>{" "}
          function.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Dual Base Support –{" "}
          </strong>
          Full support for binary base (e.g.{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            KiB
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            MiB
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            GiB
          </code>
          ) and decimal base (e.g.{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            KB
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            MB
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            GB
          </code>
          ) units.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Variables &amp; Expressions –{" "}
          </strong>
          Fully supports using variables and complex expressions inside
          calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Zero Overhead &amp; Dependencies –{" "}
          </strong>
          Pure-Python library with absolutely no dependencies.
        </li>
      </ul>
    </article>
  );
}
