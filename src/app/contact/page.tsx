"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/* Note: Metadata export is moved below after useLanguage hook */

export default function ContactPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">
        {t("聯絡我們", "Contact Us")}
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        {language === "en" ? "Contact" : ""}
      </p>

      <div className="space-y-10">
        {/* Staff */}
        <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-2xl">👩‍💼</span>
              {language === "en" ? "Program Office" : "學程辦公室"}
            </h2>
            <p className="text-sm text-gray-500 ml-11">
              {language === "en" ? "" : "Program Office"}
            </p>
          </div>

          <div className="px-6 py-5">
            <div className="flex items-start gap-5">
              {/* Avatar */}
              <div className="shrink-0 w-24 h-24 rounded-full bg-pink-50 border-2 border-pink-200 flex items-center justify-center text-5xl">
                👩
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {language === "en" ? "Yi-Ling Liu" : "劉怡伶"}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "en" ? "" : "Liu, Yi-Ling"}
                </p>
                <p className="text-sm font-medium text-primary mt-1">
                  {language === "en" ? "Program Secretary" : "學程秘書"}
                </p>
                <p className="text-xs text-gray-500">
                  {language === "en" ? "" : "Program Secretary"}
                </p>

                <ul className="text-sm text-gray-600 mt-3 space-y-1">
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <Link
                      href="mailto:mialiu@pu.edu.tw"
                      className="text-primary hover:underline"
                    >
                      mialiu@pu.edu.tw
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    04-2632-8001 ext. 18024
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Info */}
        <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-2xl">🏫</span>
              {language === "en" ? "Program Information" : "學程資訊"}
            </h2>
            <p className="text-sm text-gray-500 ml-11">
              {language === "en" ? "" : "Program Information"}
            </p>
          </div>

          <div className="px-6 py-5 space-y-3 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-800">
                {language === "en"
                  ? "International Program in Computer Science (IPCS)"
                  : "國際資訊學士學位學程（IPCS）"}
              </p>
              <p className="text-gray-500">
                {language === "en"
                  ? ""
                  : "International Program in Computer Science"}
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  {language === "en"
                    ? "No. 200, Sec. 7, Taiwan Boulevard, Shalu Dist., Taichung City 43301, Taiwan"
                    : "43301 臺中市沙鹿區臺灣大道七段 200 號"}
                  {language === "zh" && (
                    <span className="block text-gray-500">
                      No. 200, Sec. 7, Taiwan Boulevard, Shalu Dist., Taichung
                      City 43301, Taiwan
                    </span>
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                04-2632-8001 ext. 18024
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <Link
                  href="mailto:pu20750@pu.edu.tw"
                  className="text-primary hover:underline"
                >
                  pu20750@pu.edu.tw
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Team Photo */}
      <section className="mt-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📸</span>
            {language === "en" ? "Welcome to IPCS" : "IPCS 學程歡迎你"}
          </h2>
          <p className="text-sm text-gray-500 ml-11">
            {language === "en" ? "" : "Welcome to IPCS"}
          </p>
        </div>
        <div className="px-6 py-5">
          <Image
            src="/images/IPCS_team.jpg"
            alt={language === "en" ? "IPCS Team" : "IPCS 學程團隊"}
            width={960}
            height={640}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
