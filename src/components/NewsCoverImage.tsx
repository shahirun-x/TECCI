"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Newspaper } from "lucide-react";

// Cover images referenced from content/news/*.md frontmatter may not have
// a matching file yet in public/images/news/. Falls back to a gradient +
// icon placeholder if missing, same pattern used for design/team/tenant
// images elsewhere in this codebase.
export default function NewsCoverImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser may resolve <img src> before React hydrates and attaches
    // onError, so the initial failure can be missed — check on mount too.
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-purple">
        <Newspaper className="h-10 w-10 text-white" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}
