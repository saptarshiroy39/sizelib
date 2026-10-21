from .config import (
    BYTE,
    EB,
    EIB,
    GB,
    GIB,
    KB,
    KIB,
    MB,
    MIB,
    PB,
    PIB,
    TB,
    TIB,
    YB,
    YIB,
    ZB,
    ZIB,
)


def b(value: int | float) -> int | float:
    return value * BYTE


def kib(value: int | float) -> int | float:
    return value * KIB


def mib(value: int | float) -> int | float:
    return value * MIB


def gib(value: int | float) -> int | float:
    return value * GIB


def tib(value: int | float) -> int | float:
    return value * TIB


def pib(value: int | float) -> int | float:
    return value * PIB


def eib(value: int | float) -> int | float:
    return value * EIB


def zib(value: int | float) -> int | float:
    return value * ZIB


def yib(value: int | float) -> int | float:
    return value * YIB


def kb(value: int | float) -> int | float:
    return value * KB


def mb(value: int | float) -> int | float:
    return value * MB


def gb(value: int | float) -> int | float:
    return value * GB


def tb(value: int | float) -> int | float:
    return value * TB


def pb(value: int | float) -> int | float:
    return value * PB


def eb(value: int | float) -> int | float:
    return value * EB


def zb(value: int | float) -> int | float:
    return value * ZB


def yb(value: int | float) -> int | float:
    return value * YB
