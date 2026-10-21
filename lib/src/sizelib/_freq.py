from .config import (
    EHZ,
    GHZ,
    HZ,
    KHZ,
    MHZ,
    PHZ,
    THZ,
    YHZ,
    ZHZ,
)


def hz(value: int | float) -> int | float:
    return value * HZ


def khz(value: int | float) -> int | float:
    return value * KHZ


def mhz(value: int | float) -> int | float:
    return value * MHZ


def ghz(value: int | float) -> int | float:
    return value * GHZ


def thz(value: int | float) -> int | float:
    return value * THZ


def phz(value: int | float) -> int | float:
    return value * PHZ


def ehz(value: int | float) -> int | float:
    return value * EHZ


def zhz(value: int | float) -> int | float:
    return value * ZHZ


def yhz(value: int | float) -> int | float:
    return value * YHZ
