"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    label: "關於學程",
    labelEn: "About IPCS",
    href: "/about",
    children: [
      { label: "簡介", labelEn: "Introduction", href: "/about" },
      {
        label: "教育目標及核心能力",
        labelEn: "Educational Objectives",
        href: "/about/objectives",
      },
    ],
  },
  {
    label: "學程師資",
    labelEn: "Faculty",
    href: "/faculty",
    children: [
      {
        label: "學程主任",
        labelEn: "Program Director",
        href: "/faculty/director",
      },
      {
        label: "專任師資",
        labelEn: "Full-Time Faculty",
        href: "/faculty/full-time",
      },
      {
        label: "兼任師資",
        labelEn: "Adjunct Faculty",
        href: "/faculty/adjunct",
      },
    ],
  },
  {
    label: "課程資訊",
    labelEn: "Curriculum",
    href: "/curriculum",
  },
  {
    label: "入學申請",
    labelEn: "Admission",
    href: "/admission",
  },
  {
    label: "獎助學金",
    labelEn: "Scholarship",
    href: "/scholarship",
  },
  {
    label: "表單下載",
    labelEn: "Forms",
    href: "/forms",
  },
  {
    label: "法令規章",
    labelEn: "Regulations",
    href: "/regulations",
  },
  {
    label: "資訊教育認證",
    labelEn: "IEET CAC Accreditation",
    href: "/accreditation",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9">
          <div className="flex gap-4">
            <Link href="/" className="hover:text-accent transition">
              首頁 Home
            </Link>
            <a
              href="https://www.pu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              校首頁
            </a>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-accent transition">
              聯絡我們 Contact
            </Link>
            <Link href="/sitemap" className="hover:text-accent transition">
              網站導覽 Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              IPCS
            </div>
            <div className="leading-tight">
              <div className="text-primary font-bold text-lg">
                國際資訊學士學位學程
              </div>
              <div className="text-primary-light text-xs tracking-wide">
                International Program in Computer Science
              </div>
              <div className="text-gray-400 text-xs">靜宜大學 Providence University</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.href} className="nav-item relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition flex items-center gap-1"
                >
                  <span>
                    {item.label}
                    <span className="block text-xs text-gray-400 leading-tight">
                      {item.labelEn}
                    </span>
                  </span>
                  {item.children && (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="dropdown-menu hidden absolute top-full left-0 bg-white shadow-lg rounded-md py-1 min-w-[200px] border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary hover:text-white transition"
                      >
                        {child.label}
                        <span className="block text-xs opacity-70">
                          {child.labelEn}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          {menuItems.map((item) => (
            <div key={item.href} className="border-b border-gray-100">
              <button
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 flex justify-between items-center"
                onClick={() => {
                  if (item.children) {
                    setOpenSub(openSub === item.href ? null : item.href);
                  } else {
                    setMobileOpen(false);
                  }
                }}
              >
                <span>
                  {item.label}{" "}
                  <span className="text-xs text-gray-400">{item.labelEn}</span>
                </span>
                {item.children && (
                  <svg
                    className={`w-4 h-4 transition ${openSub === item.href ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {item.children && openSub === item.href && (
                <div className="bg-gray-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}{" "}
                      <span className="text-xs text-gray-400">
                        {child.labelEn}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
