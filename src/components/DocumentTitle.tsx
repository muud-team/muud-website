"use client";

import { useEffect } from "react";

/**
 * notFound() reaches the browser through Next's error shell, and the title from
 * generateMetadata is lost when the client takes over. Restores it (WCAG 2.4.2).
 */
export default function DocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
