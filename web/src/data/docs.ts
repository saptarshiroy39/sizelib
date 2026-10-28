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

export type DocBlock =
  | ParagraphBlock
  | CodeBlock
  | ListBlock
  | TableBlock
  | ApiBlock;

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
      { title: "size - Size Helpers", href: "/size" },
      { title: "human_size() - Format Bytes", href: "/human_size" },
      { title: "time - Time Helpers", href: "/time" },
      { title: "human_time() - Format Times", href: "/human_time" },
      { title: "freq - Frequency Helpers", href: "/freq" },
      { title: "human_freq() - Format Frequency", href: "/human_freq" },
      { title: "rate - Rate Helpers", href: "/rate" },
      { title: "human_rate() - Format Rate", href: "/human_rate" },
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
        text: "sizelib is a Python library for calculating and humanizing file sizes, times, frequencies & data transfer rates. It offers a zero-overhead and highly readable API.",
      },
      {
        type: "list",
        items: [
          "**Size Helper Functions –** Define constraints easily using binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods.",
          "**Humanizing Byte Sizes –** Convert raw byte values back into clean, readable strings using `human_size()`.",
          "**Time Helper Functions –** Define time units cleanly in seconds (`ms`, `s`, `m`, `h`, `d`, `w`, `m28`..`m31`, `y`, `ly`).",
          "**Humanizing Times –** Convert raw second values into readable duration strings using `human_time()`.",
          "**Frequency Helper Functions –** Define frequency units cleanly in Hertz (`hz`, `khz`, `mhz`, `ghz`, `thz`, `phz`, `ehz`, `zhz`, `yhz`).",
          "**Humanizing Frequencies –** Convert raw Hertz values into readable frequency strings using `human_freq()`.",
          "**Rate Helper Functions –** Define data transfer rate and bandwidth constraints cleanly (`bps`..`ybps`, `b_s`, `kib_s`..`yib_s`, `kb_s`..`yb_s`).",
          "**Humanizing Rates –** Convert raw bit or byte rates into readable rate strings using `human_rate()`.",
          "**Type Preservation –** Dynamically maintains input types (`int` or `float`) across all calculations.",
          "**Zero Overhead & Dependencies –** Pure-Python library with zero external dependencies.",
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
    title: "size - Size Helpers",
    blocks: [
      {
        type: "list",
        items: [
          "**Binary Helpers –** Methods like `kib()`, `mib()`, `gib()`, `tib()`, `pib()`, `eib()`, `zib()`, `yib()` return 1024-based unit calculations.",
          "**Decimal Helpers –** Methods like `b()`, `kb()`, `mb()`, `gb()`, `tb()`, `pb()`, `eb()`, `zb()`, `yb()` return 1000-based unit calculations.",
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
            description: "The value to scale (e.g. number of gigabyte).",
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
        code: `from sizelib import size\n\nMAX_UPLOAD_SIZE = size.mib(10)  # 10 MiB (10485760 bytes)\nCACHE_LIMIT = size.gib(2)       # 2 GiB (2147483648 bytes)\nUSER_QUOTA = size.gb(50)        # 50 GB (50000000000 bytes)\n\n# Variables and expressions are fully supported\nlimit = 2\ncustom_limit = size.gib(limit)  # 2 GiB (2147483648 bytes)\n\nprint(MAX_UPLOAD_SIZE)          # Output: 10485760`,
      },
    ],
  },
  time: {
    title: "time - Time Helpers",
    blocks: [
      {
        type: "list",
        items: [
          "**Time Scaling Helpers –** Methods like `ms()`, `s()`, `m()`, `h()`, `d()`, `w()`, `m28()`, `m29()`, `m30()`, `m31()`, `y()`, `ly()` return second-scaled calculations.",
          "**Type Preservation –** Maintains input types (`int` or `float`) for clean arithmetic.",
        ],
      },
      {
        type: "api",
        name: "time",
        signature: "sizelib.time.<helper>(value: int | float) -> int | float",
        description: "Scales duration value relative to second.",
        parameters: [
          {
            name: "value",
            type: "int | float",
            required: true,
            description: "The value to scale (e.g. number of hours).",
          },
        ],
        returns: {
          type: "int | float",
          description: "Scaled duration value in second.",
        },
      },
      {
        type: "table",
        headers: [
          "Helper Method",
          "Multiplier Scale (second)",
          "Value (e.g. for input 1)",
        ],
        rows: [
          ["time.ms(value)", "1 / 1,000", "0.001"],
          ["time.s(value)", "1", "1"],
          ["time.m(value)", "1 * 60", "60"],
          ["time.h(value)", "1 * 60 * 60", "3,600"],
          ["time.d(value)", "1 * 60 * 60 * 24", "86,400"],
          ["time.w(value)", "1 * 60 * 60 * 24 * 7", "604,800"],
          ["time.m28(value)", "28 days (86,400 * 28)", "2,419,200"],
          ["time.m29(value)", "29 days (86,400 * 29)", "2,505,600"],
          ["time.m30(value)", "30 days (86,400 * 30)", "2,592,000"],
          ["time.m31(value)", "31 days (86,400 * 31)", "2,678,400"],
          ["time.y(value)", "365 days (86,400 * 365)", "31,536,000"],
          ["time.ly(value)", "366 days (86,400 * 366)", "31,622,400"],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "time Helpers - API",
        code: `from sizelib import time\n\n# Standard time unit helpers\nTIMEOUT = time.s(30)            # 30 s\nCACHE_TTL = time.m(15)          # 900 s\nTOKEN_EXPIRY = time.h(2)        # 7200 s\n\n# Month duration helpers (28, 29, 30, and 31-day months)\nFEB_NON_LEAP = time.m28(1)      # 2419200 s (28 days)\nFEB_LEAP = time.m29(1)          # 2505600 s (29 days)\nSHORT_MONTH = time.m30(1)       # 2592000 s (30 days)\nLONG_MONTH = time.m31(1)        # 2678400 s (31 days)\n\n# Year duration helpers (regular and leap years)\nREGULAR_YEAR = time.y(1)        # 31536000 s (365 days)\nLEAP_YEAR = time.ly(1)          # 31622400 s (366 days)`,
      },
    ],
  },
  freq: {
    title: "freq - Frequency Helpers",
    blocks: [
      {
        type: "list",
        items: [
          "**Frequency Scaling Helpers –** Methods like `hz()`, `khz()`, `mhz()`, `ghz()`, `thz()`, `phz()`, `ehz()`, `zhz()`, and `yhz()` return Hertz-scaled calculations.",
          "**Type Preservation –** Maintains input types (`int` or `float`) for clean arithmetic without casting.",
        ],
      },
      {
        type: "api",
        name: "freq",
        signature: "sizelib.freq.<helper>(value: int | float) -> int | float",
        description: "Scales frequency value relative to Hertz (Hz).",
        parameters: [
          {
            name: "value",
            type: "int | float",
            required: true,
            description: "The value to scale (e.g. number of gigahertz).",
          },
        ],
        returns: {
          type: "int | float",
          description: "Scaled frequency value in Hertz (Hz).",
        },
      },
      {
        type: "table",
        headers: [
          "Helper Method",
          "Multiplier Scale (Hertz)",
          "Value (e.g. for input 1)",
        ],
        rows: [
          ["freq.hz(value)", "1", "1"],
          ["freq.khz(value)", "1,000", "1,000"],
          ["freq.mhz(value)", "1,000^2", "1,000,000"],
          ["freq.ghz(value)", "1,000^3", "1,000,000,000"],
          ["freq.thz(value)", "1,000^4", "1,000,000,000,000"],
          ["freq.phz(value)", "1,000^5", "1,000,000,000,000,000"],
          ["freq.ehz(value)", "1,000^6", "1,000,000,000,000,000,000"],
          ["freq.zhz(value)", "1,000^7", "1,000,000,000,000,000,000,000"],
          ["freq.yhz(value)", "1,000^8", "1,000,000,000,000,000,000,000,000"],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "freq Helpers - API",
        code: `from sizelib import freq\n\n# Define frequency constraints cleanly in Hz\nCPU_BASE_CLOCK = freq.ghz(3.2)      # 3.2 GHz (3200000000.0 Hz)\nRAM_SPEED = freq.mhz(3200)          # 3200 MHz (3200000000 Hz)\nAUDIO_SAMPLE_RATE = freq.khz(44.1)  # 44.1 kHz (44100.0 Hz)\nRADIO_BAND = freq.mhz(100)          # 100 MHz (100000000 Hz)`,
      },
    ],
  },
  human_size: {
    title: "human_size() - Format Bytes",
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
        name: "human_size",
        signature:
          "sizelib.human_size(size_bytes: int | float, base: int = 2) -> str",
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
        type: "table",
        headers: ["Base", "Divisor", "Unit Escalation Order"],
        rows: [
          [
            "Base 2 (Binary)",
            "1024",
            "B -> KiB -> MiB -> GiB -> TiB -> PiB -> EiB -> ZiB -> YiB",
          ],
          [
            "Base 10 (Decimal)",
            "1000",
            "B -> KB -> MB -> GB -> TB -> PB -> EB -> ZB -> YB",
          ],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "human_size() - API",
        code: `from sizelib import human_size, size\n\n# Default binary formatting (base 2 / 1024)\nprint(human_size(10485760))              # Output: 10 MiB\nprint(human_size(1500000))               # Output: 1.43 MiB\nprint(human_size(size.gib(2.5)))         # Output: 2.50 GiB\n\n# Decimal formatting (base 10 / 1000)\nprint(human_size(5000000000, base=10))   # Output: 5 GB\nprint(human_size(1500000, base=10))      # Output: 1.50 MB\nprint(human_size(size.gb(50), base=10))  # Output: 50 GB`,
      },
    ],
  },
  human_time: {
    title: "human_time() - Format Times",
    blocks: [
      {
        type: "list",
        items: [
          "**Duration Formatting –** Converts raw second values into clean, readable duration strings like `5 ms`, `45 s`, `1.50 h`, `2 d`.",
          "**Smart Decimal Precision –** Formats floats/decimals cleanly up to 2 decimal places.",
          "**Automatic Unit Escalation –** Automatically escalates duration steps across ms, s, m, h, d, and w.",
        ],
      },
      {
        type: "api",
        name: "human_time",
        signature: "sizelib.human_time(seconds: int | float) -> str",
        description:
          "Formats raw second into a human-readable duration string.",
        parameters: [
          {
            name: "seconds",
            type: "int | float",
            required: true,
            description: "The duration in second. Must not be negative.",
          },
        ],
        returns: {
          type: "str",
          description: "Formatted human-readable duration string.",
        },
      },
      {
        type: "table",
        headers: ["Unit", "Scale Divisors", "Unit Escalation Order"],
        rows: [
          [
            "Duration Units",
            "1000ms / 60s / 60m / 24h / 7d",
            "ms -> s -> m -> h -> d -> w",
          ],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "human_time() - API",
        code: `from sizelib import human_time, time\n\nprint(human_time(0.005))        # Output: 5 ms\nprint(human_time(time.s(45)))   # Output: 45 s\nprint(human_time(time.m(90)))   # Output: 1.50 h\nprint(human_time(time.h(2)))    # Output: 2 h\nprint(human_time(time.d(1)))    # Output: 1 d`,
      },
    ],
  },
  human_freq: {
    title: "human_freq() - Format Frequency",
    blocks: [
      {
        type: "list",
        items: [
          "**Frequency Formatting –** Converts raw Hertz values into clean, readable frequency strings like `44.10 kHz`, `800 MHz`, `3.20 GHz`.",
          "**Smart Decimal Precision –** Formats floats/decimals cleanly up to 2 decimal places.",
          "**Full SI Range –** Automatically escalates across Hz, kHz, MHz, GHz, THz, PHz, EHz, ZHz, and YHz.",
        ],
      },
      {
        type: "api",
        name: "human_freq",
        signature: "sizelib.human_freq(hz: int | float) -> str",
        description:
          "Formats raw Hertz value into a clean, human-readable frequency string.",
        parameters: [
          {
            name: "hz",
            type: "int | float",
            required: true,
            description: "The frequency in Hertz (Hz). Must not be negative.",
          },
        ],
        returns: {
          type: "str",
          description: "Formatted human-readable frequency string.",
        },
      },
      {
        type: "table",
        headers: ["Unit", "Scale Divisor", "Unit Escalation Order"],
        rows: [
          [
            "Frequency Units",
            "1000",
            "Hz -> kHz -> MHz -> GHz -> THz -> PHz -> EHz -> ZHz -> YHz",
          ],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "human_freq() - API",
        code: `from sizelib import freq, human_freq\n\nprint(human_freq(44100))             # Output: 44.10 kHz\nprint(human_freq(freq.mhz(800)))     # Output: 800 MHz\nprint(human_freq(freq.ghz(3.2)))     # Output: 3.20 GHz\nprint(human_freq(freq.thz(1.5)))     # Output: 1.50 THz`,
      },
    ],
  },
  rate: {
    title: "rate - Rate Helpers",
    blocks: [
      {
        type: "list",
        items: [
          "**Bytes (Binary) Helpers –** `b_s()`, `kib_s()`, `mib_s()`, `gib_s()`, `tib_s()`, `pib_s()`, `eib_s()`, `zib_s()`, and `yib_s()` return binary (base 2 / 1024) byte-per-second unit calculations.",
          "**Bytes (Decimal) Helpers –** `b_s()`, `kb_s()`, `mb_s()`, `gb_s()`, `tb_s()`, `pb_s()`, `eb_s()`, `zb_s()`, and `yb_s()` return decimal (base 10 / 1000) byte-per-second unit calculations.",
          "**Bits (Binary) Helpers –** `bps()`, `kibps()`, `mibps()`, `gibps()`, `tibps()`, `pibps()`, `eibps()`, `zibps()`, and `yibps()` return binary (base 2 / 1024) bit-per-second unit calculations.",
          "**Bits (Decimal) Helpers –** `bps()`, `kbps()`, `mbps()`, `gbps()`, `tbps()`, `pbps()`, `ebps()`, `zbps()`, and `ybps()` return decimal (base 10 / 1000) bit-per-second unit calculations.",
          "**Type Preservation –** Preserves input types (`int` or `float`) across calculations without precision loss.",
        ],
      },
      {
        type: "api",
        name: "rate",
        signature: "sizelib.rate.<helper>(value: int | float) -> int | float",
        description:
          "Scales data transfer rate / bitrate value relative to bytes/s or bits/s.",
        parameters: [
          {
            name: "value",
            type: "int | float",
            required: true,
            description: "The rate value to scale (e.g. number of mebibytes/s or megabits/s).",
          },
        ],
        returns: {
          type: "int | float",
          description: "Scaled rate value.",
        },
      },
      {
        type: "table",
        headers: [
          "Rate Type",
          "Target Unit",
          "Function Name",
          "Multiplier",
        ],
        rows: [
          ["Bytes (Binary)", "bytes/s", "rate.b_s(value)", "×1"],
          ["Bytes (Binary)", "kibibytes/s", "rate.kib_s(value)", "×1,024"],
          ["Bytes (Binary)", "mebibytes/s", "rate.mib_s(value)", "×1,048,576"],
          ["Bytes (Binary)", "gibibytes/s", "rate.gib_s(value)", "×1,073,741,824"],
          ["Bytes (Binary)", "tebibytes/s", "rate.tib_s(value)", "×1,099,511,627,776"],
          ["Bytes (Binary)", "pebibytes/s", "rate.pib_s(value)", "×1,125,899,906,842,624"],
          ["Bytes (Binary)", "exbibytes/s", "rate.eib_s(value)", "×1,152,921,504,606,846,976"],
          ["Bytes (Binary)", "zebibytes/s", "rate.zib_s(value)", "×1,180,591,620,717,411,303,424"],
          ["Bytes (Binary)", "yobibytes/s", "rate.yib_s(value)", "×1,208,925,819,614,629,174,706,176"],
          ["Bytes (Decimal)", "bytes/s", "rate.b_s(value)", "×1"],
          ["Bytes (Decimal)", "kilobytes/s", "rate.kb_s(value)", "×1,000"],
          ["Bytes (Decimal)", "megabytes/s", "rate.mb_s(value)", "×1,000,000"],
          ["Bytes (Decimal)", "gigabytes/s", "rate.gb_s(value)", "×1,000,000,000"],
          ["Bytes (Decimal)", "terabytes/s", "rate.tb_s(value)", "×1,000,000,000,000"],
          ["Bytes (Decimal)", "petabytes/s", "rate.pb_s(value)", "×1,000,000,000,000,000"],
          ["Bytes (Decimal)", "exabytes/s", "rate.eb_s(value)", "×1,000,000,000,000,000,000"],
          ["Bytes (Decimal)", "zettabytes/s", "rate.zb_s(value)", "×1,000,000,000,000,000,000,000"],
          ["Bytes (Decimal)", "yottabytes/s", "rate.yb_s(value)", "×1,000,000,000,000,000,000,000,000"],
          ["Bits (Binary)", "bits/s", "rate.bps(value)", "×1"],
          ["Bits (Binary)", "kibibits/s", "rate.kibps(value)", "×1,024"],
          ["Bits (Binary)", "mebibits/s", "rate.mibps(value)", "×1,048,576"],
          ["Bits (Binary)", "gibibits/s", "rate.gibps(value)", "×1,073,741,824"],
          ["Bits (Binary)", "tebibits/s", "rate.tibps(value)", "×1,099,511,627,776"],
          ["Bits (Binary)", "pebibits/s", "rate.pibps(value)", "×1,125,899,906,842,624"],
          ["Bits (Binary)", "exbibits/s", "rate.eibps(value)", "×1,152,921,504,606,846,976"],
          ["Bits (Binary)", "zebibits/s", "rate.zibps(value)", "×1,180,591,620,717,411,303,424"],
          ["Bits (Binary)", "yobibits/s", "rate.yibps(value)", "×1,208,925,819,614,629,174,706,176"],
          ["Bits (Decimal)", "bits/s", "rate.bps(value)", "×1"],
          ["Bits (Decimal)", "kilobits/s", "rate.kbps(value)", "×1,000"],
          ["Bits (Decimal)", "megabits/s", "rate.mbps(value)", "×1,000,000"],
          ["Bits (Decimal)", "gigabits/s", "rate.gbps(value)", "×1,000,000,000"],
          ["Bits (Decimal)", "terabits/s", "rate.tbps(value)", "×1,000,000,000,000"],
          ["Bits (Decimal)", "petabits/s", "rate.pbps(value)", "×1,000,000,000,000,000"],
          ["Bits (Decimal)", "exabits/s", "rate.ebps(value)", "×1,000,000,000,000,000,000"],
          ["Bits (Decimal)", "zettabits/s", "rate.zbps(value)", "×1,000,000,000,000,000,000,000"],
          ["Bits (Decimal)", "yottabits/s", "rate.ybps(value)", "×1,000,000,000,000,000,000,000,000"],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "rate Helpers - API",
        code: `from sizelib import rate\n\n# Define bandwidth and bitrate constraints\nNETWORK_BANDWIDTH = rate.mbps(100)      # 100 Mbps (100000000 bits/s)\nBUFFER_RATE = rate.mibps(50)            # 50 Mibps (52428800 bits/s)\nINTERNET_SPEED = rate.gbps(1)           # 1 Gbps (1000000000 bits/s)\nDOWNLOAD_SPEED = rate.mb_s(12.5)        # 12.5 MB/s (12500000 bytes/s)\nDISK_WRITE_RATE = rate.mib_s(500)       # 500 MiB/s (524288000 bytes/s)`,
      },
    ],
  },
  human_rate: {
    title: "human_rate() - Format Rate",
    blocks: [
      {
        type: "list",
        items: [
          "**String Formatting –** Converts raw bytes or bits per second into readable rate strings like `10 MiB/s`, `20 GB/s`, or `100 Mbps`.",
          "**Smart Decimal Precision –** Formats floats/decimals cleanly up to 2 decimal places.",
          "**Dual Bases & Bitrate Modes –** Supports binary bytes (`KiB/s`), decimal bytes (`KB/s`), binary bits (`Kibps`), and decimal bits (`kbps`).",
        ],
      },
      {
        type: "api",
        name: "human_rate",
        signature:
          "sizelib.human_rate(rate_val: int | float, base: int | None = None, bits: bool = False) -> str",
        description:
          "Formats a raw data rate into a clean, human-readable speed string.",
        parameters: [
          {
            name: "rate_val",
            type: "int | float",
            required: true,
            description:
              "The raw rate in bytes/s or bits/s. Must not be negative.",
          },
          {
            name: "base",
            type: "int | None",
            required: false,
            description:
              "Unit base (2 or 10). Defaults to 2 for byte rates and 10 for bit rates.",
          },
          {
            name: "bits",
            type: "bool",
            required: false,
            description:
              "Set to True to format as bit rates (bps, kbps, Mbps, Gbps...). Defaults to False.",
          },
        ],
        returns: {
          type: "str",
          description: "Formatted human-readable rate string.",
        },
      },
      {
        type: "table",
        headers: ["Base", "Divisor", "Unit Escalation Order"],
        rows: [
          [
            "Base 2 (Binary)",
            "1024",
            "B/s -> KiB/s -> MiB/s -> GiB/s -> TiB/s -> PiB/s -> EiB/s -> ZiB/s -> YiB/s",
          ],
          [
            "Base 10 (Decimal)",
            "1000",
            "B/s -> KB/s -> MB/s -> GB/s -> TB/s -> PB/s -> EB/s -> ZB/s -> YB/s",
          ],
          [
            "Base 2, bits=True",
            "1024",
            "bps -> Kibps -> Mibps -> Gibps -> Tibps -> Pibps -> Eibps -> Zibps -> Yibps",
          ],
          [
            "Base 10, bits=True",
            "1000",
            "bps -> kbps -> Mbps -> Gbps -> Tbps -> Pbps -> Ebps -> Zbps -> Ybps",
          ],
        ],
      },
      {
        type: "code",
        language: "python",
        title: "human_rate() - API",
        code: `from sizelib import human_rate, rate\n\n# Default binary formatting (base 2 / 1024)\nprint(human_rate(10485760))                         # Output: 10 MiB/s\nprint(human_rate(1500000))                          # Output: 1.43 MiB/s\nprint(human_rate(rate.gib_s(2.5)))                  # Output: 2.50 GiB/s\n\n# Decimal formatting (base 10 / 1000)\nprint(human_rate(20000000000, base=10))             # Output: 20 GB/s\nprint(human_rate(1500000, base=10))                 # Output: 1.50 MB/s\nprint(human_rate(rate.kb_s(5), base=10))            # Output: 5 KB/s\n\n# Decimal bit rate formatting (bits=True)\nprint(human_rate(rate.mbps(100), bits=True))        # Output: 100 Mbps\nprint(human_rate(rate.gbps(1.5), bits=True))        # Output: 1.50 Gbps\n\n# Binary bit rate formatting (bits=True, base=2)\nprint(human_rate(rate.mibps(2), base=2, bits=True)) # Output: 2 Mibps`,
      },
    ],
  },

  author: {
    title: "Author",
    blocks: [
      {
        type: "list",
        items: [
          "**Development –** Created and maintained by [`Saptarshi Roy`](https://hirishi.in) to provide zero-overhead byte and time conversions.",
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
