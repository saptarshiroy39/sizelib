import Link from "next/link";
import { CodeBlockRenderer, ApiRenderer } from "@/components/DocBlocks";

export default function Page() {
  return (
    <article className="space-y-6 font-mono">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link
          href="/introduction"
          className="hover:text-foreground transition-colors"
        >
          Docs
        </Link>
        <span>&gt;</span>
        <span className="text-foreground font-medium">rate</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        rate - Rate Helpers
      </h1>

      <div className="h-px bg-border" />

      <ul className="my-4 list-disc pl-6 text-sm text-muted-foreground space-y-6">
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Bytes (Binary) Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            b_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            eib_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zib_s()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yib_s()
          </code>{" "}
          return binary byte-per-second unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Bytes (Decimal) Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            b_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            eb_s()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zb_s()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yb_s()
          </code>{" "}
          return decimal byte-per-second unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Bits (Binary) Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            bps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            eibps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zibps()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            yibps()
          </code>{" "}
          return binary bit-per-second unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Bits (Decimal) Helpers –{" "}
          </strong>
          Methods like{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            bps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            kbps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            mbps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            gbps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            tbps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            pbps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ebps()
          </code>
          ,{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            zbps()
          </code>
          , and{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            ybps()
          </code>{" "}
          return decimal bit-per-second unit calculations.
        </li>
        <li className="leading-relaxed whitespace-pre-wrap">
          <strong className="font-bold text-foreground/80">
            Type Preservation –{" "}
          </strong>
          Preserves input types (accepts and returns{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            int
          </code>{" "}
          or{" "}
          <code className="font-mono text-xs font-bold text-sidebar-primary">
            float
          </code>{" "}
          without casting) to avoid arithmetic precision loss.
        </li>
      </ul>

      <ApiRenderer signature="sizelib.rate.<helper>(value: int | float) -> int | float" />

      <h3 className="text-sm font-bold text-foreground pt-2">
        Bytes Helpers (Binary / Base 2)
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.b_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.kib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,024
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.mib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,048,576
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.gib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,073,741,824
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.tib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,099,511,627,776
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.pib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^5
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,125,899,906,842,624
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.eib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^6
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,152,921,504,606,846,976
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.zib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,180,591,620,717,411,303,424
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.yib_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^8
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,208,925,819,614,629,174,706,176
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-foreground pt-2">
        Bytes Helpers (Decimal / Base 10)
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y border-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.b_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.kb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.mb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.gb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.tb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.pb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^5
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.eb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^6
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.zb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.yb_s(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^8
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-foreground pt-2">
        Bits Helpers (Binary / Base 2)
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.bps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.kibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,024
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.mibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,048,576
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.gibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,073,741,824
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.tibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,099,511,627,776
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.pibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^5
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,125,899,906,842,624
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.eibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^6
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,152,921,504,606,846,976
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.zibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,180,591,620,717,411,303,424
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.yibps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">BIN (2)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,024^8
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,208,925,819,614,629,174,706,176
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-foreground pt-2">
        Bits Helpers (Decimal / Base 10)
      </h3>
      <div className="my-2 overflow-x-auto border border-border bg-card rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Helper Method
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Base
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Multiplier Scale
              </th>
              <th className="p-3 font-bold text-muted-foreground uppercase">
                Value (e.g. for input 1)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.bps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.kbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.mbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^2
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.gbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^3
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.tbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^4
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.pbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^5
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.ebps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^6
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.zbps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^7
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                rate.ybps(value)
              </td>
              <td className="p-3 text-foreground/80 leading-normal">DEC (10)</td>
              <td className="p-3 text-foreground/80 leading-normal text-sidebar-primary font-bold">
                1,000^8
              </td>
              <td className="p-3 text-foreground/80 leading-normal font-bold">
                1,000,000,000,000,000,000,000,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlockRenderer
        language="python"
        title="rate API - Basic Usage"
        code={`from sizelib import rate

# Define bandwidth and bitrate constraints
DISK_WRITE_RATE = rate.mib_s(500)       # 500 MiB/s (524,288,000 bytes/s)
DOWNLOAD_SPEED = rate.mb_s(12.5)        # 12.5 MB/s (12,500,000 bytes/s)
NETWORK_BANDWIDTH = rate.mbps(100)      # 100 Mbps (100,000,000 bits/s)
BUFFER_RATE = rate.mibps(50)            # 50 Mibps (52,428,800 bits/s)
INTERNET_SPEED = rate.gbps(1)           # 1 Gbps (1,000,000,000 bits/s)
BACKBONE_CAPACITY = rate.tbps(10)       # 10 Tbps (10,000,000,000,000 bits/s)`}
      />

      <CodeBlockRenderer
        language="python"
        title="rate API - Variables & Expressions"
        code={`from sizelib import rate

# Variables and expressions are fully supported
target_speed = 50
upload_limit = rate.mbps(target_speed)  # 50 Mbps (50,000,000 bits/s)`}
      />

      <CodeBlockRenderer
        language="python"
        title="rate API - Type Preservation"
        code={`from sizelib import rate

# Input types (int/float) are dynamically preserved
BANDWIDTH = rate.mbps(100)
print(BANDWIDTH)                        # Output: 100000000
print(type(BANDWIDTH))                  # Output: <class 'int'>

THROUGHPUT = rate.mb_s(1.5)
print(THROUGHPUT)                       # Output: 1500000.0
print(type(THROUGHPUT))                 # Output: <class 'float'>`}
      />
    </article>
  );
}
