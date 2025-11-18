"use client";

import { Component } from "@/components/etheral-shadow";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 ethereal-bg-container">
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 80, speed: 60 }}
        noise={{ opacity: 0.7, scale: 1.1 }}
        sizing="fill"
      />
    </div>
  );
}

