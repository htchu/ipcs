import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "獎助學金 Scholarship | IPCS",
  description:
    "Scholarship information for the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Scholarship = {
  zh: string;
  en: string;
  semester: "both" | "fall" | "spring";
};

const scholarships: Scholarship[] = [
  /* ── 上下學期皆可申請 Both semesters ── */
  {
    zh: "傳端教育獎學金",
    en: "Chuanduan Education Scholarship",
    semester: "both",
  },
  {
    zh: "立清企業清寒獎學金",
    en: "Liqing Enterprise Financial Hardship Scholarship",
    semester: "both",
  },
  {
    zh: "李維紘校友清寒獎學金",
    en: "Li Wei-Hong Alumni Financial Hardship Scholarship",
    semester: "both",
  },
  {
    zh: "邢祖援將軍及夫人戴湛然女士紀念獎學金",
    en: "General Xing Zu-Yuan & Mrs. Dai Zhan-Ran Memorial Scholarship",
    semester: "both",
  },

  /* ── 上學期 Fall semester ── */
  {
    zh: "計道蓁校友紀念獎學金",
    en: "Ji Dao-Zhen Alumni Memorial Scholarship",
    semester: "fall",
  },
  {
    zh: "陳淑珠校友清寒獎學金",
    en: "Chen Shu-Zhu Alumni Financial Hardship Scholarship",
    semester: "fall",
  },
  {
    zh: "黃順顯校友紀念獎學金",
    en: "Huang Shun-Xian Alumni Memorial Scholarship",
    semester: "fall",
  },
  {
    zh: "鍾宛貞校友清寒獎學金",
    en: "Zhong Wan-Zhen Alumni Financial Hardship Scholarship",
    semester: "fall",
  },
  {
    zh: "鍾宛貞校友身心障礙獎學金",
    en: "Zhong Wan-Zhen Alumni Disability Scholarship",
    semester: "fall",
  },

  /* ── 下學期 Spring semester ── */
  {
    zh: "校友會九大獎學金",
    en: "Nine Major Alumni Association Scholarships",
    semester: "spring",
  },
  {
    zh: "楊明綉女士紀念獎學金",
    en: "Yang Ming-Xiu Memorial Scholarship",
    semester: "spring",
  },
  {
    zh: "邱漢源、邱傅秋香敦品勵學及熱心服務清寒獎學金",
    en: "Qiu Han-Yuan & Qiu Fu Qiu-Xiang Hardship Scholarship for Academic Excellence and Community Service",
    semester: "spring",
  },
  {
    zh: "陳淑珠校友創業獎學金",
    en: "Chen Shu-Zhu Alumni Entrepreneurship Scholarship",
    semester: "spring",
  },
];

const semesterLabel: Record<Scholarship["semester"], { zh: string; en: string }> = {
  both: { zh: "上下學期皆可申請", en: "Both Semesters" },
  fall: { zh: "上學期", en: "Fall Semester" },
  spring: { zh: "下學期", en: "Spring Semester" },
};

const semesterIcon: Record<Scholarship["semester"], string> = {
  both: "📅",
  fall: "🍂",
  spring: "🌸",
};

const semesters: Scholarship["semester"][] = ["both", "fall", "spring"];

/* ── component ── */

export default function ScholarshipPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">獎助學金</h1>
      <p className="text-lg text-gray-500 mb-10">Scholarship</p>

      {/* ── How to Apply ── */}
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-10">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            申請方式
          </h2>
          <p className="text-sm text-gray-500 ml-11">How to Apply</p>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <p className="text-gray-700 mb-1">
              請至「E 校園服務網 — 獎學金申請系統」查詢各獎學金申請資格與條件，符合資格者請於線上完成申請，並將紙本資料繳交至校友聯絡暨社會資源處（聖功樓 422 室）。線上申請與紙本資料皆須完成，始完成申請程序。
            </p>
            <p className="text-sm text-gray-500">
              Please visit the &quot;E-Campus Service Network — Scholarship Application System&quot; to review eligibility requirements. Eligible students should complete the online application and submit physical documents to the Alumni Services and Social Connection Center (Room 422, Sheng-Gong Building). Both online submission and document delivery are required to complete the application.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-md px-4 py-3">
            <p className="text-sm text-gray-700 mb-1">
              💡 申請多項獎學金時，成績單與低收入戶證明等文件可共用同一份正本。有申請，有機會！
            </p>
            <p className="text-xs text-gray-500">
              When applying for multiple scholarships, official transcripts and financial documents can be shared across applications. Apply and you may have a chance!
            </p>
          </div>

          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            相關連結 Related Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://mypu.pu.edu.tw/grants_query/Scholarships_list.php"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
              >
                <span className="text-sm font-medium text-primary group-hover:underline">
                  E 校園服務網 — 獎學金申請系統
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  E-Campus Service Network — Scholarship Application System
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://alumni.pu.edu.tw/p/412-1104-1588.php?Lang=zh-tw"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
              >
                <span className="text-sm font-medium text-primary group-hover:underline">
                  校友聯絡暨社會資源處 — 獎助學金列表
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  Alumni Services Center — Full Scholarship List
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Scholarship List ── */}
      <div className="space-y-10">
        {semesters.map((sem) => {
          const items = scholarships.filter((s) => s.semester === sem);
          const label = semesterLabel[sem];
          const icon = semesterIcon[sem];
          return (
            <section
              key={sem}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  {label.zh}
                </h2>
                <p className="text-sm text-gray-500 ml-11">{label.en}</p>
              </div>

              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {items.map((s, i) => (
                    <li
                      key={i}
                      className="rounded-md border border-gray-100 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-gray-800">
                        {s.zh}
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5">
                        {s.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Contact ── */}
      <section className="mt-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📞</span>
            聯絡資訊
          </h2>
          <p className="text-sm text-gray-500 ml-11">Contact Information</p>
        </div>

        <div className="px-6 py-5">
          <p className="text-gray-700 mb-1">
            校友聯絡暨社會資源處（聖功樓 422 室）
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Alumni Services and Social Connection Center (Room 422, Sheng-Gong Building)
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              📧 Email：
              <Link
                href="mailto:pu10440@pu.edu.tw"
                className="text-primary hover:underline"
              >
                pu10440@pu.edu.tw
              </Link>
            </li>
            <li>📞 Tel：04-2632-8001 ext. 11070–11074</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
