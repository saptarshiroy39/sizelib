<h1 align="center">
  <img src="https://raw.githubusercontent.com/saptarshiroy39/sizelib/refs/heads/main/web/public/Sizelib.svg" alt="📄" width="128">
  <br>
  <b>Sizelib</b>
</h1>

<p align="center">
  <a href="https://pypi.org/project/sizelib"><b>sizelib</b></a> is a lightweight, type-safe Python Library for working with and humanizing file sizes, time durations, frequencies, and data transfer rates. It offers clean, type-preserving unit helpers (supporting both <code>int</code> and <code>float</code>) and loop-based human-readable string conversions.
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
MAX_UPLOAD_SIZE = size.mib(10)  # 10 MiB (10485760 bytes)
CACHE_LIMIT = size.gib(2)  # 2 GiB (2147483648 bytes)
USER_QUOTA = size.gb(50)  # 50 GB (50000000000 bytes)

# Variables, expressions, and type preservation (int/float) are supported
limit = 2
custom_limit = size.gib(limit)  # 2 GiB (2147483648 bytes)
print(type(size.mib(10)))  # Output: <class 'int'>
print(type(size.kb(1.5)))  # Output: <class 'float'>
```

`Humanize Byte Sizes (human_size)`

```python
from sizelib import human_size, size

# Default binary formatting (base 2 / 1024)
print(human_size(10485760))  # Output: 10 MiB
print(human_size(size.gib(2.5)))  # Output: 2.50 GiB

# Decimal formatting (base 10 / 1000)
print(human_size(size.gb(50), base=10))  # Output: 50 GB
```

`Time Helper Functions`

```python
from sizelib import time

# Define time constraints cleanly in seconds (supports ms, s, m, h, d, w, m28..m31, y, ly)
TIMEOUT = time.s(30)  # 30 s
CACHE_TTL = time.m(15)  # 900 s
TOKEN_EXPIRY = time.h(2)  # 7200 s
FEB_NON_LEAP = time.m28(1)  # 2419200 s (28 days)

# Variables, expressions, and type preservation (int/float) are supported
limit = 5
custom_timeout = time.m(limit)  # 300 s
print(type(time.s(30)))  # Output: <class 'int'>
print(type(time.s(1.5)))  # Output: <class 'float'>
```

`Humanize Times (human_time)`

```python
from sizelib import human_time, time

# Duration formatting across ms, s, m, h, d, w
print(human_time(0.005))  # Output: 5 ms
print(human_time(time.s(45)))  # Output: 45 s
print(human_time(time.m(90)))  # Output: 1.50 h

# Auto-rounds and formats fractional durations up to 2 decimal places
print(human_time(time.h(2.5)))  # Output: 2.50 h
```

`Frequency Helper Functions`

```python
from sizelib import freq

# Define frequency constraints cleanly in Hz (supports hz, khz, mhz, ghz, thz, phz, ehz, zhz, yhz)
CPU_BASE_CLOCK = freq.ghz(3.2)  # 3.2 GHz (3200000000.0 Hz)
RAM_SPEED = freq.mhz(3200)  # 3200 MHz (3200000000 Hz)
AUDIO_SAMPLE_RATE = freq.khz(44.1)  # 44.1 kHz (44100.0 Hz)

# Variables, expressions, and type preservation (int/float) are supported
multiplier = 4.5
custom_clock = freq.ghz(multiplier)  # 4.5 GHz (4500000000.0 Hz)
print(type(freq.mhz(800)))  # Output: <class 'int'>
print(type(freq.ghz(4.8)))  # Output: <class 'float'>
```

`Humanize Frequencies (human_freq)`

```python
from sizelib import freq, human_freq

# Frequency formatting across Hz through YHz
print(human_freq(44100))  # Output: 44.10 kHz
print(human_freq(freq.mhz(800)))  # Output: 800 MHz
print(human_freq(freq.ghz(3.2)))  # Output: 3.20 GHz
print(human_freq(freq.thz(1.5)))  # Output: 1.50 THz
```

`Rate Helper Functions`

```python
from sizelib import rate

# Define bandwidth and bitrate constraints cleanly (supports b_s, kib_s..yib_s, kb_s..yb_s, bps, kibps..yibps, kbps..ybps)
NETWORK_BANDWIDTH = rate.mbps(100)  # 100 Mbps (100000000 bits/s)
BUFFER_RATE = rate.mibps(50)  # 50 Mibps (52428800 bits/s)
INTERNET_SPEED = rate.gbps(1)  # 1 Gbps (1000000000 bits/s)
DOWNLOAD_SPEED = rate.mb_s(12.5)  # 12.5 MB/s (12500000 bytes/s)
DISK_WRITE_RATE = rate.mib_s(500)  # 500 MiB/s (524288000 bytes/s)

`Humanize Rates (human_rate)`

```python
from sizelib import human_rate, rate

# Default binary formatting (base 2 / 1024)
print(human_rate(10485760))  # Output: 10 MiB/s
print(human_rate(rate.gib_s(2.5)))  # Output: 2.50 GiB/s

# Decimal formatting (base 10 / 1000)
print(human_rate(20000000000, base=10))  # Output: 20 GB/s
print(human_rate(rate.kb_s(5), base=10))  # Output: 5 KB/s
```

---

## ✳️ _Features_

| FEATURE | DESCRIPTION |
| :---: | :---: |
| **Size Helpers** | Standardized functions for all major divisions (`kb`, `mb`, `gb`, `tb`, `pb`, `eb`, `zb`, `yb`, `kib`, `mib`, `gib`, `tib`, `pib`, `eib`, `zib`, `yib`) |
| **Time Helpers** | Clean scaling for duration units (`ms`, `s`, `m`, `h`, `d`, `w`, `m28`, `m29`, `m30`, `m31`, `y`, `ly`) |
| **Frequency Helpers** | Clean scaling for frequency units (`hz`, `khz`, `mhz`, `ghz`, `thz`, `phz`, `ehz`, `zhz`, `yhz`) |
| **Rate Helpers** | Clean scaling for data transfer rate units (`b_s`, `kib_s`..`yib_s`, `kb_s`..`yb_s`, `bps`, `kibps`..`yibps`, `kbps`..`ybps`) |
| **Type Preservation** | Dynamically maintains input types (returns int/floats accordingly) |
| **Custom Bases** | Support for both binary (`base=2` / 1024) and decimal (`base=10` / 1000) formats |
| **Ultra Minimalism** | Zero external dependencies with an optimized, lightweight iteration algorithm |

---

## ✳️ _Architecture_

| # | COMPONENT | DESCRIPTION | STACK |
| :---: | :---: | :---: | :---: |
| 1️⃣ | **Sizelib SDK** | Python library for size, time, frequency & rate calculations and humanization | **_Python_** |
| 2️⃣ | **Sizelib Docs** | Official documentation & web interface | **_Next.js_**, **_Tailwind_**, **_Vercel_** |

---

<p align="center">
  Made with 📄 by <a href="https://hirishi.in">Saptarshi Roy</a>
</p>
