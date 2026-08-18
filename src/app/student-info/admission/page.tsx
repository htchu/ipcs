import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "入學申請 Admission | IPCS",
  description:
    "Admission pathways for the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type LinkItem = { zh: string; en: string; href: string };

const pathways: {
  id: string;
  icon: string;
  zh: string;
  en: string;
  descZh: string;
  descEn: string;
  links: LinkItem[];
}[] = [
  {
    id: "degree",
    icon: "🎓",
    zh: "學位生申請",
    en: "Degree-Seeking Student Application",
    descZh:
      "外國學生、僑生、港澳生正式學籍生申請入學相關規定。",
    descEn:
      "Regulations for international students, overseas Chinese students, and Hong Kong/Macau students applying for formal degree programs.",
    links: [
      {
        zh: "僑外陸生申請入學（國際暨兩岸事務處）",
        en: "Overseas / International Student Admission (OIA)",
        href: "https://oia.pu.edu.tw/p/426-1048-11.php",
      },
      {
        zh: "外國學生（學、碩、博士班、轉學生）招生組",
        en: "International Students (Bachelor, Master, PhD, Transfer) — Admissions Office",
        href: "https://adms.pu.edu.tw/",
      },
      {
        zh: "法規與辦法 — 國際學生組相關法規（含《靜宜大學外國學生入學招生規定》）",
        en: "Regulations — International Student Division (incl. PU International Student Admission Regulations)",
        href: "https://oia.pu.edu.tw/p/403-1048-389-1.php",
      },
    ],
  },
  {
    id: "exchange",
    icon: "🌍",
    zh: "交換生 / 雙聯學位",
    en: "Exchange Students / Dual Degree",
    descZh:
      "短期交換生入學管道及雙聯學位合作校資訊。",
    descEn:
      "Information on short-term exchange student admission and dual degree partner universities.",
    links: [
      {
        zh: "陸外籍交換生（Incoming Exchange）",
        en: "Incoming Exchange Students",
        href: "https://oia.pu.edu.tw/p/426-1048-14.php",
      },
      {
        zh: "交換生相關辦法",
        en: "Exchange Student Regulations",
        href: "https://oia.pu.edu.tw/p/403-1048-445.php",
      },
      {
        zh: "姊妹校列表（雙聯 / 交換合作校）",
        en: "Partner Universities (Dual Degree / Exchange)",
        href: "https://oia.pu.edu.tw/p/426-1048-10.php",
      },
      {
        zh: "出國研修生（交換出國規定）",
        en: "Outbound Exchange Students (Study Abroad Regulations)",
        href: "https://oia.pu.edu.tw/p/426-1048-15.php",
      },
      {
        zh: "411 遊留學中心",
        en: "411 Study Abroad Center",
        href: "https://411.pu.edu.tw/p/426-1073-34.php",
      },
    ],
  },
];

/* ── component ── */

export default function AdmissionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">入學申請</h1>
      <p className="text-lg text-gray-500 mb-10">Admission</p>

      <div className="space-y-10">
        {pathways.map((p) => (
          <section
            key={p.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-2xl">{p.icon}</span>
                {p.zh}
              </h2>
              <p className="text-sm text-gray-500 ml-11">{p.en}</p>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <p className="text-gray-700 mb-1">{p.descZh}</p>
              <p className="text-sm text-gray-500 mb-5">{p.descEn}</p>

              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                相關連結 Related Links
              </h3>
              <ul className="space-y-3">
                {p.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
                    >
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        {link.zh}
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5">
                        {link.en}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
