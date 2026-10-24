# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-09-02

### Added
- Added data transfer rate scaling helpers in `sizelib.rate`:
  - Binary bytes: `b_s()`, `kib_s()`, `mib_s()`, `gib_s()`, `tib_s()`, `pib_s()`, `eib_s()`, `zib_s()`, and `yib_s()`.
  - Decimal bytes: `b_s()`, `kb_s()`, `mb_s()`, `gb_s()`, `tb_s()`, `pb_s()`, `eb_s()`, `zb_s()`, and `yb_s()`.
  - Binary bits: `bps()`, `kibps()`, `mibps()`, `gibps()`, `tibps()`, `pibps()`, `eibps()`, `zibps()`, and `yibps()`.
  - Decimal bits: `bps()`, `kbps()`, `mbps()`, `gbps()`, `tbps()`, `pbps()`, `ebps()`, `zbps()`, and `ybps()`.
- Added `human_rate()` function in `_human_rate.py` for formatting data rate values into human-readable strings (e.g. `10 MiB/s`, `20 GB/s`, `100 Mbps`, `2 Mibps`) supporting binary bytes (`KiB/s`), decimal bytes (`KB/s`), binary bits (`Kibps`), and decimal bits (`kbps`).
- Added dedicated `RATE_SDK.md` reference guide.
- Added `/rate` and `/human_rate` reference documentation and search integration in documentation web app.

## [0.3.0] - 2026-09-01

### Added
- Added frequency scaling helpers in `sizelib.freq`: `hz()`, `khz()`, `mhz()`, `ghz()`, `thz()`, `phz()`, `ehz()`, `zhz()`, and `yhz()`.
- Added `human_freq()` function in `_human_freq.py` for formatting frequency values into human-readable strings (e.g. `44.10 kHz`, `800 MHz`, `3.20 GHz`, `1.50 THz`).
- Added dedicated `FREQ_SDK.md` reference guide.
- Added `/freq` and `/human_freq` reference documentation and search integration in documentation web app.

## [0.2.3] - 2026-08-11

### Added
- Added month scaling helpers in `sizelib.time`: `m28()`, `m29()`, `m30()`, `m31()` (for 28, 29, 30, and 31-day month second calculations).
- Added year scaling helpers in `sizelib.time`: `y()` (365-day regular year) and `ly()` (366-day leap year).
- Added dedicated `TIME_SDK.md` reference guide.

### Changed
- Reordered `sizelib.time` imported constants from smallest to highest unit scale (`MS` through `LEAP_YEAR`).
- Enriched time SDK documentation and web pages (`/time` and `/human_time`) with full parameter details, unit hierarchy tables, type preservation, and edge case examples.

## [0.2.2] - 2026-08-11

### Added
- Expanded binary unit helpers in `sizelib.size` with `pib()`, `eib()`, `zib()`, and `yib()` (up to $1024^8$ / Yotta binary).
- Expanded decimal unit helpers in `sizelib.size` with `pb()`, `eb()`, `zb()`, and `yb()` (up to $1000^8$ / Yotta decimal).
- Updated `human_size()` output unit escalation to support up to `YiB` (base 2) and `YB` (base 10).

### Changed
- Standardized binary-first helper definition and evaluation order across the entire library and documentation suite.

## [0.2.1] - 2026-08-08

### Changed
- Updated `time` helper module (`sizelib.time`) to short unit scaling functions (`ms`, `s`, `m`, `h`, `d`, `w`).
- Updated `human_time()` formatting units to abbreviated forms (`s`, `m`, `h`, `d`, `w`).

## [0.2.0] - 2026-08-01

### Added
- Added `time` helper module (`sizelib.time`) with scaling functions (`s`, `ms`, `min`, `hour`, `day`, `week`).
- Added `human_size()` function in `_human_size.py` for humanizing byte sizes.
- Added `human_time()` function in `_human_time.py` for formatting second into human-readable duration strings (e.g. `500 ms`, `1 min`, `2 hour`).

### Changed
- Refactored humanization API into separate `human_size` and `human_time` functions.

## [0.1.3] - 2026-07-28

### Added
- Added `.python-version` file declaration pinned to Python 3.13.

### Changed
- Updated PyPI package classifiers to officially support Python 3.13.

## [0.1.2] - 2026-06-19

### Changed

- Renamed internal modules `size.py` to `_size.py` and `humanize.py` to `_humanize.py` to denote them as internal implementation details, and updated imports in `__init__.py`.
- Refactored `humanize()` logic to use a standard `while` loop instead of a `for-else` block for better readability.

### Added

- Updated documentation in `README.md` and `SDK.md` demonstrating that unit helpers fully support passing variables and expressions as arguments.

## [0.1.1] - 2026-06-15

### Added

- Declared PEP 561 compliance by creating the `py.typed` marker file for inline types.
- Configured `ruff` for linting and code formatting checks.
- Expanded package metadata in `pyproject.toml` (keywords, classifiers, Bug Tracker link, and documentation URL).

### Changed

- Updated `pyproject.toml` to use modern `setuptools` automatic package discovery (package finder) with the `src` layout.

### Removed

- Custom `SizeLibError` and `FileTooLarge` exception declarations (simplifying the package to a pure utility library).

### Fixed

- Fixed an overflow/division bug in `humanize()` when formatting byte sizes that exceed the maximum unit limit (e.g. formatting `1024**9` now correctly returns `"1024 YiB"` instead of `"1 YiB"`).

## [0.1.0] - 2026-06-13

### Added

- Initial release of the `sizelib` package.
- New package entry point `src/sizelib/__init__.py`.
- Custom `SizeLibError` and `FileTooLarge` exception declarations in `exceptions.py`.
- Exponent-free dynamic loop size humanization function `humanize()` in `humanize.py` with strict base=2 and base=10 suffix mapping.
- Size factor computation helper modules (`size.py`) and config constants (`config.py`).
- Modern standard setup (`pyproject.toml`) and test suites (`tests/test_size.py`, `tests/test_humanize.py`).
