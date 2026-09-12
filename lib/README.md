<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/sizelib/refs/heads/main/lib/public/Sizelib.svg" alt="📄" width="128">
  <br>
  <b>Sizelib</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/sizelib"><b>sizelib</b></a> is a lightweight, type-safe Python Library for working with and humanizing file sizes and time durations. It offers clean, type-preserving unit helpers (supporting both <code>int</code> and <code>float</code>) and loop-based human-readable string conversions.
</p>

<p align="center">
  <a href="https://pypi.org/project/sizelib/">
    <img alt="PyPI Version" src="https://img.shields.io/pypi/v/sizelib?color=royalblue">
  </a>
  <a href="https://github.com/saptarshiroy39/sizelib/releases">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/saptarshiroy39/sizelib?color=emerald">
  </a>
  <a href="https://pepy.tech/project/sizelib">
    <img alt="PyPI Downloads" src="https://img.shields.io/pepy/dt/sizelib?color=goldenrod">
  </a>
  <a href="https://github.com/saptarshiroy39/sizelib/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/saptarshiroy39/sizelib?color=crimson">
  </a>
</p>

---

## ✳️ _SDK_

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

# Variables, expressions, and type preservation (int/float) are supported
limit = 2
custom_limit = size.gib(limit)   # 2 GiB (2147483648 bytes)
print(type(size.mib(10)))        # Output: <class 'int'>
print(type(size.kb(1.5)))        # Output: <class 'float'>
```

`Humanize Byte Sizes (human_size)`

```python
from sizelib import human_size, size

# Default binary formatting (base 2 / 1024)
print(human_size(10485760))             # Output: 10 MiB
print(human_size(size.gib(2.5)))        # Output: 2.50 GiB

# Decimal formatting (base 10 / 1000)
print(human_size(size.gb(50), base=10)) # Output: 50 GB
```

`Time Helper Functions`

```python
from sizelib import time

TIMEOUT = time.s(30)        # 30 s
CACHE_TTL = time.m(15)      # 900 s
TOKEN_EXPIRY = time.h(2)    # 7200 s
WORKER_WAIT = time.ms(500)  # 0.5 s
```

`Humanize Times (human_time)`

```python
from sizelib import human_time, time

print(human_time(0.005))        # Output: 5 ms
print(human_time(time.s(45)))   # Output: 45 s
print(human_time(time.m(90)))   # Output: 1.50 h
print(human_time(time.h(2)))    # Output: 2 h
print(human_time(time.d(1)))    # Output: 1 d
```

---

## ✳️ _Features_

| FEATURE | DESCRIPTION |
| :---: | :---: |
| **Size Helpers** | Standardized functions for all major divisions (`kb`, `mb`, `gb`, `tb`, `pb`, `eb`, `zb`, `yb`, `kib`, `mib`, `gib`, `tib`, `pib`, `eib`, `zib`, `yib`) |
| **Time Helpers** | Clean scaling for duration units (`ms`, `s`, `m`, `h`, `d`, `w`) |
| **Type Preservation** | Dynamically maintains input types (returns int/floats accordingly) |
| **Custom Bases** | Support for both binary (`base=2` / 1024) and decimal (`base=10` / 1000) formats |
| **Ultra Minimalism** | Zero external dependencies with an optimized, lightweight iteration algorithm |

---

## ✳️ _Architecture_

| # | COMPONENT | DESCRIPTION | STACK |
| :---: | :---: | :---: | :---: |
| 1️⃣ | **Sizelib SDK** | Python library for size & time calculations and humanization | **_Python_** |
| 2️⃣ | **Sizelib Docs** | Official documentation & web interface | **_Next.js_**, **_Tailwind_**, **_Vercel_** |

---

<p align="center">
  Made with 📄 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>
