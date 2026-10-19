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
        <span className="text-foreground font-medium">human_freq</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        human_freq() - Format Frequency
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Frequency Formatting –{" "}
          </strong>
          Converts raw Hertz values into clean, readable frequency strings like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            44.10 kHz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            800 MHz
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            3.20 GHz
          </code>
          , or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            1.50 THz
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Smart Decimal Precision –{" "}
          </strong>
          Auto-rounds and formats fractional frequencies cleanly up to 2 decimal
          places.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Full SI Range –{" "}
          </strong>
          Automatically escalates frequency steps across Hz, kHz, MHz, GHz, THz,
          PHz, EHz, ZHz, and YHz.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.human_freq(hz: int | float) -> str" />

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
                Scale Divisor
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Unit Escalation Order
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                Frequency Units
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-mono">
                Hz &rarr; kHz &rarr; MHz &rarr; GHz &rarr; THz &rarr; PHz &rarr; EHz &rarr; ZHz &rarr; YHz
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="human_freq() - Usage"
        code={`from sizelib import freq, human_freq

print(human_freq(44100))             # Output: 44.10 kHz
print(human_freq(freq.mhz(800)))     # Output: 800 MHz
print(human_freq(freq.ghz(3.2)))     # Output: 3.20 GHz
print(human_freq(freq.thz(1.5)))     # Output: 1.50 THz`}
      />

      <CodeBlockRenderer
        language="python"
        title="human_freq() - Edge Cases & Exceptions"
        code={`from sizelib import human_freq

# Zero Hz input
print(human_freq(0))                 # Output: 0 Hz

# Negative values raise ValueError
try:
    human_freq(-100)
except ValueError as e:
    print(e)                         # Output: Frequency cannot be negative`}
      />
    </article>
  );
}
