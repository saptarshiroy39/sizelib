"use client";

import { useState } from "react";
import { IconCopy, IconCheck, IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 border border-border bg-background text-muted-foreground hover:text-sidebar-primary hover:border-sidebar-primary/45 rounded-none transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? (
        <IconCheck className="h-3.5 w-3.5 text-emerald-500" />
      ) : (
        <IconCopy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

const KEYWORDS = new Set([
  "from",
  "import",
  "def",
  "return",
  "if",
  "else",
  "for",
  "in",
  "while",
  "True",
  "False",
  "None",
  "and",
  "or",
  "not",
  "with",
  "as",
  "class",
  "pass",
  "raise",
  "try",
  "except",
  "finally",
]);
const API_FNS = new Set([
  "humanize",
  "b",
  "kb",
  "mb",
  "gb",
  "tb",
  "kib",
  "mib",
  "gib",
  "tib",
  "size",
]);
const TYPES = new Set([
  "str",
  "dict",
  "Optional",
  "int",
  "float",
  "list",
  "bool",
]);

function tokenizePythonLine(line: string, lineIdx: number) {
  if (line.trimStart().startsWith("#")) {
    return (
      <span key={lineIdx} className="italic font-normal text-muted-foreground">
        {line}
      </span>
    );
  }
  const pattern =
    /#[^\n]*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[a-zA-Z_][a-zA-Z0-9_]*|[^a-zA-Z_"'#]+/g;
  const nodes: React.ReactNode[] = [];
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(line)) !== null) {
    const t = m[0];
    if (t.startsWith("#")) {
      nodes.push(
        <span key={i++} className="italic font-normal text-muted-foreground">
          {t}
        </span>,
      );
    } else if (t.startsWith('"') || t.startsWith("'")) {
      nodes.push(
        <span key={i++} className="text-amber-600 dark:text-amber-400">
          {t}
        </span>,
      );
    } else if (KEYWORDS.has(t)) {
      nodes.push(
        <span key={i++} className="text-blue-600 dark:text-blue-400">
          {t}
        </span>,
      );
    } else if (TYPES.has(t)) {
      nodes.push(
        <span key={i++} className="text-purple-600 dark:text-purple-400">
          {t}
        </span>,
      );
    } else if (API_FNS.has(t)) {
      nodes.push(
        <span
          key={i++}
          className="text-emerald-600 dark:text-emerald-400 font-semibold"
        >
          {t}
        </span>,
      );
    } else {
      nodes.push(
        <span key={i++} className="text-foreground/90">
          {t}
        </span>,
      );
    }
  }
  return <span key={lineIdx}>{nodes}</span>;
}

export function CodeBlockRenderer({
  code,
  language,
  title,
}: {
  code: string;
  language: string;
  title?: string;
}) {
  const isPython = language === "python" || language === "py";

  const formattedCode = code.split("\n").map((line, idx) => {
    if (isPython) {
      return (
        <span key={idx}>
          {line === "" ? <br /> : tokenizePythonLine(line, idx)}
          {"\n"}
        </span>
      );
    }

    const isComment =
      line.trim().startsWith("#") || line.trim().startsWith("//");
    return (
      <span
        key={idx}
        className={cn(
          isComment
            ? "italic font-normal text-muted-foreground"
            : "text-foreground/90",
        )}
      >
        {line}
        {"\n"}
      </span>
    );
  });

  return (
    <div className="my-4 border border-border bg-card font-mono text-sm leading-relaxed">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40">
        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
          <IconCode className="h-3.5 w-3.5 text-sidebar-primary" />
          {title || language}
        </span>
        <CopyButton text={code} />
      </div>

      <pre className="p-4 overflow-x-auto bg-muted/10 whitespace-pre-wrap">
        <code>{formattedCode}</code>
      </pre>
    </div>
  );
}

export function ApiRenderer({ signature }: { signature: string }) {
  return (
    <div className="my-4 border border-border bg-card font-mono text-sm leading-relaxed">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40">
        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
          <IconCode className="h-3.5 w-3.5 text-sidebar-primary" />
          Signature
        </span>
      </div>
      <pre className="p-4 overflow-x-auto bg-muted/10 whitespace-pre-wrap">
        <code>{tokenizePythonLine(signature, 0)}</code>
      </pre>
    </div>
  );
}
