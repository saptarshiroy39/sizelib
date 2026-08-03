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
        <span className="text-foreground font-medium">size</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        size - Helper Functions
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Binary Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kib()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mib()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gib()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tib()
          </code>{" "}
          return 1024-based unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Decimal Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            b()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kb()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mb()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gb()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tb()
          </code>{" "}
          return 1000-based unit calculations.
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
          without casting) to avoid division inaccuracies.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.size.<helper>(value: int | float) -> int | float" />

      <div className="my-4 overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.b(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Decimal</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.kb(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Decimal</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.mb(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Decimal</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.gb(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Decimal</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.tb(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Decimal</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.kib(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Binary</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,024
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.mib(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Binary</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,048,576
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.gib(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Binary</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,073,741,824
              </td>
            </tr>
            <tr className="hover:bg-muted/5">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                size.tib(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">Binary</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,099,511,627,776
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="size API - Basic Usage"
        code={`from sizelib import size

# Define constraints using binary (base 2) or decimal (base 10) helper methods
MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)`}
      />

      <CodeBlockRenderer
        language="python"
        title="size API - Variables & Expressions"
        code={`from sizelib import size

# Variables and expressions are fully supported
limit = 2
custom_limit = size.gib(limit)   # 2 GiB (2147483648 bytes)`}
      />

      <CodeBlockRenderer
        language="python"
        title="size API - Type Preservation"
        code={`from sizelib import size

# Input types (int/float) are dynamically preserved
MAX_UPLOAD_SIZE = size.mib(10)
print(MAX_UPLOAD_SIZE)           # Output: 10485760
print(type(MAX_UPLOAD_SIZE))     # Output: <class 'int'>`}
      />
    </article>
  );
}
