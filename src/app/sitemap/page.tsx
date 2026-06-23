import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "網站導覽 Sitemap | IPCS",
  description:
    "Sitemap of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type SitemapSection = {
  zh: string;
  en: string;
  href: string;
  children?: { zh: string; en: string; href: string }[];
};

const sections: SitemapSection[] = [
  {
    zh: "首頁",
    en: "Home",
    href: "/",
  },
  {
    zh: "關於學程",
    en: "About IPCS",
    href: "/about",
    children: [
      { zh: "簡介", en: "Introduction", href: "/about" },
      { zh: "教育目標及核心能力", en: "Educational Objectives", href: "/about/objectives" },
    ],
  },
  {
    zh: "學程師資",
    en: "Faculty",
    href: "/faculty/director",
    children: [
      { zh: "學程主任", en: "Program Director", href: "/faculty/director" },
      { zh: "專任師資", en: "Full-Time Faculty", href: "/faculty/full-time" },
      { zh: "兼任師資", en: "Adjunct Faculty", href: "/faculty/adjunct" },
    ],
  },
  {
    zh: "課程資訊",
    en: "Curriculum",
    href: "/curriculum",
  },
  {
    zh: "入學申請",
    en: "Admission",
    href: "/admission",
  },
  {
    zh: "獎助學金",
    en: "Scholarship",
    href: "/scholarship",
  },
  {
    zh: "表單下載",
    en: "Forms",
    href: "/forms",
  },
  {
    zh: "法令規章",
    en: "Regulations",
    href: "/regulations",
  },
  {
    zh: "畢業專題",
    en: "Capstone Projects",
    href: "/projects",
  },
  {
    zh: "資訊教育認證",
    en: "IEET CAC Accreditation",
    href: "/accreditation",
  },
  {
    zh: "聯絡我們",
    en: "Contact",
    href: "/contact",
  },
];

/* ── component ── */

export default function SitemapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">網站導覽</h1>
      <p className="text-lg text-gray-500 mb-10">Sitemap</p>

      <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5">
          <ul className="space-y-4">
            {sections.map((s) => (
              <li key={s.href + s.zh}>
                <Link
                  href={s.href}
                  className="text-base font-medium text-primary hover:underline"
                >
                  {s.zh}
                  <span className="text-sm text-gray-500 ml-2">{s.en}</span>
                </Link>

                {s.children && (
                  <ul className="mt-2 ml-6 space-y-2">
                    {s.children.map((c) => (
                      <li key={c.href + c.zh}>
                        <Link
                          href={c.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {c.zh}
                          <span className="text-xs text-gray-500 ml-2">
                            {c.en}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
