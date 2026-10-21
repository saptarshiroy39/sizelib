def human_rate(rate_bytes: int | float, base: int = 2) -> str:
    if rate_bytes < 0:
        raise ValueError("Rate cannot be negative")
    if rate_bytes == 0:
        return "0 B/s"

    if base == 2:
        divisor = 1024
        units = ["B/s", "KiB/s", "MiB/s", "GiB/s", "TiB/s", "PiB/s", "EiB/s", "ZiB/s", "YiB/s"]
    elif base == 10:
        divisor = 1000
        units = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s", "PB/s", "EB/s", "ZB/s", "YB/s"]
    else:
        raise ValueError("Base must be 2 or 10")

    unit_index = 0
    val = float(rate_bytes)
    while unit_index < len(units) - 1 and val >= divisor:
        val /= divisor
        unit_index += 1
    unit = units[unit_index]

    if val == int(val):
        return f"{int(val)} {unit}"
    return f"{val:.2f} {unit}"
