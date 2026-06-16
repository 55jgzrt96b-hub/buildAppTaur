import auditImg from "../assets/audit.png";
import binanceImg from "../assets/binance.png";
import bybitImg from "../assets/bybit.png";
import okxImg from "../assets/okx.png";
import polymarketImg from "../assets/polymarket.png";
import riskImg from "../assets/risk.png";
import statusImg from "../assets/status.png";

export const LOG_LINES = [
  "[09:41:16] SELL signal ignored — risk guard active",
  "[09:41:18] monitoring spread on BTC/USDT",
  "[09:41:21] position size adjusted to 0.42 BTC",
  "[09:41:24] checking liquidity across exchanges",
  "[09:41:27] arbitrage window detected — 0.18%",
  "[09:41:30] order routed via Binance + Bybit",
];

export const SIGNAL_SOURCES = [
  { name: "Binance", icon: binanceImg },
  { name: "Bybit", icon: bybitImg },
  { name: "OKX", icon: okxImg },
  { name: "Polymarket", icon: polymarketImg },
];

export type StatusCard = {
  id: string;
  icon: string;
  title: string;
  status: string;
  label: string;
  value: string;
  progress: number;
};

export const STATUS_CARDS: StatusCard[] = [
  {
    id: "risk-guard",
    icon: riskImg,
    title: "Risk Guard",
    status: "Active",
    label: "Exposure",
    value: "$9,842 / $12,500",
    progress: 78,
  },
  {
    id: "bot-status",
    icon: statusImg,
    title: "Bot Status",
    status: "Running",
    label: "Uptime",
    value: "02:41:15",
    progress: 100,
  },
  {
    id: "audit-log",
    icon: auditImg,
    title: "Audit Log",
    status: "Recording",
    label: "Events captured",
    value: "1,247",
    progress: 65,
  },
];
