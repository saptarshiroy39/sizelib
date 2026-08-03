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
        <span className="text-foreground font-medium">humanize</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        humanize() - Format Bytes
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            String Formatting –{" "}
          </strong>
          Converts raw byte sizes back into clean, readable strings like{" "}
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
            Smart Precision –{" "}
          </strong>
          Formats fractional sizes cleanly up to 2 decimal places automatically.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Dual Base Formatting –{" "}
          </strong>
          Supports binary formatting (base 2 / 1024) using standard IEC suffixes
          (KiB, MiB, etc.) and decimal formatting (base 10 / 1000) using SI
          suffixes (KB, MB, etc.).
        </li>
      </ul>

      <ApiRenderer signature="sizelib.humanize(size_bytes: int | float, base: int = 2) -> str" />

      <div className="my-4 overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Parameter
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Type
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Required
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size_bytes
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                int | float
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Yes
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                The size value in bytes to humanize. Must not be negative.
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                base
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                int
              </td>
              <td className="p-3 text-foreground/80 leading-normal">No</td>
              <td className="p-3 text-foreground/80 leading-normal">
                The divisor base. Use{" "}
                <code className="font-mono text-xs font-bold text-sidebar-primary">
                  2
                </code>{" "}
                for binary (default, 1024) or{" "}
                <code className="font-mono text-xs font-bold text-sidebar-primary">
                  10
                </code>{" "}
                for decimal (1000).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Returns
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                str
              </td>
              <td className="p-3 text-foreground/80 leading-normal">
                A human-readable string formatted with appropriate suffix (e.g.{" "}
                <code className="font-mono text-xs font-bold text-sidebar-primary">
                  10 MiB
                </code>{" "}
                or{" "}
                <code className="font-mono text-xs font-bold text-sidebar-primary">
                  50 GB
                </code>
                ).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="humanize() API - Default Binary (Base 2)"
        code={`from sizelib import humanize, size

# Converts raw bytes to base-1024 string representation
MAX_UPLOAD_SIZE = size.mib(10)
print(humanize(MAX_UPLOAD_SIZE))  # Output: 10 MiB`}
      />

      <CodeBlockRenderer
        language="python"
        title="humanize() API - Precision & Floating Points"
        code={`from sizelib import humanize, size

# Auto-rounds and formats fractional sizes up to 2 decimal places
total = size.gib(2) + size.mib(500)
print(humanize(total))            # Output: 2.49 GiB`}
      />

      <CodeBlockRenderer
        language="python"
        title="humanize() API - Decimal Formatting (Base 10)"
        code={`from sizelib import humanize, size

# Uses base-1000 standard (e.g. GB instead of GiB)
user_quota = size.gb(50)
print(humanize(user_quota, base=10))  # Output: 50 GB`}
      />
    </article>
  );
}
