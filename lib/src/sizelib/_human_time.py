def human_time(seconds: int | float) -> str:
    if seconds < 0:
        raise ValueError("Time cannot be negative")
    if seconds == 0:
        return "0 s"

    if seconds < 1:
        val = seconds * 1000
        unit = "ms"
    else:
        divisors = [60, 60, 24, 7]
        units = ["s", "m", "h", "d", "w"]
        unit_index = 0
        val = float(seconds)
        while unit_index < len(divisors) and val >= divisors[unit_index]:
            val /= divisors[unit_index]
            unit_index += 1
        unit = units[unit_index]

    if val == int(val):
        return f"{int(val)} {unit}"
    return f"{val:.2f} {unit}"
