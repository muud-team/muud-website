"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Click-to-load video. YouTube embeds contact Google ad and tracking hosts as
 * soon as they render, so nothing reaches Google until the visitor presses
 * play. The poster is fetched through /_next/image, on our own origin.
 */
export default function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const t = useTranslations("shared.news.press");
  const [active, setActive] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (active) frameRef.current?.focus();
  }, [active]);

  if (active) {
    return (
      <div className="press-video">
        <iframe
          ref={frameRef}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&cc_load_policy=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="press-video">
      <button type="button" className="press-video-play" onClick={() => setActive(true)}>
        <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill sizes="(max-width: 600px) 100vw, 450px" style={{ objectFit: "cover" }} />
        <span className="press-video-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <span className="press-video-label">{t("play", { title })}</span>
      </button>
    </div>
  );
}
