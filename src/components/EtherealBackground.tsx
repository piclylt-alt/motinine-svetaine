"use client";

import { Component } from "@/components/etheral-shadow";

export function EtherealBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden ethereal-bg-container">
      <Component
        color="rgba(30, 215, 96, 0.12)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
}

