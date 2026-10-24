def human_rate(rate_val: int | float, base: int | None = None, bits: bool = False) -> str:
    if rate_val < 0:
        raise ValueError("Rate cannot be negative")

    if base is None:
        base = 10 if bits else 2

    if base not in (2, 10):
        raise ValueError("Base must be 2 or 10")

    if rate_val == 0:
        return "0 bps" if bits else "0 B/s"

    if bits:
        if base == 2:
            divisor = 1024
            units = ["bps", "Kibps", "Mibps", "Gibps", "Tibps", "Pibps", "Eibps", "Zibps", "Yibps"]
        else:
            divisor = 1000
            units = ["bps", "kbps", "Mbps", "Gbps", "Tbps", "Pbps", "Ebps", "Zbps", "Ybps"]
    else:
        if base == 2:
            divisor = 1024
            units = ["B/s", "KiB/s", "MiB/s", "GiB/s", "TiB/s", "PiB/s", "EiB/s", "ZiB/s", "YiB/s"]
        else:
            divisor = 1000
            units = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s", "PB/s", "EB/s", "ZB/s", "YB/s"]

    unit_index = 0
    val = float(rate_val)
    while unit_index < len(units) - 1 and val >= divisor:
        val /= divisor
        unit_index += 1
    unit = units[unit_index]

    if val == int(val):
        return f"{int(val)} {unit}"
    return f"{val:.2f} {unit}"
