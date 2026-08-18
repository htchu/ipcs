"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const certificateData = {
  A: {
    level: "A級 (困難)",
    description: "高難度國際認證與專業認證",
    color: "red",
    certificates: [
      "Oracle Database Administrator II",
      "Cisco Certified Network Professional (CCNP)",
      "SAP Certified Business Associate with SAP ERP (SAP TERP 原廠認證)",
      "Certified Ethical Hacker",
      "RHCA (Red Hat Certified Architect)",
      "RHCE (Red Hat Certified Engineer)",
      "Oracle Certified Master, Java SE Programmer",
      "Oracle Certified Master, Java EE Application Developer",
      "顧客關係管理師(顧客服務)國際資格證照 (City & Guilds)",
      "Oracle Certified Master (OCM)",
      "經濟部產業人才能力鑑定-資訊安全工程師能力鑑定(中級)",
      "經濟部產業人才能力鑑定-物聯網應用工程師能力鑑定(中級)",
      "經濟部產業人才能力鑑定-AI 應用規劃師能力鑑定(中級)",
      "財團法人資訊工業策進會 AI 美術設計能力認證(中級)",
    ],
  },
  B: {
    level: "B級 (中等)",
    description: "中等難度專業技能認證",
    color: "yellow",
    certificates: [
      "CPE",
      "TQC+ 平面設計專業人員",
      "TQC+ Flash 動畫設計專業人員",
      "TQC+ 多媒體網頁設計專業人員",
      "TQC+ 網頁設計專業人員",
      "TQC+ 動態與視覺特效專業人員",
      "TQC+ 視覺傳達設計助理",
      "TQC+ Java 程式設計專業人員",
      "TQC+ Android 行動裝置程式設計專業人員",
      "TQC+ ASP.NET 網站程式開發專業人員",
      "TQC+ Python 機器學習專業人員",
      "TQC+ Python 大數據分析專業人員",
      "TQC+ C#程式設計專業人員",
      "TQC+ 電路設計專業人員",
      "TQC+ 電路佈局專業人員",
      "Oracle Database Administrator I",
      "Cisco Certified Network Associate (CCNA)",
      "ITE 遊戲企劃專業人員",
      "ITE 遊戲美術專業人員",
      "進階 ERP 規劃師(分為：財務管理/運籌管理/人力資源管理)",
      "ERP 軟體應用師(分為：財務模組/配銷模組/生管製造模組)",
      "BI 規劃師",
      "數位邏輯設計專業級(乙級)能力認證",
      "單晶片能力認證專業級(乙級)",
      "電路板設計能力認證實用級",
      "VMware Certified Profession5-Data Center Virtualization",
      "RHCSA (Red Hat Certified System Administrator)",
      "RHCVA (Red Hat Certified virtualization Administrator)",
      "Information Technology Specialist",
      "Oracle Certified Professional, Java SE Programmer",
      "Oracle Certified Professional, Java SE Developer",
      "Oracle Certified Professional (OCP)",
      "企業電子化規劃師(第一級)",
      "顧客關係管理應用師",
      "商業數據分析師(專業級)",
      "ITE 網路通訊專業人員",
      "ITE 網路通訊+網路規劃設計專業人員",
      "ITE 數位教學設計專業人員",
      "ITE 資訊安全管理專業人員",
      "ITE Linux維運管理專業人員",
      "ITE嵌入式系統軟體開發專業人員",
      "ICDL Artificial Intelligence 人工智慧",
      "ICDL Internet of Things 物聯網",
      "ICDL IT Security 資訊安全",
      "ICDL Advanced Word Processing 進階文書處理",
      "ICDL Advanced Presentation 進階電腦簡報",
      "ICDL Advanced Spreadsheets 進階電子試算表",
      "Cisco Certified Support Technician(CCST) Networking網路管理",
      "Cisco Certified Support Technician(CCST) Cybersecurity資訊安全",
      "經濟部產業人才能力鑑定-資訊安全工程師能力鑑定(初級)",
      "經濟部產業人才能力鑑定-物聯網應用工程師能力鑑定(初級)",
      "經濟部產業人才能力鑑定-AI 應用規劃師能力鑑定(初級)",
      "經濟部產業人才能力鑑定—機器學習工程師能力鑑定(初級)",
      "財團法人資訊工業策進會 AI 美術設計能力認證(初級)",
      "生產與作業管理技術師",
    ],
  },
  C: {
    level: "C級 (簡易)",
    description: "基礎與入門級認證",
    color: "green",
    certificates: [
      "TQC Microsoft Word 文書處理",
      "TQC Microsoft PowerPoint 電腦簡報",
      "TQC Microsoft Excel 電子試算表",
      "TQC 電子商務概論",
      "TQC 資訊科技 Python",
      "Adobe Certified Associate (ACA)",
      "Oracle Certified Associate, Java SE Programmer",
      "Oracle Database SQL",
      "OCA (Oracle Certified Associate)",
      "ERP 規劃師",
      "數位邏輯設計實用級(丙級)能力認證",
      "單晶片能力認證實用級(丙級)",
      "TQC+ 程式語言(C)",
      "TQC+ 物件導向程式語言(Java/C#)",
      "TQC+ 物件導向視窗及資料庫程式設計(Java/VB.NET/C#)",
      "TQC+ 行動裝置應用程式設計(Android)",
      "TQC+ 程式語言(Python)",
      "TQC+ 網頁設計(Dreamweaver)",
      "Flash 動畫設計(Animate)",
      "TQC+ 電腦繪圖設計(Illustrator)",
      "TQC+ 影像處理(Photoshop)",
      "TQC+ 非線性剪輯(Premiere Pro)",
      "中華企業資源規劃學會-智慧企業基礎檢定考試",
      "中華企業資源規劃學會-商用數據應用師",
      "中華企業資源規劃學會-視覺化軟體應用師",
      "AI-900 Microsoft Certified:Azure AI Fundamentals",
      "ICDL Word Processing 文書處理",
      "ICDL Presentation 電腦簡報",
      "ICDL Spreadsheets 電子試算表",
      "ICDL Computing 運算思維與Python 程式設計",
      "財團法人資訊工業策進會生成式AI 能力認證",
      "財團法人資訊工業策進會人工智慧工程素養認證",
    ],
  },
};

export default function CertificatesPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedLevel, setExpandedLevel] = useState<"A" | "B" | "C" | null>(null);

  const filteredData = Object.entries(certificateData).reduce(
    (acc, [key, data]) => {
      const filtered = data.certificates.filter((cert) =>
        cert.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0 || searchTerm === "") {
        acc[key as "A" | "B" | "C"] = { ...data, certificates: filtered };
      }
      return acc;
    },
    {} as typeof certificateData
  );

  const levelLabels = {
    A: { zh: "A級 (困難)", en: "Level A (Difficult)" },
    B: { zh: "B級 (中等)", en: "Level B (Intermediate)" },
    C: { zh: "C級 (簡易)", en: "Level C (Basic)" },
  };

  const levelDescriptions = {
    A: {
      zh: "高難度國際認證與專業認證",
      en: "High-Difficulty International and Professional Certifications",
    },
    B: {
      zh: "中等難度專業技能認證",
      en: "Intermediate-Level Professional Skill Certifications",
    },
    C: {
      zh: "基礎與入門級認證",
      en: "Foundation and Entry-Level Certifications",
    },
  };

  const levelColors = {
    A: "from-red-50 to-red-100 border-red-300",
    B: "from-yellow-50 to-yellow-100 border-yellow-300",
    C: "from-green-50 to-green-100 border-green-300",
  };

  const badgeColors = {
    A: "bg-red-200 text-red-800",
    B: "bg-yellow-200 text-yellow-800",
    C: "bg-green-200 text-green-800",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("專業證照資訊", "Professional Certifications")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t(
              "靜宜大學資訊學院認可之專業證照分級表（114學年度）",
              "Providence University School of Information Approved Professional Certifications (Academic Year 114)"
            )}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder={t("搜尋證照名稱...", "Search certification names...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Certificate Levels */}
        <div className="space-y-6">
          {Object.entries(filteredData).map(([key, data]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${levelColors[key as keyof typeof levelColors]} rounded-lg border-2 shadow-md overflow-hidden`}
            >
              <button
                onClick={() =>
                  setExpandedLevel(expandedLevel === (key as "A" | "B" | "C") ? null : (key as "A" | "B" | "C"))
                }
                className="w-full px-6 py-4 text-left hover:opacity-80 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1 rounded-full font-bold text-white ${badgeColors[key as keyof typeof badgeColors]}`}>
                      {language === "en"
                        ? levelLabels[key as keyof typeof levelLabels].en
                        : levelLabels[key as keyof typeof levelLabels].zh}
                    </span>
                    <p className="text-gray-700 font-semibold">
                      {language === "en"
                        ? levelDescriptions[key as keyof typeof levelDescriptions].en
                        : levelDescriptions[key as keyof typeof levelDescriptions].zh}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      {data.certificates.length} {t("項", "items")}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedLevel === (key as "A" | "B" | "C") ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedLevel === (key as "A" | "B" | "C") && (
                <div className="px-6 py-4 border-t border-gray-300 bg-white bg-opacity-50">
                  <ul className="space-y-2">
                    {data.certificates.map((cert, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 py-1 text-gray-700"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {t("關於證照獎勵", "About Certificate Rewards")}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              {t(
                "學生取得上述任一級別的專業證照，學院將依據《靜宜大學專業證照獎勵辦法》提供獎勵。",
                "Students who obtain any of the above professional certifications will receive rewards according to Providence University's Professional Certificate Reward Regulations."
              )}
            </p>
            <p>
              <strong>{t("獎勵級別：", "Reward Levels:")}</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong>{t("A級證照：", "Level A Certificates:")}</strong>
                {t(
                  "獲得認可的高難度國際認證與專業認證",
                  "Recognized high-difficulty international and professional certifications"
                )}
              </li>
              <li>
                <strong>{t("B級證照：", "Level B Certificates:")}</strong>
                {t(
                  "獲得認可的中等難度專業技能認證",
                  "Recognized intermediate-level professional skill certifications"
                )}
              </li>
              <li>
                <strong>{t("C級證照：", "Level C Certificates:")}</strong>
                {t(
                  "獲得認可的基礎與入門級認證",
                  "Recognized foundation and entry-level certifications"
                )}
              </li>
            </ul>
            <p className="mt-4">
              {t(
                "詳細的獎勵辦法請聯繫學院辦公室或查閱相關規定文件。",
                "For detailed reward regulations, please contact the School office or refer to the relevant regulations."
              )}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
