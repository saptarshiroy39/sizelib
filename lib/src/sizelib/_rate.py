from .config import (
    B_S,
    BPS,
    EB_S,
    EBPS,
    EIB_S,
    EIBPS,
    GB_S,
    GBPS,
    GIB_S,
    GIBPS,
    KB_S,
    KBPS,
    KIB_S,
    KIBPS,
    MB_S,
    MBPS,
    MIB_S,
    MIBPS,
    PB_S,
    PBPS,
    PIB_S,
    PIBPS,
    TB_S,
    TBPS,
    TIB_S,
    TIBPS,
    YB_S,
    YBPS,
    YIB_S,
    YIBPS,
    ZB_S,
    ZBPS,
    ZIB_S,
    ZIBPS,
)


# BYTES - BINARY (BASE 2)
def b_s(value: int | float) -> int | float:
    return value * B_S


def kib_s(value: int | float) -> int | float:
    return value * KIB_S


def mib_s(value: int | float) -> int | float:
    return value * MIB_S


def gib_s(value: int | float) -> int | float:
    return value * GIB_S


def tib_s(value: int | float) -> int | float:
    return value * TIB_S


def pib_s(value: int | float) -> int | float:
    return value * PIB_S


def eib_s(value: int | float) -> int | float:
    return value * EIB_S


def zib_s(value: int | float) -> int | float:
    return value * ZIB_S


def yib_s(value: int | float) -> int | float:
    return value * YIB_S


# BYTES - DECIMAL (BASE 10)
def kb_s(value: int | float) -> int | float:
    return value * KB_S


def mb_s(value: int | float) -> int | float:
    return value * MB_S


def gb_s(value: int | float) -> int | float:
    return value * GB_S


def tb_s(value: int | float) -> int | float:
    return value * TB_S


def pb_s(value: int | float) -> int | float:
    return value * PB_S


def eb_s(value: int | float) -> int | float:
    return value * EB_S


def zb_s(value: int | float) -> int | float:
    return value * ZB_S


def yb_s(value: int | float) -> int | float:
    return value * YB_S


# BITS - BINARY (BASE 2)
def kibps(value: int | float) -> int | float:
    return value * KIBPS


def mibps(value: int | float) -> int | float:
    return value * MIBPS


def gibps(value: int | float) -> int | float:
    return value * GIBPS


def tibps(value: int | float) -> int | float:
    return value * TIBPS


def pibps(value: int | float) -> int | float:
    return value * PIBPS


def eibps(value: int | float) -> int | float:
    return value * EIBPS


def zibps(value: int | float) -> int | float:
    return value * ZIBPS


def yibps(value: int | float) -> int | float:
    return value * YIBPS


# BITS - DECIMAL (BASE 10)
def bps(value: int | float) -> int | float:
    return value * BPS


def kbps(value: int | float) -> int | float:
    return value * KBPS


def mbps(value: int | float) -> int | float:
    return value * MBPS


def gbps(value: int | float) -> int | float:
    return value * GBPS


def tbps(value: int | float) -> int | float:
    return value * TBPS


def pbps(value: int | float) -> int | float:
    return value * PBPS


def ebps(value: int | float) -> int | float:
    return value * EBPS


def zbps(value: int | float) -> int | float:
    return value * ZBPS


def ybps(value: int | float) -> int | float:
    return value * YBPS
