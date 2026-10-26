# sizelib Frequency SDK Reference

This reference guide covers the frequency-related calculation and formatting components of `sizelib`: `freq` helper functions and `human_freq()`.

## Imports

```python
from sizelib import freq, human_freq
```

---

## `freq` - Helper Functions

- **Frequency Scaling Helpers –** Methods like `hz()`, `khz()`, `mhz()`, `ghz()`, `thz()`, `phz()`, `ehz()`, `zhz()`, and `yhz()` return Hertz-scaled unit calculations.
- **Type Preservation –** Preserves input types (accepts and returns `int` or `float` without casting) to avoid arithmetic precision loss.

### API Signature

```python
sizelib.freq.<helper>(value: int | float) -> int | float
```

### Frequency Helpers Reference

| Helper Method | Multiplier Scale (Hertz) | Value (e.g. for input 1) |
| :--- | :--- | :--- |
| `freq.hz(value)` | 1 | 1 |
| `freq.khz(value)` | 1,000 | 1,000 |
| `freq.mhz(value)` | 1,000^2 | 1,000,000 |
| `freq.ghz(value)` | 1,000^3 | 1,000,000,000 |
| `freq.thz(value)` | 1,000^4 | 1,000,000,000,000 |
| `freq.phz(value)` | 1,000^5 | 1,000,000,000,000,000 |
| `freq.ehz(value)` | 1,000^6 | 1,000,000,000,000,000,000 |
| `freq.zhz(value)` | 1,000^7 | 1,000,000,000,000,000,000,000 |
| `freq.yhz(value)` | 1,000^8 | 1,000,000,000,000,000,000,000,000 |

### `freq` API - Basic Usage

```python
from sizelib import freq

# Define frequency constraints cleanly in Hz
CPU_BASE_CLOCK = freq.ghz(3.2)       # 3.2 GHz (3200000000.0 Hz)
RAM_SPEED = freq.mhz(3200)           # 3200 MHz (3200000000 Hz)
AUDIO_SAMPLE_RATE = freq.khz(44.1)   # 44.1 kHz (44100.0 Hz)
RADIO_BAND = freq.mhz(100)           # 100 MHz (100000000 Hz)
```

### `freq` API - Variables & Expressions

```python
from sizelib import freq

# Variables and expressions are fully supported
multiplier = 4.5
clock_speed = freq.ghz(multiplier)   # 4.5 GHz (4500000000.0 Hz)
```

### `freq` API - Type Preservation

```python
from sizelib import freq

# Input types (int/float) are dynamically preserved
BASE_CLOCK = freq.mhz(800)
print(BASE_CLOCK)                    # Output: 800000000
print(type(BASE_CLOCK))              # Output: <class 'int'>

BOOST_CLOCK = freq.ghz(4.8)
print(BOOST_CLOCK)                   # Output: 4800000000.0
print(type(BOOST_CLOCK))             # Output: <class 'float'>
```

---

## `human_freq()` - Format Frequencies

- **String Formatting –** Converts raw Hertz values into clean, human-readable frequency strings like `44.10 kHz`, `800 MHz`, `3.20 GHz`, or `1.50 THz`.
- **Smart Decimal Precision –** Auto-rounds and formats fractional frequencies cleanly up to 2 decimal places.
- **Full SI Range –** Automatically escalates across Hz, kHz, MHz, GHz, THz, PHz, EHz, ZHz, and YHz.

### API Signature

```python
sizelib.human_freq(hz: int | float) -> str
```

### Output Unit Hierarchy Scale

| Unit | Scaling Divisor | Unit Escalation Order |
| :--- | :--- | :--- |
| **Frequency Units** | 1000 | Hz &rarr; kHz &rarr; MHz &rarr; GHz &rarr; THz &rarr; PHz &rarr; EHz &rarr; ZHz &rarr; YHz |

### `human_freq()` - Usage

```python
from sizelib import freq, human_freq

print(human_freq(44100))             # Output: 44.10 kHz
print(human_freq(freq.mhz(800)))     # Output: 800 MHz
print(human_freq(freq.ghz(3.2)))     # Output: 3.20 GHz
print(human_freq(freq.thz(1.5)))     # Output: 1.50 THz
```

### `human_freq()` - Edge Cases & Exceptions

```python
from sizelib import human_freq

# Zero Hz input
print(human_freq(0))                 # Output: 0 Hz

# Negative values raise ValueError
try:
    human_freq(-100)
except ValueError as e:
    print(e)                         # Output: Frequency cannot be negative
```
