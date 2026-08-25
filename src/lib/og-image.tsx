import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared Open Graph card. Uses only inline styles and no remote assets so it
 * renders identically at build time for every locale and section.
 */
export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  // Titles and descriptions vary a lot in length across locales and sections;
  // step the type down so a long one still clears the footer.
  const titleSize = title.length > 78 ? 50 : title.length > 46 ? 58 : 66;
  const body =
    description.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 40,
          // Satori has no blur filter, so the glow is painted as radial
          // gradients rather than overlaid circles (which render hard-edged).
          backgroundColor: "#17123A",
          backgroundImage:
            "radial-gradient(900px 620px at 88% -12%, rgba(249,139,107,.42), rgba(249,139,107,0) 62%), " +
            "radial-gradient(760px 560px at -8% 112%, rgba(84,196,232,.34), rgba(84,196,232,0) 60%), " +
            "radial-gradient(620px 480px at 50% 130%, rgba(200,192,242,.16), rgba(200,192,242,0) 65%)",
          padding: "76px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: "#F98B6B" }} />
          <div
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: "#FBF7F2",
              letterSpacing: "0.14em",
            }}
          >
            MUUD
          </div>
          {eyebrow ? (
            <div
              style={{
                fontSize: 24,
                color: "#C8C0F2",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderLeft: "2px solid rgba(200,192,242,.45)",
                paddingLeft: 18,
                marginLeft: 4,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              color: "#FBF7F2",
              lineHeight: 1.12,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 29,
              color: "#C8C0F2",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {body}
          </div>
        </div>

        <div
          style={{
            fontSize: 25,
            color: "rgba(251,247,242,.62)",
            letterSpacing: "0.04em",
          }}
        >
          muud.app
        </div>
      </div>
    ),
    OG_SIZE
  );
}

/** Titles are written as "MUUD — X" / "MUUD para Y — Z"; the card already says MUUD. */
export function stripBrand(title: string) {
  return title.split(" — ").slice(-1)[0] || title;
}
