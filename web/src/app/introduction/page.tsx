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
        sizelib is a Python library for calculating and humanizing file sizes,
        times, frequencies &amp; data transfer rates. It offers a zero-overhead and highly readable API.
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
            Humanizing Byte Sizes –{" "}
          </strong>
          Convert raw byte values back into clean, readable strings using the{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            human_size()
          </code>{" "}
          function.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Time Helper Functions –{" "}
          </strong>
          Define time constraints cleanly in seconds using duration unit methods (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ms
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            s
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            h
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            d
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            w
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m28
          </code>
          ..
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m31
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            y
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ly
          </code>
          ).
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Humanizing Times –{" "}
          </strong>
          Convert raw second values into readable duration strings using the{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            human_time()
          </code>{" "}
          function.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Frequency Helper Functions –{" "}
          </strong>
          Define frequency constraints cleanly in Hertz using frequency unit methods (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            hz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            khz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mhz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ghz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            thz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            phz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ehz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zhz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yhz
          </code>
          ).
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Humanizing Frequencies –{" "}
          </strong>
          Convert raw Hertz values into readable frequency strings using the{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            human_freq()
          </code>{" "}
          function.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Rate Helper Functions –{" "}
          </strong>
          Define data transfer rate and bandwidth constraints cleanly using bit and byte rate methods (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            bps
          </code>
          ..
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ybps
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            b_s
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kib_s
          </code>
          ..
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yib_s
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kb_s
          </code>
          ..
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yb_s
          </code>
          ).
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Type Preservation –{" "}
          </strong>
          Dynamically maintains input types (
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            int
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            float
          </code>
          ) across all calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Zero Overhead &amp; Dependencies –{" "}
          </strong>
          Pure-Python library with zero external dependencies.
        </li>
      </ul>

    </article>
  );
}
