import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground space-y-4">
      <div className="w-12 h-12 rounded-full border-2 border-accent/20 border-t-accent animate-spin" />
      <div className="text-xs font-mono tracking-widest text-muted uppercase animate-pulse">
        ESTABLISHING PASCON X ENVIRONMENT...
      </div>
    </div>
  );
}
