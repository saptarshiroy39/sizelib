# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
