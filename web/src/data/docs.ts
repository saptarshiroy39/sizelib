export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface CodeBlock {
  type: "code";
  code: string;
  language: string;
  title?: string;
  output?: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface ApiBlock {
  type: "api";
  name: string;
  signature: string;
  description: string;
  parameters: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  returns: { type: string; description: string };
  exceptions?: { type: string; description: string }[];
  notes?: string;
}

export interface DiagramBlock {
  type: "diagram";
  diagramType: "rollback";
}

export type DocBlock =
  ParagraphBlock | CodeBlock | ListBlock | TableBlock | ApiBlock | DiagramBlock;

export interface DocPage {
  title: string;
  blocks: DocBlock[];
}

export const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "size - Helper Functions", href: "/size" },
      { title: "humanize() - Format Bytes", href: "/humanize" },
    ],
  },
  {
    title: "Information",
    items: [
      { title: "Author", href: "/author" },
      { title: "Resources", href: "/resources" },
    ],
  },
];

export const docsData: Record<string, DocPage> = {
  introduction: {
    title: "What is sizelib?",
    blocks: [
      {
        type: "paragraph",
        text: "sizelib is a simple, pythonic library designed for calculating, converting, and humanizing file sizes. It offers a zero-overhead and highly readable API.",
      },
      {
        type: "list",
        items: [
          "**Size Helper Functions –** Define constraints easily using binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods.",
          "**Type Preservation –** All unit helper functions return integers when passed an integer value, preserving precise types for type-checkers and calculations.",
          "**Humanizing Byte Sizes –** Convert raw byte values back into clean, readable strings using the `humanize()` function.",
          "**Dual Base Support –** Full support for binary base (e.g. KiB, MiB, GiB) and decimal base (e.g. KB, MB, GB) units.",
          "**Variables & Expressions –** Fully supports using variables and complex expressions inside calculations.",
          "**Zero Overhead & Dependencies –** Pure-Python library with absolutely no dependencies.",
        ],
      },
    ],
  },
  installation: {
    title: "Installation",
    blocks: [
      {
        type: "list",
        items: ["Install sizelib from PyPI using `pip`:"],
      },
      {
        type: "code",
        language: "bash",
        title: "pip",
        code: "pip install sizelib",
      },
      {
        type: "list",
        items: ["Install sizelib from PyPI using `uv`:"],
      },
      {
        type: "code",
        language: "bash",
        title: "uv",
        code: "uv add sizelib",
      },
      {
        type: "list",
        items: ["Verify the installation version:"],
      },
      {
        type: "code",
        language: "python",
        title: "Verify Version",
        code: "import sizelib\nprint(sizelib.__version__)",
      },
    ],
  },
  size: {
    title: "size - Helper Functions",
    blocks: [
      {
        type: "list",
        items: [
          "**Binary Helpers –** Methods like `kib()`, `mib()`, `gib()`, `tib()` return 1024-based unit calculations.",
          "**Decimal Helpers –** Methods like `b()`, `kb()`, `mb()`, `gb()`, `tb()` return 1000-based unit calculations.",
          "**Type-Safe Math –** Preserves type signatures (accepts and returns `int` or `float` accordingly).",
        ],
      },
      {
        type: "api",
        name: "size",
        signature: "sizelib.size.<helper>(value: int | float) -> int | float",
        description:
          "Applies binary (1024) or decimal (1000) multiplication scale on the input value depending on the helper method used.",
        parameters: [
          {
            name: "value",
            type: "int | float",
            required: true,
            description: "The value to scale (e.g. number of gigabytes).",
          },
        ],
        returns: {
          type: "int | float",
          description: "Scaled byte size value.",
        },
      },
      {
        type: "code",
        language: "python",
        title: "size Helpers - API",
        code: `from sizelib import size\n\nMAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)\nCACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)\nUSER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)\n\n# Variables and expressions are fully supported\nlimit = 2\ncustom_limit = size.gib(limit)   # 2 GiB (2147483648 bytes)\n\nprint(MAX_UPLOAD_SIZE)           # Output: 10485760`,
      },
    ],
  },
  humanize: {
    title: "humanize() - Format Bytes",
    blocks: [
      {
        type: "list",
        items: [
          "**String Formatting –** Converts raw bytes back into readable strings like `2 GiB` or `50 GB`.",
          "**Smart Decimal Precision –** Formats floats/decimals cleanly up to 2 decimal places.",
          "**Dual Bases –** Supports base=2 (binary) and base=10 (decimal) formatting output units.",
        ],
      },
      {
        type: "api",
        name: "humanize",
        signature:
          "sizelib.humanize(size_bytes: int | float, base: int = 2) -> str",
        description:
          "Formats a raw byte count into a clean, human-readable string.",
        parameters: [
          {
            name: "size_bytes",
            type: "int | float",
            required: true,
            description: "The raw size in bytes. Must not be negative.",
          },
          {
            name: "base",
            type: "int",
            required: false,
            description: "Unit base. 2 for binary (default), 10 for decimal.",
          },
        ],
        returns: {
          type: "str",
          description: "Formatted human-readable byte string.",
        },
      },
      {
        type: "code",
        language: "python",
        title: "humanize() - API",
        code: `from sizelib import humanize, size\n\n# Default binary formatting (base 2 / 1024)\nprint(humanize(size.mib(10)))  # Output: 10 MiB\nprint(humanize(size.gib(2)))   # Output: 2 GiB\n\n# Decimal formatting (base 10 / 1000)\nprint(humanize(size.gb(50), base=10))  # Output: 50 GB`,
      },
    ],
  },
  author: {
    title: "Author",
    blocks: [
      {
        type: "list",
        items: [
          "**Development –** Created and maintained by [`Saptarshi Roy`](https://hirishi.in) to provide zero-overhead byte conversions.",
          "**GitHub –** Explore the project repository at [`saptarshiroy39/sizelib`](https://github.com/saptarshiroy39/sizelib) and follow developer profile updates at [`@saptarshiroy39`](https://github.com/saptarshiroy39).",
          "**PyPI Package –** View releases and download instructions directly from [`sizelib` on PyPI](https://pypi.org/project/sizelib/) (profile: [`@saptarshiroy39`](https://github.com/saptarshiroy39/user/saptarshiroy39/)).",
          "**License –** Distributed openly under the permissive [`MIT License`](https://github.com/saptarshiroy39/sizelib/blob/main/LICENSE) terms.",
        ],
      },
    ],
  },
  resources: {
    title: "Resources",
    blocks: [
      {
        type: "list",
        items: [
          "**[`PyPI Package`](https://pypi.org/project/sizelib)** — View releases and download instructions.",
          "**[`GitHub Repository`](https://github.com/saptarshiroy39/sizelib)** — Explore the codebase and clone the repository.",
          "**[`Submit an Issue`](https://github.com/saptarshiroy39/sizelib/issues)** — Report bugs, request features, or ask questions.",
          "**[`Support sizelib`](https://github.com/sponsors/saptarshiroy39)** — Donate and support our open-source tools.",
        ],
      },
    ],
  },
};
