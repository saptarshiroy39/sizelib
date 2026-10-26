# sizelib Size SDK Reference

This reference guide covers the size-related calculation and formatting components of `sizelib`: `size` helper functions and `human_size()`.

## Imports

```python
from sizelib import human_size, size
```

---

## `size` - Helper Functions

- **Binary Helpers –** Methods like `kib()`, `mib()`, `gib()`, `tib()`, `pib()`, `eib()`, `zib()`, and `yib()` return 1024-based unit calculations.
- **Decimal Helpers –** Methods like `b()`, `kb()`, `mb()`, `gb()`, `tb()`, `pb()`, `eb()`, `zb()`, and `yb()` return 1000-based unit calculations.
- **Type Preservation –** Preserves input types (accepts and returns `int` or `float` without casting) to avoid arithmetic precision loss.

### API Signature

```python
sizelib.size.<helper>(value: int | float) -> int | float
```

### Binary Helpers (Base 2 / 1024)

| Helper Method | Base | Multiplier Scale | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `size.b(value)` | BIN (2) | 1 | 1 |
| `size.kib(value)` | BIN (2) | 1,024 | 1,024 |
| `size.mib(value)` | BIN (2) | 1,024^2 | 1,048,576 |
| `size.gib(value)` | BIN (2) | 1,024^3 | 1,073,741,824 |
| `size.tib(value)` | BIN (2) | 1,024^4 | 1,099,511,627,776 |
| `size.pib(value)` | BIN (2) | 1,024^5 | 1,125,899,906,842,624 |
| `size.eib(value)` | BIN (2) | 1,024^6 | 1,152,921,504,606,846,976 |
| `size.zib(value)` | BIN (2) | 1,024^7 | 1,180,591,620,717,411,303,424 |
| `size.yib(value)` | BIN (2) | 1,024^8 | 1,208,925,819,614,629,174,706,176 |

### Decimal Helpers (Base 10 / 1000)

| Helper Method | Base | Multiplier Scale | Value (e.g. for input 1) |
| :--- | :--- | :--- | :--- |
| `size.b(value)` | DEC (10) | 1 | 1 |
| `size.kb(value)` | DEC (10) | 1,000 | 1,000 |
| `size.mb(value)` | DEC (10) | 1,000^2 | 1,000,000 |
| `size.gb(value)` | DEC (10) | 1,000^3 | 1,000,000,000 |
| `size.tb(value)` | DEC (10) | 1,000^4 | 1,000,000,000,000 |
| `size.pb(value)` | DEC (10) | 1,000^5 | 1,000,000,000,000,000 |
| `size.eb(value)` | DEC (10) | 1,000^6 | 1,000,000,000,000,000,000 |
| `size.zb(value)` | DEC (10) | 1,000^7 | 1,000,000,000,000,000,000,000 |
| `size.yb(value)` | DEC (10) | 1,000^8 | 1,000,000,000,000,000,000,000,000 |

### `size` API - Basic Usage

```python
from sizelib import size

# Define constraints using binary (base 2) or decimal (base 10) helper methods
MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)
```

### `size` API - Variables & Expressions

```python
from sizelib import size

# Variables and expressions are fully supported
limit = 2
custom_limit = size.gib(limit)   # 2 GiB (2147483648 bytes)
```

### `size` API - Type Preservation

```python
from sizelib import size

# Input types (int/float) are dynamically preserved
MAX_UPLOAD_SIZE = size.mib(10)
print(MAX_UPLOAD_SIZE)           # Output: 10485760
print(type(MAX_UPLOAD_SIZE))     # Output: <class 'int'>

BUFFER_SIZE = size.kb(1.5)
print(BUFFER_SIZE)               # Output: 1500.0
print(type(BUFFER_SIZE))         # Output: <class 'float'>
```

---

## `human_size()` - Format Bytes

- **String Formatting –** Converts raw byte values back into clean, readable strings like `2 GiB` or `50 GB`.
- **Smart Decimal Precision –** Auto-rounds and formats fractional sizes cleanly up to 2 decimal places.
- **Dual Bases –** Supports base=2 (binary 1024) and base=10 (decimal 1000) formatting output units.

### API Signature

```python
sizelib.human_size(size_bytes: int | float, base: int = 2) -> str
```

### Output Unit Hierarchy Scale

| Base | Divisor | Unit Escalation Order |
| :--- | :--- | :--- |
| **Base 2 (Binary)** | 1024 | B &rarr; KiB &rarr; MiB &rarr; GiB &rarr; TiB &rarr; PiB &rarr; EiB &rarr; ZiB &rarr; YiB |
| **Base 10 (Decimal)** | 1000 | B &rarr; KB &rarr; MB &rarr; GB &rarr; TB &rarr; PB &rarr; EB &rarr; ZB &rarr; YB |

### `human_size()` - Usage

```python
from sizelib import human_size, size

# Default binary formatting (base 2 / 1024)
print(human_size(10485760))              # Output: 10 MiB
print(human_size(1500000))               # Output: 1.43 MiB
print(human_size(size.gib(2.5)))         # Output: 2.50 GiB

# Decimal formatting (base 10 / 1000)
print(human_size(5000000000, base=10))   # Output: 5 GB
print(human_size(1500000, base=10))      # Output: 1.50 MB
print(human_size(size.gb(50), base=10))  # Output: 50 GB
```

### `human_size()` - Edge Cases & Exceptions

```python
from sizelib import human_size

# Zero byte input
print(human_size(0))                     # Output: 0 B

# Negative values raise ValueError
try:
    human_size(-5)
except ValueError as e:
    print(e)                             # Output: Size cannot be negative

# Invalid base parameter raises ValueError
try:
    human_size(100, base=5)
except ValueError as e:
    print(e)                             # Output: Base must be 2 or 10
```
