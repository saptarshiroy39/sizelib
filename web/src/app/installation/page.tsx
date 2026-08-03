import Link from "next/link";
import { CodeBlockRenderer } from "@/components/DocBlocks";

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
        <span className="text-foreground font-medium">Installation</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Installation
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          Install sizelib from PyPI using{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pip
          </code>
          :
        </li>
      </ul>

      <CodeBlockRenderer
        language="bash"
        title="pip"
        code="pip install sizelib"
      />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          Install sizelib from PyPI using{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            uv
          </code>
          :
        </li>
      </ul>

      <CodeBlockRenderer language="bash" title="uv" code="uv add sizelib" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          Verify the installation version:
        </li>
      </ul>

      <CodeBlockRenderer
        language="python"
        title="Verify Version"
        code={`import sizelib
print(sizelib.__version__)`}
      />
    </article>
  );
}
