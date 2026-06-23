import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "法令規章 Regulations | IPCS",
  description:
    "Regulations and bylaws of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Regulation = {
  zh: string;
  en: string;
  href: string;
};

const regulations: Regulation[] = [
  {
    zh: "組織章程",
    en: "Organizational Charter",
    href: "/docs/regulations/organizational-charter.pdf",
  },
  {
    zh: "學程事務發展委員會設置辦法",
    en: "Regulations for the Program Affairs Development Committee",
    href: "/docs/regulations/program-affairs-development-committee.pdf",
  },
  {
    zh: "課程委員會設置辦法",
    en: "Regulations for the Curriculum Committee",
    href: "/docs/regulations/curriculum-committee.pdf",
  },
  {
    zh: "招生委員會設置辦法",
    en: "Regulations for the Admissions Committee",
    href: "/docs/regulations/admissions-committee.pdf",
  },
  {
    zh: "教師評審委員會設置辦法",
    en: "Regulations for the Faculty Review Committee",
    href: "/docs/regulations/faculty-review-committee.pdf",
  },
  {
    zh: "教師聘任與升等辦法",
    en: "Regulations for Faculty Appointment and Promotion",
    href: "/docs/regulations/faculty-appointment-promotion.pdf",
  },
  {
    zh: "教師評鑑實施要點",
    en: "Guidelines for Faculty Evaluation",
    href: "/docs/regulations/faculty-evaluation-guidelines.pdf",
  },
  {
    zh: "教學優良教師遴選辦法",
    en: "Regulations for Outstanding Teaching Award Selection",
    href: "/docs/regulations/outstanding-teaching-award.pdf",
  },
  {
    zh: "績優導師遴選辦法",
    en: "Regulations for Outstanding Advisor Award Selection",
    href: "/docs/regulations/outstanding-advisor-award.pdf",
  },
  {
    zh: "工程及科技教育認證小組設置辦法",
    en: "Regulations for the Engineering and Technology Education Accreditation Committee",
    href: "/docs/regulations/engineering-accreditation-committee.pdf",
  },
  {
    zh: "經費設備與空間委員會設置辦法",
    en: "Regulations for the Budget, Facilities and Space Committee",
    href: "/docs/regulations/budget-facilities-committee.pdf",
  },
  {
    zh: "諮詢委員會設置辦法",
    en: "Regulations for the Advisory Committee",
    href: "/docs/regulations/advisory-committee.pdf",
  },
];

/* ── component ── */

export default function RegulationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">法令規章</h1>
      <p className="text-lg text-gray-500 mb-10">Regulations</p>

      <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📜</span>
            系務規章
          </h2>
          <p className="text-sm text-gray-500 ml-11">
            Program Bylaws and Regulations
          </p>
        </div>

        <div className="px-6 py-5">
          <ul className="space-y-3">
            {regulations.map((r, i) => (
              <li key={i}>
                <Link
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
                >
                  <span className="shrink-0 text-red-500 text-lg">PDF</span>
                  <span>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      {r.zh}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {r.en}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
