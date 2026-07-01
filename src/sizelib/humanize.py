def humanize(size_bytes: int | float, base: int = 2) -> str:
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

    for unit in units:
        if size_bytes < divisor:
            break
        size_bytes /= divisor

    if size_bytes == int(size_bytes):
        return f"{int(size_bytes)} {unit}"
    return f"{size_bytes:.2f} {unit}"
