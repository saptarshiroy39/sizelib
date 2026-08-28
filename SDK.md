# sizelib SDK Reference

This reference guide demonstrates how to use `sizelib` for size and time calculations, unit conversions, and formatting.

## Imports

Import the core components from the package:

```python
from sizelib import human_size, human_time, size, time
```

---

## Size Helper Functions

Define constraints using either binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods.

- **Basic Const Definitions**

```python
from sizelib import size

MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)
```

- **Variables & Expressions**

```python
from sizelib import size

limit = 2
custom_limit = size.gib(limit)   # 2 GiB (2147483648 bytes)
```

- **Type Preservation Check**

```python
from sizelib import size

print(type(size.mib(10)))  # Output: <class 'int'>
print(type(size.kb(1.5)))  # Output: <class 'float'>
```

> [!NOTE]
> All unit helper functions return integers when passed an integer value, preserving precise types for type-checkers and calculations.

---

## Time Helper Functions

Define time constraints cleanly in seconds.

```python
from sizelib import time

TIMEOUT = time.s(30)        # 30 s
CACHE_TTL = time.m(15)      # 900 s
TOKEN_EXPIRY = time.h(2)    # 7200 s
WORKER_WAIT = time.ms(500)  # 0.5 s
```

---

## Humanizing Byte Sizes (`human_size`)

Convert raw byte values back into clean, readable strings using `human_size()`.

- **Default Binary (Base 2)**

```python
from sizelib import human_size, size

# Converts raw bytes to base-1024 string representation
print(human_size(10485760))       # Output: "10 MiB"
print(human_size(size.gib(2)))    # Output: "2 GiB"
```

- **Auto-Precision & Floating Points**

```python
from sizelib import human_size, size

# Auto-rounds and formats fractional sizes up to 2 decimal places
total = size.gib(2) + size.mib(500)
print(human_size(total))          # Output: "2.49 GiB"
```

- **Decimal Formatting (Base 10)**

```python
from sizelib import human_size, size

# Uses base-1000 standard (e.g. GB instead of GiB)
user_quota = size.gb(50)
print(human_size(user_quota, base=10))  # Output: "50 GB"
```

---

## Humanizing Times (`human_time`)

Convert raw second value into human-readable duration strings using `human_time()`.

```python
from sizelib import human_time, time

print(human_time(0.005))        # Output: "5 ms"
print(human_time(time.s(45)))   # Output: "45 s"
print(human_time(time.m(90)))   # Output: "1.50 h"
print(human_time(time.h(2)))    # Output: "2 h"
print(human_time(time.d(1)))    # Output: "1 d"
```
