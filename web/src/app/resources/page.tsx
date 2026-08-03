import Link from "next/link";
import {
  IconBrandPython,
  IconBrandGithub,
  IconHeart,
  IconCircleDot,
} from "@tabler/icons-react";

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
        <span className="text-foreground font-medium">Resources</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Resources
      </h1>

      <div className="h-px bg-border" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Card 1: PyPI Package */}
        <div className="border border-border bg-card">
          <div className="flex flex-col justify-between p-5 bg-muted/10 h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted/40 text-emerald-500 border border-border rounded-none">
                  <IconBrandPython className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground">
                  PyPI Package
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                View releases and download instructions on the Python Package
                Index.
              </p>
            </div>
            <div className="mt-5">
              <a
                href="https://pypi.org/project/sizelib"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-none border border-border bg-muted/40 hover:bg-muted/80 text-foreground transition-colors cursor-pointer w-fit h-8"
              >
                <IconBrandPython className="h-4 w-4 text-emerald-500" />
                <span>PyPI</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: GitHub Repository */}
        <div className="border border-border bg-card">
          <div className="flex flex-col justify-between p-5 bg-muted/10 h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted/40 text-foreground border border-border rounded-none">
                  <IconBrandGithub className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground">
                  GitHub Repository
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Explore the source code, star the project, and clone the
                repository.
              </p>
            </div>
            <div className="mt-5">
              <a
                href="https://github.com/saptarshiroy39/sizelib"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-none border border-border bg-muted/40 hover:bg-muted/80 text-foreground transition-colors cursor-pointer w-fit h-8"
              >
                <IconBrandGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Submit an Issue */}
        <div className="border border-border bg-card">
          <div className="flex flex-col justify-between p-5 bg-muted/10 h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted/40 text-blue-500 border border-border rounded-none">
                  <IconCircleDot className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground">
                  Submit an Issue
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Report bugs, request new features, or ask questions on our
                tracker.
              </p>
            </div>
            <div className="mt-5">
              <a
                href="https://github.com/saptarshiroy39/sizelib/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-none border border-border bg-muted/40 hover:bg-muted/80 text-foreground transition-colors cursor-pointer w-fit h-8"
              >
                <IconCircleDot className="h-4 w-4 text-blue-500" />
                <span>Issues</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Support sizelib */}
        <div className="border border-border bg-card">
          <div className="flex flex-col justify-between p-5 bg-muted/10 h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted/40 text-rose-500 border border-border rounded-none">
                  <IconHeart className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground">
                  Support sizelib
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Donate to support the development of our open-source tools.
              </p>
            </div>
            <div className="mt-5">
              <a
                href="https://github.com/sponsors/saptarshiroy39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-none border border-border bg-muted/40 hover:bg-muted/80 text-foreground transition-colors cursor-pointer w-fit h-8"
              >
                <IconHeart className="h-4 w-4 text-rose-500" />
                <span>Sponsor</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
