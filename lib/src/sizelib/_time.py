from .config import (
    DAY,
    HOUR,
    LEAP_YEAR,
    M28,
    M29,
    M30,
    M31,
    MIN,
    MS,
    SEC,
    WEEK,
    YEAR,
)


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


def m28(value: int | float) -> int | float:
    return value * M28


def m29(value: int | float) -> int | float:
    return value * M29


def m30(value: int | float) -> int | float:
    return value * M30


def m31(value: int | float) -> int | float:
    return value * M31


def y(value: int | float) -> int | float:
    return value * YEAR


def ly(value: int | float) -> int | float:
    return value * LEAP_YEAR
