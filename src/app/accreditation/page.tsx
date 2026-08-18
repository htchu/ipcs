"use client";

import ObjectivesContent from "@/components/ObjectivesContent";
import { useLanguage } from "@/context/LanguageContext";

export default function AccreditationPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">
        {t("教育認證", "IEET Accreditation")}
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        {language === "en" ? "" : "IEET Accreditation"}
      </p>
      <ObjectivesContent />
    </div>
  );
}
