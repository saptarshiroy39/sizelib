# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-13

### Added

- Initial release of the `sizelib` package.
- New package entry point `src/sizelib/__init__.py`.
- Custom `SizeLibError` and `FileTooLarge` exception declarations in `exceptions.py`.
- Exponent-free dynamic loop size humanization function `humanize()` in `humanize.py` with strict base=2 and base=10 suffix mapping.
- Size factor computation helper modules (`size.py`) and config constants (`config.py`).
- Modern standard setup (`pyproject.toml`) and test suites (`tests/test_size.py`, `tests/test_humanize.py`).
