"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { IconBook } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main
      id="main"
      className="bg-sidebar flex min-h-screen flex-col items-center justify-center gap-12 p-4 text-center font-mono text-foreground"
    >
      <div className="w-full max-w-xl py-6">
        <MorphingText
          texts={["404", "Not Found"]}
          className="text-primary font-mono font-bold"
        />
      </div>
      <Button
        size="lg"
        variant="default"
        className="mt-6 text-lg font-mono"
        asChild
      >
        <Link href="/">
          <IconBook className="mr-2 h-5 w-5" />
          Return to Docs
        </Link>
      </Button>
    </main>
  );
}
