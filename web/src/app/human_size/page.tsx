import Link from "next/link";
import { CodeBlockRenderer, ApiRenderer } from "@/components/DocBlocks";

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
        <span className="text-foreground font-medium">human_size</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        human_size() - Format Bytes
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            String Formatting –{" "}
          </strong>
          Converts raw byte values back into clean, readable strings like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            2 GiB
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            50 GB
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Smart Decimal Precision –{" "}
          </strong>
          Auto-rounds and formats fractional sizes cleanly up to 2 decimal
          places.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Dual Bases –{" "}
          </strong>
          Supports base=2 (binary 1024) and base=10 (decimal 1000) formatting
          output units.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.human_size(size_bytes: int | float, base: int = 2) -> str" />

      <CodeBlockRenderer
        language="python"
        title="human_size() - Usage"
        code={`from sizelib import human_size, size

# Default binary formatting (base 2 / 1024)
print(human_size(size.mib(10)))  # Output: 10 MiB
print(human_size(size.gib(2)))   # Output: 2 GiB

# Decimal formatting (base 10 / 1000)
print(human_size(size.gb(50), base=10))  # Output: 50 GB`}
      />
    </article>
  );
}
