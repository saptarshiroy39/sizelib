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
        <span className="text-foreground font-medium">human_rate</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        human_rate() - Format Rates
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            String Formatting –{" "}
          </strong>
          Converts raw byte or bit transfer rates into readable rate strings like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            10 MiB/s
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            20 GB/s
          </code>
          , or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            100 Mbps
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Smart Decimal Precision –{" "}
          </strong>
          Auto-rounds and formats fractional rates cleanly up to 2 decimal
          places.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Dual Bases & Bitrate Modes –{" "}
          </strong>
          Supports binary bytes (<code className="text-xs font-bold text-sidebar-primary">KiB/s</code>), decimal bytes (<code className="text-xs font-bold text-sidebar-primary">KB/s</code>), binary bits (<code className="text-xs font-bold text-sidebar-primary">Kibps</code>), and decimal bits (<code className="text-xs font-bold text-sidebar-primary">kbps</code>).
        </li>
      </ul>

      <ApiRenderer signature="sizelib.human_rate(rate_val: int | float, base: int | None = None, bits: bool = False) -> str" />

      <h3 className="text-sm font-bold text-foreground pt-2">
        Output Unit Hierarchy Scale
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Divisor
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Unit Escalation Order
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Base 2 (Binary)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1024
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                B/s &rarr; KiB/s &rarr; MiB/s &rarr; GiB/s &rarr; TiB/s &rarr; PiB/s &rarr; EiB/s &rarr; ZiB/s &rarr; YiB/s
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Base 10 (Decimal)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                B/s &rarr; KB/s &rarr; MB/s &rarr; GB/s &rarr; TB/s &rarr; PB/s &rarr; EB/s &rarr; ZB/s &rarr; YB/s
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Base 2 (Binary), bits=True
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1024
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                bps &rarr; Kibps &rarr; Mibps &rarr; Gibps &rarr; Tibps &rarr; Pibps &rarr; Eibps &rarr; Zibps &rarr; Yibps
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Base 10 (Decimal), bits=True
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                bps &rarr; kbps &rarr; Mbps &rarr; Gbps &rarr; Tbps &rarr; Pbps &rarr; Ebps &rarr; Zbps &rarr; Ybps
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="human_rate() - Usage"
        code={`from sizelib import human_rate, rate

# Default binary formatting (base 2 / 1024)
print(human_rate(10485760))                         # Output: 10 MiB/s
print(human_rate(1500000))                          # Output: 1.43 MiB/s
print(human_rate(rate.gib_s(2.5)))                  # Output: 2.50 GiB/s

# Decimal formatting (base 10 / 1000)
print(human_rate(20000000000, base=10))             # Output: 20 GB/s
print(human_rate(1500000, base=10))                 # Output: 1.50 MB/s
print(human_rate(rate.kb_s(5), base=10))            # Output: 5 KB/s

# Decimal bit rate formatting (bits=True)
print(human_rate(rate.mbps(100), bits=True))        # Output: 100 Mbps
print(human_rate(rate.gbps(1.5), bits=True))        # Output: 1.50 Gbps

# Binary bit rate formatting (bits=True, base=2)
print(human_rate(rate.mibps(2), base=2, bits=True)) # Output: 2 Mibps`}
      />

      <CodeBlockRenderer
        language="python"
        title="human_rate() - Edge Cases & Exceptions"
        code={`from sizelib import human_rate

# Zero rate inputs
print(human_rate(0))                                # Output: 0 B/s
print(human_rate(0, bits=True))                     # Output: 0 bps

# Negative values raise ValueError
try:
    human_rate(-5)
except ValueError as e:
    print(e)                                        # Output: Rate cannot be negative

# Invalid base parameter raises ValueError
try:
    human_rate(100, base=5)
except ValueError as e:
    print(e)                                        # Output: Base must be 2 or 10`}
      />
    </article>
  );
}
