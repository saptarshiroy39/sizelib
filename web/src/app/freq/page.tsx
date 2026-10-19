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
        <span className="text-foreground font-medium">freq</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        freq - Frequency Helpers
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Frequency Scaling Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            hz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            khz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mhz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ghz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            thz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            phz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ehz()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zhz()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yhz()
          </code>{" "}
          return Hertz-scaled unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Type Preservation –{" "}
          </strong>
          Preserves input types (accepts and returns{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            int
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            float
          </code>{" "}
          without casting) to avoid arithmetic precision loss.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.freq.<helper>(value: int | float) -> int | float" />

      <div className="my-4 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale (Hertz)
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.hz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.khz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.mhz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.ghz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.thz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.phz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^5
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.ehz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^6
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.zhz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                freq.yhz(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^8
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="freq API - Basic Usage"
        code={`from sizelib import freq

# Define frequency constraints cleanly in Hz
CPU_BASE_CLOCK = freq.ghz(3.2)       # 3.2 GHz (3200000000.0 Hz)
RAM_SPEED = freq.mhz(3200)           # 3200 MHz (3200000000 Hz)
AUDIO_SAMPLE_RATE = freq.khz(44.1)   # 44.1 kHz (44100.0 Hz)
RADIO_BAND = freq.mhz(100)           # 100 MHz (100000000 Hz)`}
      />

      <CodeBlockRenderer
        language="python"
        title="freq API - Variables & Expressions"
        code={`from sizelib import freq

# Variables and expressions are fully supported
multiplier = 4.5
clock_speed = freq.ghz(multiplier)   # 4.5 GHz (4500000000.0 Hz)`}
      />

      <CodeBlockRenderer
        language="python"
        title="freq API - Type Preservation"
        code={`from sizelib import freq

# Input types (int/float) are dynamically preserved
BASE_CLOCK = freq.mhz(800)
print(BASE_CLOCK)                    # Output: 800000000
print(type(BASE_CLOCK))              # Output: <class 'int'>

BOOST_CLOCK = freq.ghz(4.8)
print(BOOST_CLOCK)                   # Output: 4800000000.0
print(type(BOOST_CLOCK))             # Output: <class 'float'>`}
      />
    </article>
  );
}
