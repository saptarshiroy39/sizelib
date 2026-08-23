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
        <span className="text-foreground font-medium">time</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        time - Time Helpers
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Time Scaling Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ms()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            min()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            hour()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            day()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            week()
          </code>{" "}
          return second-scaled unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Type Preservation –{" "}
          </strong>
          Preserves input types (accepts and returns{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            int
          </code>
          Preserving precise type behavior).
        </li>
      </ul>

      <ApiRenderer signature="sizelib.time.<helper>(value: int | float) -> int | float" />

      <div className="my-4 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale (second)
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.ms(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                0.001
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                0.001
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.s(value)
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
                time.min(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                60
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                60
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.hour(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                3,600
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                3,600
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.day(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                86,400
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                86,400
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.week(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                604,800
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                604,800
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="time API - Usage"
        code={`from sizelib import time\n\nTIMEOUT = time.s(30)          # 30 s\nCACHE_TTL = time.min(15)      # 900 s\nTOKEN_EXPIRY = time.hour(2)   # 7200 s\nWORKER_WAIT = time.ms(500)    # 0.5 s`}
      />
    </article>
  );
}
