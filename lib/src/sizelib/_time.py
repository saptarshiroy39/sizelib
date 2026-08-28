from .config import SEC, MS, MIN, HOUR, DAY, WEEK


def ms(value: int | float) -> int | float:
    return value * MS


def s(value: int | float) -> int | float:
    return value * SEC


def m(value: int | float) -> int | float:
    return value * MIN


def h(value: int | float) -> int | float:
    return value * HOUR


def d(value: int | float) -> int | float:
    return value * DAY


def w(value: int | float) -> int | float:
    return value * WEEK
