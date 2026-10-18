def human_freq(hz: int | float) -> str:
    if hz < 0:
        raise ValueError("Frequency cannot be negative")
    if hz == 0:
        return "0 Hz"

    divisor = 1000
    units = ["Hz", "kHz", "MHz", "GHz", "THz", "PHz", "EHz", "ZHz", "YHz"]
    unit_index = 0
    val = float(hz)
    while unit_index < len(units) - 1 and val >= divisor:
        val /= divisor
        unit_index += 1
    unit = units[unit_index]

    if val == int(val):
        return f"{int(val)} {unit}"
    return f"{val:.2f} {unit}"
