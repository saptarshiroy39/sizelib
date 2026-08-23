from .config import SEC, MS, MIN, HOUR, DAY, WEEK


def s(value: int | float) -> int | float:
    return value * SEC


def ms(value: int | float) -> int | float:
    return value * MS


def min(value: int | float) -> int | float:
    return value * MIN


def hour(value: int | float) -> int | float:
    return value * HOUR


def day(value: int | float) -> int | float:
    return value * DAY


def week(value: int | float) -> int | float:
    return value * WEEK
