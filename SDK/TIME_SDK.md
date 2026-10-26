# sizelib Time SDK Reference

This reference guide covers the time-related calculation and formatting components of `sizelib`: `time` helper functions and `human_time()`.

## Imports

```python
from sizelib import human_time, time
```

---

## `time` - Helper Functions

- **Time Scaling Helpers –** Methods like `ms()`, `s()`, `m()`, `h()`, `d()`, `w()`, `m28()`, `m29()`, `m30()`, `m31()`, `y()`, and `ly()` return second-scaled calculations.
- **Type Preservation –** Preserves input types (accepts and returns `int` or `float` without casting) to avoid arithmetic precision loss.

### API Signature

```python
sizelib.time.<helper>(value: int | float) -> int | float
```

### Time Helpers Reference

| Helper Method | Multiplier Scale (second) | Value (e.g. for input 1) |
| :--- | :--- | :--- |
| `time.ms(value)` | 1 / 1,000 | 0.001 |
| `time.s(value)` | 1 | 1 |
| `time.m(value)` | 1 * 60 | 60 |
| `time.h(value)` | 1 * 60 * 60 | 3,600 |
| `time.d(value)` | 1 * 60 * 60 * 24 | 86,400 |
| `time.w(value)` | 1 * 60 * 60 * 24 * 7 | 604,800 |
| `time.m28(value)` | 28 days (86,400 * 28) | 2,419,200 |
| `time.m29(value)` | 29 days (86,400 * 29) | 2,505,600 |
| `time.m30(value)` | 30 days (86,400 * 30) | 2,592,000 |
| `time.m31(value)` | 31 days (86,400 * 31) | 2,678,400 |
| `time.y(value)` | 365 days (86,400 * 365) | 31,536,000 |
| `time.ly(value)` | 366 days (86,400 * 366) | 31,622,400 |

### `time` API - Basic Usage

```python
from sizelib import time

# Standard time unit helpers
TIMEOUT = time.s(30)          # 30 s
CACHE_TTL = time.m(15)        # 900 s
TOKEN_EXPIRY = time.h(2)      # 7200 s

# Month duration helpers (28, 29, 30, and 31-day months)
FEB_NON_LEAP = time.m28(1)    # 2419200 s (28 days)
FEB_LEAP = time.m29(1)        # 2505600 s (29 days)
SHORT_MONTH = time.m30(1)     # 2592000 s (30 days)
LONG_MONTH = time.m31(1)      # 2678400 s (31 days)

# Year duration helpers (regular and leap years)
REGULAR_YEAR = time.y(1)      # 31536000 s (365 days)
LEAP_YEAR = time.ly(1)        # 31622400 s (366 days)
```

### `time` API - Variables & Expressions

```python
from sizelib import time

# Variables and expressions are fully supported
limit = 5
custom_timeout = time.m(limit)   # 300 s
```

### `time` API - Type Preservation

```python
from sizelib import time

# Input types (int/float) are dynamically preserved
TIMEOUT = time.s(30)
print(TIMEOUT)           # Output: 30
print(type(TIMEOUT))     # Output: <class 'int'>

INTERVAL = time.s(1.5)
print(INTERVAL)          # Output: 1.5
print(type(INTERVAL))    # Output: <class 'float'>
```

---

## `human_time()` - Format Times

- **String Formatting –** Converts raw second values into clean, human-readable duration strings like `5 ms`, `45 s`, `1.50 h`, `2 d`, or `3 w`.
- **Smart Decimal Precision –** Auto-rounds and formats fractional durations cleanly up to 2 decimal places.

### API Signature

```python
sizelib.human_time(seconds: int | float) -> str
```

### Output Unit Hierarchy Scale

| Unit | Scaling Factor | Unit Escalation Order |
| :--- | :--- | :--- |
| **Duration Units** | Millisecond &rarr; Second &rarr; Minute &rarr; Hour &rarr; Day &rarr; Week | ms &rarr; s &rarr; m &rarr; h &rarr; d &rarr; w |

### `human_time()` - Usage

```python
from sizelib import human_time, time

print(human_time(0.005))        # Output: 5 ms
print(human_time(time.s(45)))   # Output: 45 s
print(human_time(time.m(90)))   # Output: 1.50 h
print(human_time(time.h(2)))    # Output: 2 h
print(human_time(time.d(1)))    # Output: 1 d
```

### `human_time()` - Edge Cases & Exceptions

```python
from sizelib import human_time

# Zero second input
print(human_time(0))            # Output: 0 s

# Negative values raise ValueError
try:
    human_time(-5)
except ValueError as e:
    print(e)                    # Output: Time cannot be negative
```
