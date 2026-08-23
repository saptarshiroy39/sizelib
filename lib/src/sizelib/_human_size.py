def human_size(size_bytes: int | float, base: int = 2) -> str:
    if size_bytes < 0:
        raise ValueError("Size cannot be negative")
    if size_bytes == 0:
        return "0 B"

    if base == 2:
        divisor = 1024
        units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
    elif base == 10:
        divisor = 1000
        units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    else:
        raise ValueError("base must be 2 or 10")

    unit_index = 0
    val = float(size_bytes)
    while unit_index < len(units) - 1 and val >= divisor:
        val /= divisor
        unit_index += 1
    unit = units[unit_index]

    if val == int(val):
        return f"{int(val)} {unit}"
    return f"{val:.2f} {unit}"
