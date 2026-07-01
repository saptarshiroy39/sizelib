from .config import BYTE, GB, GIB, KB, KIB, MB, MIB, TB, TIB


def b(value: int | float) -> int | float:
    return value * BYTE


def kb(value: int | float) -> int | float:
    return value * KB


def mb(value: int | float) -> int | float:
    return value * MB


def gb(value: int | float) -> int | float:
    return value * GB


def tb(value: int | float) -> int | float:
    return value * TB


def kib(value: int | float) -> int | float:
    return value * KIB


def mib(value: int | float) -> int | float:
    return value * MIB


def gib(value: int | float) -> int | float:
    return value * GIB


def tib(value: int | float) -> int | float:
    return value * TIB
