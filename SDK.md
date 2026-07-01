# sizelib SDK Reference

This reference guide demonstrates how to use `sizelib` for size calculations, unit conversions, and formatting.

## Imports

Import the core components from the package:

```python
from sizelib import FileTooLarge, humanize, size
```

## Size Helper Functions

Define constraints using either binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods.

```python
MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)

print(MAX_UPLOAD_SIZE)           # Output: 10485760
print(type(MAX_UPLOAD_SIZE))     # Output: <class 'int'>
```

> [!NOTE]
> All unit helper functions return integers when passed an integer value, preserving precise types for type-checkers and calculations.

---

## Humanizing Byte Sizes

Convert raw byte values back into clean, readable strings using the `humanize()` function.

```python
# Default binary formatting (base 2 / 1024)
print(humanize(MAX_UPLOAD_SIZE))  # Output: 10 MiB
print(humanize(CACHE_LIMIT))      # Output: 2 GiB

# Decimal values are formatted up to 2 decimal places
TOTAL = CACHE_LIMIT + size.mib(500)
print(humanize(TOTAL))            # Output: 2.49 GiB

# Decimal formatting (base 10 / 1000)
print(humanize(USER_QUOTA, base=10))  # Output: 50 GB
```

---

## Exception Handling

Utilize the built-in exception classes to handle file size validation:

```python
file_size = size.mib(12)

try:
    if file_size > MAX_UPLOAD_SIZE:
        raise FileTooLarge(f"File size exceeds limit of {humanize(MAX_UPLOAD_SIZE)}")
except FileTooLarge as e:
    print(e)
    # Output: File size exceeds limit of 10 MiB
```
