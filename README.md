<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/sizelib/refs/heads/main/public/sizelib.svg" alt="📄" width="128">
  <br>
  <b>sizelib</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/sizelib"><b>sizelib</b></a> is a lightweight, type-safe Python Library for working with and humanizing file sizes. It offers clean, type-preserving size helpers (supporting both `int` and `float`) and loop-based human readable string conversions.
</p>

<p align="center">
  <a href="https://pypi.org/project/sizelib"><b>🔗 <code>PyPI Package</code></b></a>
  &nbsp;|&nbsp;
  🆔 <code>pip install sizelib</code> or <code>uv add sizelib</code>
</p>

---

## 🐍 _SDK_

`Installation`

```bash
pip install sizelib
# or
uv add sizelib
```

`Size Helper Functions`

```python
from sizelib import size

# Define constraints using binary (base 2 / 1024) or decimal (base 10 / 1000) helper methods
MAX_UPLOAD_SIZE = size.mib(10)   # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)        # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)         # 50 GB (50000000000 bytes)

print(MAX_UPLOAD_SIZE)           # Output: 10485760
print(type(MAX_UPLOAD_SIZE))     # Output: <class 'int'>
```

`Humanize Byte Sizes`

```python
from sizelib import humanize

# Default binary formatting (base 2 / 1024)
print(humanize(MAX_UPLOAD_SIZE))  # Output: 10 MiB
print(humanize(CACHE_LIMIT))      # Output: 2 GiB

# Decimal values are formatted up to 2 decimal places
TOTAL = CACHE_LIMIT + size.mib(500)
print(humanize(TOTAL))            # Output: 2.49 GiB

# Decimal formatting (base 10 / 1000)
print(humanize(USER_QUOTA, base=10))  # Output: 50 GB
```

`Exception Handling`

```python
from sizelib import FileTooLarge, size, humanize

file_size = size.mib(12)

try:
    if file_size > MAX_UPLOAD_SIZE:
        raise FileTooLarge(f"File size exceeds limit of {humanize(MAX_UPLOAD_SIZE)}")
except FileTooLarge as e:
    print(e)
    # Output: File size exceeds limit of 10 MiB
```

---

## ✨ _Features_

| FEATURE                  | DESCRIPTION                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| 📏 **Unit Helpers**      | Standardized functions for all major divisions (`kb`, `mb`, `gb`, `tb`, `kib`, `mib`, `gib`, `tib`) |
| 🧪 **Type Preservation** | Dynamically maintains input types (returns int/floats accordingly)                                 |
| ⚙️ **Custom Bases**      | Support for both binary (`base=2` / 1024) and decimal (`base=10` / 1000) formats                    |
| 🛡️ **Structured Errors** | Exposes custom `SizeLibError` and `FileTooLarge` exceptions for validation                          |
| ⚡ **Ultra Minimalism**  | Zero external dependencies with an optimized, lightweight iteration algorithm                       |

---

## 🏗️ _System Architecture_

| #   | COMPONENT          | DESCRIPTION                                                     | STACK        |
| --- | ------------------ | --------------------------------------------------------------- | ------------ |
| 1️⃣  | **Sizelib Size**   | The math factor constants and unit calculation helper functions | **_Python_** |
| 2️⃣  | **Sizelib Format** | The humanization formatting module for readable string units    | **_Python_** |

---

<p align="center">
  Made with 📄 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>
