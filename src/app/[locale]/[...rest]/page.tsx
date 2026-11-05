import { notFound } from "next/navigation";

/** Sends unknown URLs to [locale]/not-found.tsx, which has lang and a title. */
export default function CatchAllPage() {
  notFound();
}
