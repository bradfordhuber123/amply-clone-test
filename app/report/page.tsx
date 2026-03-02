"use client";

import { useState, useEffect, useCallback } from "react";

const AMPLY_LOGO = "/amply-logo.svg";
const TOTAL_SLIDES = 9;

const ICONS: Record<string, React.ReactNode> = {
  "Paid Ads": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A56DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  AEO: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9B6BE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  SEO: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AB80F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  "Social Media": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BB95FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  "Site Traffic": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B07CED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  "Booked Calls": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B07CED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  "Conversion Rate": (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A56DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const FUNNEL_STAGES = [
  {
    label: "Paid Ads",
    subtitle: "Paid advertising performance",
    metrics: [
      { value: "32", label: "Clicks" },
      { value: "558", label: "Impressions" },
      { value: "1", label: "Conversion" },
    ],
    color: "#8A56DC",
    highlight: { value: "5.7%", label: "Click-Through Rate" },
  },
  {
    label: "AEO",
    subtitle: "AI engine optimization results",
    metrics: [
      { value: "25", label: "Direct Clicks" },
      { value: "3", label: "Conversions" },
      { value: "31%", label: "Visibility" },
    ],
    color: "#9B6BE6",
    highlight: { value: "12%", label: "Conversion Rate" },
  },
  {
    label: "SEO",
    subtitle: "Organic search performance",
    metrics: [
      { value: "162", label: "Clicks" },
      { value: "71.4k", label: "Impressions" },
    ],
    color: "#AB80F0",
    highlight: { value: "0.23%", label: "Click-Through Rate" },
  },
  {
    label: "Social Media",
    subtitle: "Social media reach and engagement",
    metrics: [
      { value: "32", label: "Clicks (New Users)" },
      { value: "1,999", label: "Impressions" },
    ],
    color: "#BB95FA",
    highlight: { value: "1.6%", label: "New User CTR" },
  },
  {
    label: "Site Traffic",
    subtitle: "Website visitor activity",
    metrics: [{ value: "1,220", label: "Active Users" }],
    color: "#B07CED",
    highlight: null,
  },
  {
    label: "Booked Calls",
    subtitle: "Sales pipeline generation",
    metrics: [{ value: "10", label: "Booked Calls" }],
    color: "#B07CED",
    highlight: null,
  },
  {
    label: "Conversion Rate",
    subtitle: "Overall funnel efficiency",
    metrics: [{ value: "0.82%", label: "Overall Rate" }],
    color: "#8A56DC",
    highlight: { value: "1,220 → 10", label: "Active Users → Booked Calls" },
  },
];

/* ─── Shared Components ─── */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function SlideHeader({ slideNumber }: { slideNumber: number }) {
  return (
    <div className="flex items-center justify-between mb-6 md:mb-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AMPLY_LOGO} alt="Amply" className="h-5 md:h-6" />
      <span className="text-sm text-[#808080] font-medium tracking-wider">
        {String(slideNumber).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ─── Title Slide ─── */

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="relative mb-6">
        <div className="absolute -inset-20 bg-[#8A56DC]/10 rounded-full blur-3xl" />
        <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white/40 via-white to-white/40 bg-clip-text text-transparent">
          Marketing<br />
          Performance Report
        </h1>
      </div>
      <p className="text-[#808080] text-lg md:text-xl max-w-md mt-4">
        Full-funnel overview from paid ads to booked calls
      </p>
      <div className="mt-12 flex items-center gap-2 text-[#808080] text-sm animate-pulse">
        <span>Use arrows to navigate</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

/* ─── Individual Stage Slide ─── */

function StageSlide({ stageIndex }: { stageIndex: number }) {
  const stage = FUNNEL_STAGES[stageIndex];
  const slideNum = stageIndex + 2; // title is slide 1

  return (
    <div className="flex flex-col h-full">
      {/* Stage position indicator */}
      <div className="flex items-center gap-1.5 mb-8">
        {FUNNEL_STAGES.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <div
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === stageIndex ? 32 : 12,
                background: i === stageIndex ? stage.color : `${s.color}30`,
              }}
            />
            {i < FUNNEL_STAGES.length - 1 && <div className="w-1" />}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${stage.color}15` }}
        >
          {ICONS[stage.label]}
        </div>

        {/* Label — BIG */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight bg-gradient-to-r from-white/40 via-white to-white/40 bg-clip-text text-transparent">
          {stage.label}
        </h2>
        <p className="text-[#808080] text-base md:text-lg mb-12">{stage.subtitle}</p>

        {/* Metrics */}
        <div className="flex items-start justify-center gap-10 md:gap-20 mb-12">
          {stage.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-3">{m.value}</p>
              <p className="text-[#808080] text-base md:text-lg">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Booked Calls breakdown bar graph */}
        {stage.label === "Booked Calls" && (
          <div className="w-full max-w-xl">
            <p className="text-[#808080] text-sm mb-5">Conversion Sources</p>
            <div className="space-y-4">
              {[
                { source: "Unknown", count: 5, color: "#8A56DC" },
                { source: "AEO", count: 3, color: "#9B6BE6" },
                { source: "Referral", count: 2, color: "#B07CED" },
              ].map((item) => (
                <div key={item.source} className="flex items-center gap-4">
                  <span className="text-[#808080] text-sm w-20 text-right shrink-0">{item.source}</span>
                  <div className="flex-1 h-10 bg-[#ffffff08] rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg flex items-center pl-4 transition-all duration-700"
                      style={{
                        width: `${(item.count / 5) * 100}%`,
                        background: `linear-gradient(90deg, ${item.color}90, ${item.color}50)`,
                      }}
                    >
                      <span className="text-white font-bold text-sm">{item.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlight badge */}
        {stage.highlight && (
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{ background: `${stage.color}15`, border: `1px solid ${stage.color}30` }}
          >
            <span className="font-bold text-xl" style={{ color: stage.color }}>
              {stage.highlight.value}
            </span>
            <span className="text-[#808080] text-base">{stage.highlight.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Full Overview Slide ─── */

function OverviewSlide() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-white/40 via-white to-white/40 bg-clip-text text-transparent inline-block">Full Funnel Overview</h2>
      <p className="text-[#808080] text-sm mb-6 md:mb-8">End-to-end performance at a glance</p>

      {/* Funnel flow — vertical list */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
        <div className="space-y-3">
          {FUNNEL_STAGES.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3">
              {/* Step number */}
              <div className="w-7 shrink-0 flex flex-col items-center">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${stage.color}20`, color: stage.color }}
                >
                  {i + 1}
                </div>
                {i < FUNNEL_STAGES.length - 1 && (
                  <div className="w-px h-3 mt-1" style={{ background: `${stage.color}25` }} />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-xl border px-5 py-4 flex items-center justify-between gap-4"
                style={{
                  borderColor: `${stage.color}25`,
                  background: `linear-gradient(135deg, ${stage.color}08 0%, transparent 100%)`,
                }}
              >
                <div className="shrink-0">
                  <p className="text-xs font-bold mb-0.5" style={{ color: stage.color }}>
                    {stage.label}
                  </p>
                  <p className="text-[#808080] text-[11px]">{stage.subtitle}</p>
                </div>
                <div className="flex items-center gap-6 md:gap-8">
                  {stage.metrics.map((m) => (
                    <div key={m.label} className="text-right">
                      <p className="text-white font-bold text-xl md:text-2xl leading-tight">{m.value}</p>
                      <p className="text-[#808080] text-[10px] md:text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function ReportPage() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) setCurrent(index);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrent((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrent((prev) => Math.max(prev - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function renderSlide() {
    if (current === 0) return <TitleSlide />;
    if (current === TOTAL_SLIDES - 1) return <OverviewSlide />;
    return <StageSlide stageIndex={current - 1} />;
  }

  const slideNumber = current === 0 ? 1 : current === TOTAL_SLIDES - 1 ? TOTAL_SLIDES : current + 1;

  return (
    <div className="min-h-screen bg-[#070609] text-white flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-[#070609]/90 backdrop-blur-md border-b border-[#ffffff08]">
        <div className="w-full px-4 md:px-10 lg:px-16 py-3 flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={AMPLY_LOGO} alt="Amply" className="h-5 md:h-6" />
          <span className="text-sm text-[#808080] font-medium tracking-wider">
            {String(slideNumber).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 w-full px-4 py-4 md:px-10 md:py-6 lg:px-16 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          {renderSlide()}
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-t border-[#ffffff10] bg-[#040406]">
        <div className="w-full px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex items-center gap-2 text-sm text-[#808080] hover:text-white disabled:opacity-30 disabled:hover:text-[#808080] transition-colors"
          >
            <ChevronLeft />
            <span className="hidden md:inline">Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-gradient-to-r from-[#B07CED] to-[#8A56DC]"
                    : "w-2 bg-[#ffffff20] hover:bg-[#ffffff40]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === TOTAL_SLIDES - 1}
            className="flex items-center gap-2 text-sm text-[#808080] hover:text-white disabled:opacity-30 disabled:hover:text-[#808080] transition-colors"
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
