"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Types ─── */

type WeekInfo = {
  id: string;
  label: string;
  short: string;
};

type MetricData = {
  value: number;
  display: string;
  label: string;
};

type TopicWeekData = {
  metrics: MetricData[];
  highlight?: { value: string; label: string };
  breakdown?: { source: string; count: number; color: string }[];
};

type TopicConfig = {
  label: string;
  slug: string;
  subtitle: string;
  color: string;
  icon: string;
  metricLabels: string[];
  hasBreakdown?: boolean;
  breakdownSources?: { source: string; color: string }[];
  isComputed?: boolean;
  weeks: Record<string, TopicWeekData>;
};

/* ─── Default Data ─── */

const DEFAULT_WEEKS: WeekInfo[] = [
  { id: "2024-W10", label: "Feb 27 - Mar 6", short: "Feb 27-Mar 6" },
  { id: "2024-W09", label: "Feb 20 - Feb 27", short: "Feb 20-27" },
];

const DEFAULT_TOPICS: TopicConfig[] = [
  {
    label: "Paid Ads",
    slug: "paid-ads",
    subtitle: "Paid advertising performance",
    color: "#8A56DC",
    icon: "paid",
    metricLabels: ["Clicks", "Impressions", "Conversions"],
    weeks: {
      "2024-W10": { metrics: [{ value: 32, display: "32", label: "Clicks" }, { value: 558, display: "558", label: "Impressions" }, { value: 1, display: "1", label: "Conversions" }] },
      "2024-W09": { metrics: [{ value: 28, display: "28", label: "Clicks" }, { value: 510, display: "510", label: "Impressions" }, { value: 2, display: "2", label: "Conversions" }] },
    },
  },
  {
    label: "AEO",
    slug: "aeo",
    subtitle: "AI engine optimization results",
    color: "#9B6BE6",
    icon: "aeo",
    metricLabels: ["Direct Clicks", "Conversions", "Visibility"],
    weeks: {
      "2024-W10": { metrics: [{ value: 25, display: "25", label: "Direct Clicks" }, { value: 3, display: "3", label: "Conversions" }, { value: 31, display: "31%", label: "Visibility" }] },
      "2024-W09": { metrics: [{ value: 20, display: "20", label: "Direct Clicks" }, { value: 2, display: "2", label: "Conversions" }, { value: 28, display: "28%", label: "Visibility" }] },
    },
  },
  {
    label: "SEO",
    slug: "seo",
    subtitle: "Organic search performance",
    color: "#AB80F0",
    icon: "seo",
    metricLabels: ["Clicks", "Impressions"],
    weeks: {
      "2024-W10": { metrics: [{ value: 162, display: "162", label: "Clicks" }, { value: 71400, display: "71.4k", label: "Impressions" }] },
      "2024-W09": { metrics: [{ value: 148, display: "148", label: "Clicks" }, { value: 68200, display: "68.2k", label: "Impressions" }] },
    },
  },
  {
    label: "Social Media",
    slug: "social-media",
    subtitle: "Social media reach and engagement",
    color: "#BB95FA",
    icon: "social",
    metricLabels: ["Clicks (New Users)", "Impressions"],
    weeks: {
      "2024-W10": { metrics: [{ value: 32, display: "32", label: "Clicks (New Users)" }, { value: 1999, display: "1,999", label: "Impressions" }] },
      "2024-W09": { metrics: [{ value: 27, display: "27", label: "Clicks (New Users)" }, { value: 1820, display: "1,820", label: "Impressions" }] },
    },
  },
  {
    label: "Site Traffic",
    slug: "site-traffic",
    subtitle: "Website visitor activity",
    color: "#B07CED",
    icon: "traffic",
    metricLabels: ["Active Users"],
    weeks: {
      "2024-W10": { metrics: [{ value: 1220, display: "1,220", label: "Active Users" }] },
      "2024-W09": { metrics: [{ value: 1085, display: "1,085", label: "Active Users" }] },
    },
  },
  {
    label: "Booked Calls",
    slug: "booked-calls",
    subtitle: "Sales pipeline generation",
    color: "#D4A0FF",
    icon: "calls",
    metricLabels: ["Booked Calls"],
    hasBreakdown: true,
    breakdownSources: [
      { source: "Unknown", color: "#8A56DC" },
      { source: "AEO", color: "#9B6BE6" },
      { source: "Referral", color: "#B07CED" },
      { source: "Paid Ads", color: "#7C3AED" },
      { source: "SEO", color: "#AB80F0" },
      { source: "Online Group", color: "#BB95FA" },
    ],
    weeks: {
      "2024-W10": { metrics: [{ value: 10, display: "10", label: "Booked Calls" }], breakdown: [{ source: "Unknown", count: 5, color: "#8A56DC" }, { source: "AEO", count: 3, color: "#9B6BE6" }, { source: "Referral", count: 2, color: "#B07CED" }, { source: "Paid Ads", count: 0, color: "#7C3AED" }, { source: "SEO", count: 0, color: "#AB80F0" }, { source: "Online Group", count: 0, color: "#BB95FA" }] },
      "2024-W09": { metrics: [{ value: 8, display: "8", label: "Booked Calls" }], breakdown: [{ source: "Unknown", count: 4, color: "#8A56DC" }, { source: "AEO", count: 2, color: "#9B6BE6" }, { source: "Referral", count: 2, color: "#B07CED" }, { source: "Paid Ads", count: 0, color: "#7C3AED" }, { source: "SEO", count: 0, color: "#AB80F0" }, { source: "Online Group", count: 0, color: "#BB95FA" }] },
    },
  },
  {
    label: "Conversion Rate",
    slug: "conversion-rate",
    subtitle: "Overall funnel efficiency",
    color: "#8A56DC",
    icon: "conversion",
    metricLabels: ["Overall Rate"],
    isComputed: true,
    weeks: {
      "2024-W10": { metrics: [{ value: 0, display: "0%", label: "Overall Rate" }] },
      "2024-W09": { metrics: [{ value: 0, display: "0%", label: "Overall Rate" }] },
    },
  },
];

/* ─── Helpers ─── */

function formatDisplay(value: number): string {
  if (value >= 10000) return `${(value / 1000).toFixed(1)}k`;
  if (value >= 1000) return value.toLocaleString();
  if (value % 1 !== 0) return `${value}%`;
  return String(value);
}

/** Compute the highlight (rate) for a topic based on its metrics */
function computeHighlight(
  slug: string,
  weekData: TopicWeekData,
  allTopics: TopicConfig[],
  weekId: string,
): { value: string; label: string } | null {
  const m = weekData.metrics;
  switch (slug) {
    case "paid-ads": {
      // CTR = Clicks / Impressions
      const clicks = m[0]?.value ?? 0;
      const impressions = m[1]?.value ?? 0;
      const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      return { value: `${ctr.toFixed(1)}%`, label: "Click-Through Rate" };
    }
    case "aeo": {
      // Conversion Rate = Conversions / Direct Clicks
      const clicks = m[0]?.value ?? 0;
      const conversions = m[1]?.value ?? 0;
      const rate = clicks > 0 ? (conversions / clicks) * 100 : 0;
      return { value: `${rate.toFixed(1)}%`, label: "Conversion Rate" };
    }
    case "seo": {
      // CTR = Clicks / Impressions
      const clicks = m[0]?.value ?? 0;
      const impressions = m[1]?.value ?? 0;
      const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      return { value: `${ctr.toFixed(2)}%`, label: "Click-Through Rate" };
    }
    case "social-media": {
      // New User CTR = Clicks / Impressions
      const clicks = m[0]?.value ?? 0;
      const impressions = m[1]?.value ?? 0;
      const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
      return { value: `${ctr.toFixed(1)}%`, label: "New User CTR" };
    }
    case "conversion-rate": {
      // Overall Rate = Booked Calls / Active Users
      const trafficTopic = allTopics.find((t) => t.slug === "site-traffic");
      const callsTopic = allTopics.find((t) => t.slug === "booked-calls");
      const activeUsers = trafficTopic?.weeks[weekId]?.metrics[0]?.value ?? 0;
      const bookedCalls = callsTopic?.weeks[weekId]?.metrics[0]?.value ?? 0;
      const rate = activeUsers > 0 ? (bookedCalls / activeUsers) * 100 : 0;
      return {
        value: `${activeUsers.toLocaleString()} -> ${bookedCalls}`,
        label: "Active Users -> Booked Calls",
      };
    }
    default:
      return null;
  }
}

/** Compute the conversion rate metric value from other topics */
function computeConversionRate(allTopics: TopicConfig[], weekId: string): number {
  const trafficTopic = allTopics.find((t) => t.slug === "site-traffic");
  const callsTopic = allTopics.find((t) => t.slug === "booked-calls");
  const activeUsers = trafficTopic?.weeks[weekId]?.metrics[0]?.value ?? 0;
  const bookedCalls = callsTopic?.weeks[weekId]?.metrics[0]?.value ?? 0;
  return activeUsers > 0 ? (bookedCalls / activeUsers) * 100 : 0;
}

const STORAGE_KEY = "amply-dashboard-data-v2";

function loadFromStorage(): { weeks: WeekInfo[]; topics: TopicConfig[] } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToStorage(weeks: WeekInfo[], topics: TopicConfig[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ weeks, topics }));
  } catch {
    // silent fail
  }
}

/* ─── Icons ─── */

function TopicIcon({ type, size = 20 }: { type: string; size?: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "paid":
      return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;
    case "aeo":
      return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>;
    case "seo":
      return <svg {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
    case "social":
      return <svg {...props}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
    case "traffic":
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>;
    case "calls":
      return <svg {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
    case "conversion":
      return <svg {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function TrendArrow({ current, previous }: { current: number; previous: number }) {
  if (current === previous) return <span className="text-[#9CA3AF] text-sm">--</span>;
  const up = current > previous;
  const pct = previous === 0 ? 100 : Math.abs(((current - previous) / previous) * 100);
  return (
    <span className={`inline-flex items-center gap-1 text-sm font-medium ${up ? "text-emerald-600" : "text-red-500"}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {up ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
      </svg>
      {pct.toFixed(1)}%
    </span>
  );
}

/* ─── Comparison Line Chart (all weeks) ─── */

function ComparisonChart({
  label,
  metricIndex,
  topic,
  weeks,
  selectedWeekIndex,
  color,
}: {
  label: string;
  metricIndex: number;
  topic: TopicConfig;
  weeks: WeekInfo[];
  selectedWeekIndex: number;
  color: string;
}) {
  const points = [...weeks].reverse().map((week) => {
    const weekData = topic.weeks[week.id];
    const metric = weekData?.metrics[metricIndex];
    return {
      weekLabel: week.short,
      value: metric?.value ?? 0,
      display: metric?.display ?? "0",
      isCurrent: weeks[selectedWeekIndex].id === week.id,
    };
  });

  const values = points.map((p) => p.value);
  const maxVal = Math.max(...values, 1);
  const minVal = Math.min(...values);
  const padding = (maxVal - minVal) * 0.35 || maxVal * 0.25;
  const yMax = maxVal + padding;
  const yMin = Math.max(0, minVal - padding);
  const range = yMax - yMin || 1;

  const chartWidth = 280;
  const chartHeight = 150;
  const padX = 28;
  const padY = 22;
  const padBottom = 28;
  const drawW = chartWidth - padX * 2;
  const drawH = chartHeight - padY - padBottom;

  const toX = (i: number) => padX + (points.length > 1 ? (i / (points.length - 1)) * drawW : drawW / 2);
  const toY = (v: number) => padY + drawH - ((v - yMin) / range) * drawH;

  const linePoints = points.map((p, i) => `${toX(i)},${toY(p.value)}`);
  const linePath = `M${linePoints.join(" L")}`;
  const fillPath = `${linePath} L${toX(points.length - 1)},${padY + drawH} L${toX(0)},${padY + drawH} Z`;
  const gradientId = `fill-${label.replace(/\s/g, "")}-${metricIndex}`;

  return (
    <div className="bg-white border border-[#E8E4ED] rounded-xl p-5 shadow-sm">
      <p className="text-[#6B7280] text-xs font-medium mb-3 uppercase tracking-wider">{label}</p>
      <div className="flex justify-center">
        <svg width={chartWidth} height={chartHeight} className="overflow-visible">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={color} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[0, 0.5, 1].map((t) => {
            const gy = padY + drawH * (1 - t);
            return <line key={t} x1={padX} y1={gy} x2={padX + drawW} y2={gy} stroke="#E8E4ED" strokeWidth="1" />;
          })}
          <path d={fillPath} fill={`url(#${gradientId})`} />
          <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => {
            const cx = toX(i);
            const cy = toY(p.value);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={p.isCurrent ? 5 : 4} fill={p.isCurrent ? color : "white"} stroke={p.isCurrent ? "white" : `${color}60`} strokeWidth="2" />
                <text x={cx} y={cy - 10} textAnchor="middle" fill={p.isCurrent ? "#1C1917" : "#9CA3AF"} fontSize="10" fontWeight={p.isCurrent ? "700" : "500"}>{p.display}</text>
                <text x={cx} y={chartHeight - 8} textAnchor="middle" fill={p.isCurrent ? "#1C1917" : "#9CA3AF"} fontSize="8" fontWeight={p.isCurrent ? "700" : "500"}>{p.weekLabel}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ─── Breakdown Chart ─── */

function BreakdownChart({ data, maxCount }: { data: { source: string; count: number; color: string }[]; maxCount: number }) {
  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.source} className="flex items-center gap-3">
          <span className="text-[#6B7280] text-xs w-16 text-right shrink-0">{item.source}</span>
          <div className="flex-1 h-8 bg-[#F5F3F7] rounded-lg overflow-hidden">
            <div
              className="h-full rounded-lg flex items-center pl-3 transition-all duration-500"
              style={{ width: `${Math.max((item.count / maxCount) * 100, 8)}%`, background: `linear-gradient(90deg, ${item.color}, ${item.color}90)` }}
            >
              <span className="text-white font-semibold text-xs">{item.count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Data Editor Panel ─── */

function DataEditor({
  weeks,
  topics,
  onSave,
  onClose,
}: {
  weeks: WeekInfo[];
  topics: TopicConfig[];
  onSave: (weeks: WeekInfo[], topics: TopicConfig[]) => void;
  onClose: () => void;
}) {
  const [editWeeks, setEditWeeks] = useState<WeekInfo[]>(JSON.parse(JSON.stringify(weeks)));
  const [editTopics, setEditTopics] = useState<TopicConfig[]>(JSON.parse(JSON.stringify(topics)));
  const [activeWeekId, setActiveWeekId] = useState(editWeeks[0]?.id ?? "");
  const [showNewWeek, setShowNewWeek] = useState(false);
  const [newWeekStart, setNewWeekStart] = useState("");
  const [newWeekEnd, setNewWeekEnd] = useState("");

  const formatDateShort = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const addNewWeek = () => {
    if (!newWeekStart || !newWeekEnd) return;
    const startLabel = formatDateShort(newWeekStart);
    const endLabel = formatDateShort(newWeekEnd);
    const id = `custom-${Date.now()}`;
    const newWeek: WeekInfo = {
      id,
      label: `${startLabel} - ${endLabel}`,
      short: `${startLabel}-${endLabel.replace(/[A-Za-z]+ /, "")}`,
    };
    // Add new week at position 0 (most recent)
    setEditWeeks([newWeek, ...editWeeks]);
    // Initialize empty data for every topic (skip computed topics)
    setEditTopics(editTopics.map((t) => ({
      ...t,
      weeks: {
        ...t.weeks,
        [id]: {
          metrics: t.metricLabels.map((ml) => ({ value: 0, display: "0", label: ml })),
          ...(t.hasBreakdown && t.breakdownSources
            ? { breakdown: t.breakdownSources.map((s) => ({ ...s, count: 0 })) }
            : {}),
        },
      },
    })));
    setActiveWeekId(id);
    setShowNewWeek(false);
    setNewWeekStart("");
    setNewWeekEnd("");
  };

  const updateMetricValue = (topicIdx: number, metricIdx: number, raw: string) => {
    const numVal = parseFloat(raw) || 0;
    setEditTopics((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const weekData = next[topicIdx].weeks[activeWeekId];
      if (weekData && weekData.metrics[metricIdx]) {
        weekData.metrics[metricIdx].value = numVal;
        weekData.metrics[metricIdx].display = formatDisplay(numVal);
      }
      return next;
    });
  };

  const updateBreakdownValue = (topicIdx: number, breakdownIdx: number, raw: string) => {
    const numVal = parseInt(raw) || 0;
    setEditTopics((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const weekData = next[topicIdx].weeks[activeWeekId];
      if (weekData && weekData.breakdown && weekData.breakdown[breakdownIdx]) {
        weekData.breakdown[breakdownIdx].count = numVal;
      }
      return next;
    });
  };

  const handleSave = () => {
    onSave(editWeeks, editTopics);
    onClose();
  };

  const inputClass = "w-full bg-[#F5F3F7] border border-[#E8E4ED] rounded-lg px-3 py-2 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#8A56DC]/40 focus:border-[#8A56DC]";

  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ml-auto w-full max-w-lg bg-white h-full shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E4ED]">
          <h2 className="text-lg font-semibold text-[#1C1917]">Edit Weekly Data</h2>
          <button onClick={onClose} className="p-1 text-[#6B7280] hover:text-[#1C1917] rounded-md hover:bg-[#F5F3F7]">
            <XIcon />
          </button>
        </div>

        {/* Week tabs */}
        <div className="px-6 py-3 border-b border-[#E8E4ED] flex items-center gap-2 overflow-x-auto">
          {editWeeks.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveWeekId(w.id)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeWeekId === w.id
                  ? "bg-[#8A56DC] text-white"
                  : "bg-[#F5F3F7] text-[#6B7280] hover:bg-[#E8E4ED]"
              }`}
            >
              {w.short}
            </button>
          ))}
          <button
            onClick={() => setShowNewWeek(!showNewWeek)}
            className="shrink-0 p-1.5 rounded-lg bg-[#F5F3F7] text-[#6B7280] hover:bg-[#E8E4ED] hover:text-[#1C1917] transition-colors"
          >
            <PlusIcon />
          </button>
        </div>

        {/* New week form */}
        {showNewWeek && (
          <div className="px-6 py-3 border-b border-[#E8E4ED] bg-[#FAFAF9]">
            <p className="text-xs font-medium text-[#6B7280] mb-2">Add New Week</p>
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">Start Date</label>
                <input type="date" value={newWeekStart} onChange={(e) => setNewWeekStart(e.target.value)} className={inputClass} />
              </div>
              <div className="flex-1">
                <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">End Date</label>
                <input type="date" value={newWeekEnd} onChange={(e) => setNewWeekEnd(e.target.value)} className={inputClass} />
              </div>
              <button
                onClick={addNewWeek}
                disabled={!newWeekStart || !newWeekEnd}
                className="px-4 py-2 bg-[#8A56DC] text-white text-sm font-medium rounded-lg hover:bg-[#7A46CC] disabled:opacity-40 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* Topic data forms */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {editTopics.map((topic, tIdx) => {
            // Skip computed topics (Conversion Rate is auto-calculated)
            if (topic.isComputed) return null;
            const weekData = topic.weeks[activeWeekId];
            if (!weekData) return null;
            return (
              <div key={topic.slug} className="border border-[#E8E4ED] rounded-xl overflow-hidden">
                {/* Topic header */}
                <div className="px-4 py-3 flex items-center gap-2" style={{ background: `${topic.color}10` }}>
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${topic.color}20`, color: topic.color }}>
                    <TopicIcon type={topic.icon} size={14} />
                  </div>
                  <span className="text-sm font-semibold text-[#1C1917]">{topic.label}</span>
                </div>

                <div className="px-4 py-3 space-y-3">
                  {/* Metric inputs */}
                  {weekData.metrics.map((metric, mIdx) => (
                    <div key={metric.label}>
                      <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-medium">{metric.label}</label>
                      <input
                        type="number"
                        step="any"
                        value={metric.value || ""}
                        onChange={(e) => updateMetricValue(tIdx, mIdx, e.target.value)}
                        placeholder="0"
                        className={inputClass}
                      />
                    </div>
                  ))}

                  {/* Breakdown inputs */}
                  {weekData.breakdown && (
                    <div>
                      <label className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-medium mb-1 block">Source Breakdown</label>
                      <div className="space-y-2">
                        {weekData.breakdown.map((b, bIdx) => (
                          <div key={b.source} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: b.color }} />
                            <span className="text-xs text-[#6B7280] w-16 shrink-0">{b.source}</span>
                            <input
                              type="number"
                              value={b.count || ""}
                              onChange={(e) => updateBreakdownValue(tIdx, bIdx, e.target.value)}
                              placeholder="0"
                              className={inputClass}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E8E4ED] flex items-center gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 text-sm font-medium text-[#6B7280] bg-[#F5F3F7] rounded-lg hover:bg-[#E8E4ED] transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#8A56DC] rounded-lg hover:bg-[#7A46CC] transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Dashboard ─── */

export default function DashboardPage() {
  const [weeks, setWeeks] = useState<WeekInfo[]>(DEFAULT_WEEKS);
  const [topics, setTopics] = useState<TopicConfig[]>(DEFAULT_TOPICS);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) {
      setWeeks(saved.weeks);
      setTopics(saved.topics);
    }
    setHydrated(true);
  }, []);

  const handleSaveData = useCallback((newWeeks: WeekInfo[], newTopics: TopicConfig[]) => {
    setWeeks(newWeeks);
    setTopics(newTopics);
    saveToStorage(newWeeks, newTopics);
    // Reset week index if it's out of bounds
    setSelectedWeekIndex((prev) => Math.min(prev, newWeeks.length - 1));
  }, []);

  if (!hydrated) return null;

  const topic = topics[selectedTopicIndex];
  const currentWeek = weeks[selectedWeekIndex];
  const previousWeek = weeks[Math.min(selectedWeekIndex + 1, weeks.length - 1)];
  const hasPreviousWeek = selectedWeekIndex < weeks.length - 1;

  // Compute conversion rate metrics from other topics
  const enrichedTopics = topics.map((t) => {
    if (t.slug !== "conversion-rate") return t;
    const enrichedWeeks: Record<string, TopicWeekData> = {};
    for (const weekId of Object.keys(t.weeks)) {
      const rate = computeConversionRate(topics, weekId);
      enrichedWeeks[weekId] = {
        metrics: [{ value: parseFloat(rate.toFixed(2)), display: `${rate.toFixed(2)}%`, label: "Overall Rate" }],
      };
    }
    return { ...t, weeks: enrichedWeeks };
  });

  const enrichedTopic = enrichedTopics[selectedTopicIndex];
  const currentData = enrichedTopic.weeks[currentWeek.id];
  const previousData = enrichedTopic.weeks[previousWeek.id];

  // Compute highlights
  const currentHighlight = currentData ? computeHighlight(topic.slug, currentData, enrichedTopics, currentWeek.id) : null;
  const previousHighlight = previousData ? computeHighlight(topic.slug, previousData, enrichedTopics, previousWeek.id) : null;

  if (!currentData) return null;

  return (
    <div className="min-h-screen bg-[#F5F3F7] text-[#1C1917] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-[#0A0914] border-r border-[#ffffff0a] flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-5 py-5 border-b border-[#ffffff0a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8A56DC] to-[#B07CED] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Analytics</p>
              <p className="text-[#808080] text-[11px]">Marketing Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <p className="text-[#ffffff30] text-[10px] font-bold uppercase tracking-widest px-3 mb-3">Channels</p>
          {topics.map((t, i) => {
            const isActive = i === selectedTopicIndex;
            return (
              <button
                key={t.slug}
                onClick={() => { setSelectedTopicIndex(i); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left transition-all duration-150 ${
                  isActive ? "bg-[#ffffff0a] text-white" : "text-[#808080] hover:text-white hover:bg-[#ffffff06]"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors"
                  style={{ background: isActive ? `${t.color}20` : "transparent", color: isActive ? t.color : "currentColor" }}
                >
                  <TopicIcon type={t.icon} size={18} />
                </div>
                <span className="text-sm font-medium">{t.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />}
              </button>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t border-[#ffffff0a]">
          <p className="text-[#ffffff20] text-[10px]">Amply Marketing Report</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#E8E4ED]">
          <div className="flex items-center justify-between px-4 md:px-8 py-3">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-[#6B7280] hover:text-[#1C1917] rounded-md hover:bg-[#F5F3F7] transition-colors">
                <MenuIcon />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-[#1C1917]">{topic.label}</h1>
                <p className="text-[#6B7280] text-xs">{topic.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Edit data button */}
              <button
                onClick={() => setEditorOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#8A56DC] bg-[#8A56DC]/10 rounded-lg hover:bg-[#8A56DC]/20 transition-colors"
              >
                <PencilIcon />
                <span className="hidden sm:inline">Edit Data</span>
              </button>

              {/* Week selector */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedWeekIndex(Math.min(selectedWeekIndex + 1, weeks.length - 1))}
                  disabled={selectedWeekIndex >= weeks.length - 1}
                  className="p-1.5 text-[#6B7280] hover:text-[#1C1917] disabled:opacity-30 rounded-md hover:bg-[#F5F3F7] transition-colors"
                >
                  <ChevronIcon direction="left" />
                </button>
                <div className="bg-white border border-[#E8E4ED] rounded-lg px-4 py-2 min-w-[180px] text-center shadow-sm">
                  <p className="text-[#1C1917] text-sm font-medium">{currentWeek.label}</p>
                </div>
                <button
                  onClick={() => setSelectedWeekIndex(Math.max(selectedWeekIndex - 1, 0))}
                  disabled={selectedWeekIndex <= 0}
                  className="p-1.5 text-[#6B7280] hover:text-[#1C1917] disabled:opacity-30 rounded-md hover:bg-[#F5F3F7] transition-colors"
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 md:px-8 py-6 max-w-6xl">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {currentData.metrics.map((metric, i) => {
              const prevMetric = previousData?.metrics[i];
              return (
                <div key={metric.label} className="bg-white border border-[#E8E4ED] rounded-xl p-5 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${topic.color}, transparent)` }} />
                  <p className="text-[#6B7280] text-xs font-medium mb-3 uppercase tracking-wider">{metric.label}</p>
                  <div className="flex items-end justify-between">
                    <p className="text-3xl md:text-4xl font-bold text-[#1C1917]">{metric.display}</p>
                    {hasPreviousWeek && prevMetric && <TrendArrow current={metric.value} previous={prevMetric.value} />}
                  </div>
                  {hasPreviousWeek && prevMetric && (
                    <p className="text-[#9CA3AF] text-[11px] mt-2">Previous: {prevMetric.display}</p>
                  )}
                </div>
              );
            })}

            {currentHighlight && (
              <div className="bg-white border rounded-xl p-5 relative overflow-hidden sm:col-span-2 lg:col-span-1 shadow-sm" style={{ borderColor: `${topic.color}40` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: topic.color }} />
                <p className="text-[#6B7280] text-xs font-medium mb-3 uppercase tracking-wider">{currentHighlight.label}</p>
                <p className="text-3xl md:text-4xl font-bold" style={{ color: topic.color }}>{currentHighlight.value}</p>
                {hasPreviousWeek && previousHighlight && (
                  <p className="text-[#9CA3AF] text-[11px] mt-2">Previous: {previousHighlight.value}</p>
                )}
              </div>
            )}
          </div>

          {/* Source breakdown */}
          {currentData.breakdown && (
            <div className="mb-8">
              <h3 className="text-[#1C1917] text-sm font-semibold mb-4">Conversion Sources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-[#E8E4ED] rounded-xl p-5 shadow-sm">
                  <p className="text-[#6B7280] text-xs font-medium mb-4 uppercase tracking-wider">Current Week</p>
                  <BreakdownChart data={currentData.breakdown} maxCount={Math.max(...currentData.breakdown.map((d) => d.count))} />
                </div>
                {hasPreviousWeek && previousData?.breakdown && (
                  <div className="bg-white border border-[#E8E4ED] rounded-xl p-5 shadow-sm">
                    <p className="text-[#6B7280] text-xs font-medium mb-4 uppercase tracking-wider">Previous Week</p>
                    <BreakdownChart data={previousData.breakdown} maxCount={Math.max(...previousData.breakdown.map((d) => d.count))} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Comparison Charts */}
          <h3 className="text-[#1C1917] text-sm font-semibold mb-4">Week-over-Week Trend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentData.metrics.map((metric, i) => (
              <ComparisonChart key={metric.label} label={metric.label} metricIndex={i} topic={enrichedTopic} weeks={weeks} selectedWeekIndex={selectedWeekIndex} color={topic.color} />
            ))}
          </div>
        </div>
      </main>

      {/* Data Editor */}
      {editorOpen && (
        <DataEditor weeks={weeks} topics={topics} onSave={handleSaveData} onClose={() => setEditorOpen(false)} />
      )}
    </div>
  );
}
