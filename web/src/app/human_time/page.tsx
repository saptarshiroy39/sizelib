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
        <span className="text-foreground font-medium">human_time</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        human_time() - Format Times
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Duration Formatting –{" "}
          </strong>
          Converts raw second values into clean, readable duration strings like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            5 ms
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            45 s
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            1.50 h
          </code>
          , or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            2 d
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Smart Decimal Precision –{" "}
          </strong>
          Auto-rounds and formats fractional durations cleanly up to 2 decimal
          places.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Automatic Unit Escalation –{" "}
          </strong>
          Automatically escalates duration steps across ms, s, m, h, d, and w.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.human_time(seconds: int | float) -> str" />

      <h3 className="text-sm font-bold text-foreground pt-2">
        Output Unit Hierarchy Scale
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Unit
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Scale Divisors
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Unit Escalation Order
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Duration Units
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1000ms / 60s / 60m / 24h / 7d
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                ms &rarr; s &rarr; m &rarr; h &rarr; d &rarr; w
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="human_time() - Usage"
        code={`from sizelib import human_time, time

print(human_time(0.005))        # Output: 5 ms
print(human_time(time.s(45)))   # Output: 45 s
print(human_time(time.m(90)))   # Output: 1.50 h
print(human_time(time.h(2)))    # Output: 2 h
print(human_time(time.d(1)))    # Output: 1 d`}
      />

      <CodeBlockRenderer
        language="python"
        title="human_time() - Edge Cases & Exceptions"
        code={`from sizelib import human_time

# Zero second input
print(human_time(0))            # Output: 0 s

# Negative values raise ValueError
try:
    human_time(-5)
except ValueError as e:
    print(e)                    # Output: Time cannot be negative`}
      />
    </article>
  );
}
