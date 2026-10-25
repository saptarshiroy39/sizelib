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
            m()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            h()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            d()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            w()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m28()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m29()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m30()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            m31()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            y()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ly()
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
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            float
          </code>{" "}
          without casting) to avoid arithmetic precision loss.
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
                1 / 1,000
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
                time.m(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1 * 60
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                60
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.h(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1 * 60 * 60
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                3,600
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.d(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1 * 60 * 60 * 24
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                86,400
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.w(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1 * 60 * 60 * 24 * 7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                604,800
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.m28(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                28 days (86,400 * 28)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                2,419,200
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.m29(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                29 days (86,400 * 29)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                2,505,600
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.m30(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                30 days (86,400 * 30)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                2,592,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.m31(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                31 days (86,400 * 31)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                2,678,400
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.y(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                365 days (86,400 * 365)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                31,536,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                time.ly(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                366 days (86,400 * 366)
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                31,622,400
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="time API - Basic Usage"
        code={`from sizelib import time

# Standard time unit helpers
TIMEOUT = time.s(30)            # 30 s
CACHE_TTL = time.m(15)          # 900 s
TOKEN_EXPIRY = time.h(2)        # 7200 s

# Month duration helpers (28, 29, 30, and 31-day months)
FEB_NON_LEAP = time.m28(1)      # 2419200 s (28 days)
FEB_LEAP = time.m29(1)          # 2505600 s (29 days)
SHORT_MONTH = time.m30(1)       # 2592000 s (30 days)
LONG_MONTH = time.m31(1)        # 2678400 s (31 days)

# Year duration helpers (regular and leap years)
REGULAR_YEAR = time.y(1)        # 31536000 s (365 days)
LEAP_YEAR = time.ly(1)          # 31622400 s (366 days)`}
      />

      <CodeBlockRenderer
        language="python"
        title="time API - Variables & Expressions"
        code={`from sizelib import time

# Variables and expressions are fully supported
limit = 5
custom_timeout = time.m(limit)  # 300 s`}
      />

      <CodeBlockRenderer
        language="python"
        title="time API - Type Preservation"
        code={`from sizelib import time

# Input types (int/float) are dynamically preserved
TIMEOUT = time.s(30)
print(TIMEOUT)                  # Output: 30
print(type(TIMEOUT))            # Output: <class 'int'>

INTERVAL = time.s(1.5)
print(INTERVAL)                 # Output: 1.5
print(type(INTERVAL))           # Output: <class 'float'>`}
      />
    </article>
  );
}
