# sizelib SDK Reference

This reference guide demonstrates how to use `sizelib` for size calculations, unit conversions, and formatting.

## Imports

Import the core components from the package:

```python
from sizelib import humanize, size
```

## Size Helper Functions

Define constraints using either binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods.

- **Basic Const Definitions**

```python
from sizelib import size

MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB
CACHE_LIMIT = size.gib(2)        # 2 GiB
```

- **Variables & Expressions**

```python
from sizelib import size

limit = 2
custom_limit = size.gib(limit)   # 2 GiB
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

## Humanizing Byte Sizes

Convert raw byte values back into clean, readable strings using the `humanize()` function.

- **Default Binary (Base 2)**

```python
from sizelib import humanize, size

# Converts raw bytes to base-1024 string representation
print(humanize(10485760))       # Output: "10 MiB"
print(humanize(size.gib(2)))    # Output: "2 GiB"
```

- **Auto-Precision & Floating Points**

```python
from sizelib import humanize, size

# Auto-rounds and formats fractional sizes up to 2 decimal places
total = size.gib(2) + size.mib(500)
print(humanize(total))          # Output: "2.49 GiB"
```

- **Decimal Formatting (Base 10)**

```python
from sizelib import humanize, size

# Uses base-1000 standard (e.g. GB instead of GiB)
user_quota = size.gb(50)
print(humanize(user_quota, base=10))  # Output: "50 GB"
```
