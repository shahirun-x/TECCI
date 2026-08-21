"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

// Google Maps embeds capture single-finger touch gestures for panning,
// which blocks page scroll on mobile. Overlay a tap-to-activate button
// below md so a swipe over the map scrolls the page like everywhere
// else; one tap hands control to the iframe for the rest of the session.
export default function MapEmbed({ src, title }: { src: string; title: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative h-full w-full">
      <iframe
        src={src}
        title={title}
        className={`absolute inset-0 h-full w-full ${!isActive ? "pointer-events-none md:pointer-events-auto" : ""}`}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {!isActive && (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-navy/20 backdrop-blur-[1px] transition-opacity hover:bg-navy/10 md:hidden"
          aria-label="Tap to activate interactive map"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-medium text-navy shadow-lg backdrop-blur-sm">
            <MapPin className="h-4 w-4" strokeWidth={2} />
            Tap to interact with map
          </div>
        </button>
      )}
    </div>
  );
}
