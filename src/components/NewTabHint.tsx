import { useTranslations } from "next-intl";

/** Screen reader notice for links with target="_blank". */
export default function NewTabHint() {
  const t = useTranslations("a11y");
  return <span className="sr-only"> {t("newTab")}</span>;
}
