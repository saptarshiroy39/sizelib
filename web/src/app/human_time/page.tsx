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
          Converts raw second value into human-readable duration strings like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            5 ms
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            1 min
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            2 hour
          </code>
          , or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            1 day
          </code>
          .
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Max Unit Selection –{" "}
          </strong>
          Automatically resolves duration into the largest matching unit step.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.human_time(seconds: int | float) -> str" />

      <CodeBlockRenderer
        language="python"
        title="human_time() - Usage"
        code={`from sizelib import human_time, time

print(human_time(0.005))        # Output: 5 ms
print(human_time(time.s(45)))   # Output: 45 s
print(human_time(time.min(90))) # Output: 1.50 hour
print(human_time(time.hour(2))) # Output: 2 hour`}
      />
    </article>
  );
}
