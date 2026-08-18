"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          {t("最新消息", "Latest News")}
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600">
            {t("敬請期待更多消息...", "Stay tuned for more updates...")}
          </p>
        </div>
      </div>
    </main>
  );
}
