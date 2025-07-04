import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Page() {
  const t = useTranslations("About");
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{t("title")}</h1>
      <p className="mt-4">{t("description")}</p>
      <div className="mt-6 flex gap-4">
        <Link href="/" className="underline">{t("home")}</Link>
        <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">
          {t("team")}
        </button>
      </div>
    </div>
  );
}
