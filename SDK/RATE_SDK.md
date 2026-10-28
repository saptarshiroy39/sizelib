# sizelib Rate SDK Reference

This reference guide covers the data transfer rate calculation and formatting components of `sizelib`: `rate` helper functions and `human_rate()`.

## Imports

```python
from sizelib import human_rate, rate
```

---

## `rate` - Helper Functions

- **Bytes (Binary) Helpers –** Methods like `b_s()`, `kib_s()`, `mib_s()`, `gib_s()`, `tib_s()`, `pib_s()`, `eib_s()`, `zib_s()`, and `yib_s()` return binary (base 2 / 1024) byte-per-second calculations.
- **Bytes (Decimal) Helpers –** Methods like `b_s()`, `kb_s()`, `mb_s()`, `gb_s()`, `tb_s()`, `pb_s()`, `eb_s()`, `zb_s()`, and `yb_s()` return decimal (base 10 / 1000) byte-per-second calculations.
- **Bits (Binary) Helpers –** Methods like `bps()`, `kibps()`, `mibps()`, `gibps()`, `tibps()`, `pibps()`, `eibps()`, `zibps()`, and `yibps()` return binary (base 2 / 1024) bit-per-second calculations.
- **Bits (Decimal) Helpers –** Methods like `bps()`, `kbps()`, `mbps()`, `gbps()`, `tbps()`, `pbps()`, `ebps()`, `zbps()`, and `ybps()` return decimal (base 10 / 1000) bit-per-second calculations.
- **Type Preservation –** Preserves input types (accepts and returns `int` or `float` without casting) to avoid arithmetic precision loss.

### API Signature

```python
sizelib.rate.<helper>(value: int | float) -> int | float
```

### Bytes Helpers (Binary / Base 2)

| Helper Method | Base | Multiplier Scale (bytes/s) | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `rate.b_s(value)` | BIN (2) | 1 | 1 |
| `rate.kib_s(value)` | BIN (2) | 1,024 | 1,024 |
| `rate.mib_s(value)` | BIN (2) | 1,024^2 | 1,048,576 |
| `rate.gib_s(value)` | BIN (2) | 1,024^3 | 1,073,741,824 |
| `rate.tib_s(value)` | BIN (2) | 1,024^4 | 1,099,511,627,776 |
| `rate.pib_s(value)` | BIN (2) | 1,024^5 | 1,125,899,906,842,624 |
| `rate.eib_s(value)` | BIN (2) | 1,024^6 | 1,152,921,504,606,846,976 |
| `rate.zib_s(value)` | BIN (2) | 1,024^7 | 1,180,591,620,717,411,303,424 |
| `rate.yib_s(value)` | BIN (2) | 1,024^8 | 1,208,925,819,614,629,174,706,176 |

### Bytes Helpers (Decimal / Base 10)

| Helper Method | Base | Multiplier Scale (bytes/s) | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `rate.b_s(value)` | DEC (10) | 1 | 1 |
| `rate.kb_s(value)` | DEC (10) | 1,000 | 1,000 |
| `rate.mb_s(value)` | DEC (10) | 1,000^2 | 1,000,000 |
| `rate.gb_s(value)` | DEC (10) | 1,000^3 | 1,000,000,000 |
| `rate.tb_s(value)` | DEC (10) | 1,000^4 | 1,000,000,000,000 |
| `rate.pb_s(value)` | DEC (10) | 1,000^5 | 1,000,000,000,000,000 |
| `rate.eb_s(value)` | DEC (10) | 1,000^6 | 1,000,000,000,000,000,000 |
| `rate.zb_s(value)` | DEC (10) | 1,000^7 | 1,000,000,000,000,000,000,000 |
| `rate.yb_s(value)` | DEC (10) | 1,000^8 | 1,000,000,000,000,000,000,000,000 |

### Bits Helpers (Binary / Base 2)

| Helper Method | Base | Multiplier Scale (bits/s) | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `rate.bps(value)` | BIN (2) | 1 | 1 |
| `rate.kibps(value)` | BIN (2) | 1,024 | 1,024 |
| `rate.mibps(value)` | BIN (2) | 1,024^2 | 1,048,576 |
| `rate.gibps(value)` | BIN (2) | 1,024^3 | 1,073,741,824 |
| `rate.tibps(value)` | BIN (2) | 1,024^4 | 1,099,511,627,776 |
| `rate.pibps(value)` | BIN (2) | 1,024^5 | 1,125,899,906,842,624 |
| `rate.eibps(value)` | BIN (2) | 1,024^6 | 1,152,921,504,606,846,976 |
| `rate.zibps(value)` | BIN (2) | 1,024^7 | 1,180,591,620,717,411,303,424 |
| `rate.yibps(value)` | BIN (2) | 1,024^8 | 1,208,925,819,614,629,174,706,176 |

### Bits Helpers (Decimal / Base 10)

| Helper Method | Base | Multiplier Scale (bits/s) | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `rate.bps(value)` | DEC (10) | 1 | 1 |
| `rate.kbps(value)` | DEC (10) | 1,000 | 1,000 |
| `rate.mbps(value)` | DEC (10) | 1,000^2 | 1,000,000 |
| `rate.gbps(value)` | DEC (10) | 1,000^3 | 1,000,000,000 |
| `rate.tbps(value)` | DEC (10) | 1,000^4 | 1,000,000,000,000 |
| `rate.pbps(value)` | DEC (10) | 1,000^5 | 1,000,000,000,000,000 |
| `rate.ebps(value)` | DEC (10) | 1,000^6 | 1,000,000,000,000,000,000 |
| `rate.zbps(value)` | DEC (10) | 1,000^7 | 1,000,000,000,000,000,000,000 |
| `rate.ybps(value)` | DEC (10) | 1,000^8 | 1,000,000,000,000,000,000,000,000 |

### `rate` API - Basic Usage

```python
from sizelib import rate

# Define bandwidth and bitrate constraints
DISK_WRITE_RATE = rate.mib_s(500)       # 500 MiB/s (524,288,000 bytes/s)
DOWNLOAD_SPEED = rate.mb_s(12.5)        # 12.5 MB/s (12,500,000 bytes/s)
NETWORK_BANDWIDTH = rate.mbps(100)      # 100 Mbps (100,000,000 bits/s)
BUFFER_RATE = rate.mibps(50)            # 50 Mibps (52,428,800 bits/s)
INTERNET_SPEED = rate.gbps(1)           # 1 Gbps (1,000,000,000 bits/s)
BACKBONE_CAPACITY = rate.tbps(10)       # 10 Tbps (10,000,000,000,000 bits/s)
```

### `rate` API - Variables & Expressions

```python
from sizelib import rate

# Variables and expressions are fully supported
target_speed = 50
upload_limit = rate.mbps(target_speed)  # 50 Mbps (50,000,000 bits/s)
```

### `rate` API - Type Preservation

```python
from sizelib import rate

# Input types (int/float) are dynamically preserved
BANDWIDTH = rate.mbps(100)
print(BANDWIDTH)                        # Output: 100000000
print(type(BANDWIDTH))                  # Output: <class 'int'>

THROUGHPUT = rate.mb_s(1.5)
print(THROUGHPUT)                       # Output: 1500000.0
print(type(THROUGHPUT))                 # Output: <class 'float'>
```

---

## `human_rate()` - Format Rates

- **String Formatting –** Converts raw bytes or bits per second into readable rate strings like `10 MiB/s`, `20 GB/s`, or `100 Mbps`.
- **Smart Decimal Precision –** Auto-rounds and formats fractional rates cleanly up to 2 decimal places.
- **Dual Bases & Bitrate Modes –** Supports binary bytes (`KiB/s`), decimal bytes (`KB/s`), binary bits (`Kibps`), and decimal bits (`kbps`).

### API Signature

```python
sizelib.human_rate(rate_val: int | float, base: int | None = None, bits: bool = False) -> str
```

### Output Unit Hierarchy Scale

| Base | Divisor | Unit Escalation Order |
| :--- | :--- | :--- |
| **Base 2 (Binary)** | 1024 | B/s &rarr; KiB/s &rarr; MiB/s &rarr; GiB/s &rarr; TiB/s &rarr; PiB/s &rarr; EiB/s &rarr; ZiB/s &rarr; YiB/s |
| **Base 10 (Decimal)** | 1000 | B/s &rarr; KB/s &rarr; MB/s &rarr; GB/s &rarr; TB/s &rarr; PB/s &rarr; EB/s &rarr; ZB/s &rarr; YB/s |
| **Base 2, bits=True** | 1024 | bps &rarr; Kibps &rarr; Mibps &rarr; Gibps &rarr; Tibps &rarr; Pibps &rarr; Eibps &rarr; Zibps &rarr; Yibps |
| **Base 10, bits=True** | 1000 | bps &rarr; kbps &rarr; Mbps &rarr; Gbps &rarr; Tbps &rarr; Pbps &rarr; Ebps &rarr; Zbps &rarr; Ybps |

### `human_rate()` - Usage

```python
from sizelib import human_rate, rate

# Default binary formatting (base 2 / 1024)
print(human_rate(10485760))                         # Output: 10 MiB/s
print(human_rate(1500000))                          # Output: 1.43 MiB/s
print(human_rate(rate.gib_s(2.5)))                  # Output: 2.50 GiB/s

# Decimal formatting (base 10 / 1000)
print(human_rate(20000000000, base=10))             # Output: 20 GB/s
print(human_rate(1500000, base=10))                 # Output: 1.50 MB/s
print(human_rate(rate.kb_s(5), base=10))            # Output: 5 KB/s

# Decimal bit rate formatting (bits=True)
print(human_rate(rate.mbps(100), bits=True))        # Output: 100 Mbps
print(human_rate(rate.gbps(1.5), bits=True))        # Output: 1.50 Gbps

# Binary bit rate formatting (bits=True, base=2)
print(human_rate(rate.mibps(2), base=2, bits=True)) # Output: 2 Mibps
```

### `human_rate()` - Edge Cases & Exceptions

```python
from sizelib import human_rate

# Zero rate inputs
print(human_rate(0))                                # Output: 0 B/s
print(human_rate(0, bits=True))                     # Output: 0 bps

# Negative values raise ValueError
try:
    human_rate(-5)
except ValueError as e:
    print(e)                                        # Output: Rate cannot be negative

# Invalid base parameter raises ValueError
try:
    human_rate(100, base=5)
except ValueError as e:
    print(e)                                        # Output: Base must be 2 or 10
```
