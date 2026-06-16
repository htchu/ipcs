"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "news",
    label: "最新消息",
    labelEn: "Latest News",
    items: [
      { date: "2025-10-21", title: "工讀資訊公告 Part-time Job Information", href: "#" },
      { date: "2025-10-20", title: "期中輔導餐敘 Midterm Counseling Luncheon", href: "#" },
      { date: "2025-10-13", title: "新加坡共和理工學院蒞校參訪 Visit from Republic Polytechnic, Singapore", href: "#" },
      { date: "2025-04-18", title: "實習資訊公告 Internship Information", href: "#" },
      { date: "2025-01-15", title: "畢業專題成果展 Senior Capstone Exhibition", href: "#" },
    ],
  },
  {
    id: "events",
    label: "活動花絮",
    labelEn: "Activities",
    items: [
      { date: "2025-10-13", title: "國際文化交流日 International Culture Day", href: "#" },
      { date: "2025-09-15", title: "新生歡迎會 New Student Welcome Party", href: "#" },
      { date: "2025-06-20", title: "畢業典禮 Graduation Ceremony", href: "#" },
      { date: "2025-05-10", title: "校外教學參訪 Field Trip", href: "#" },
    ],
  },
  {
    id: "lectures",
    label: "專題講座",
    labelEn: "Lectures",
    items: [
      { date: "2025-10-05", title: "AI 與未來趨勢 AI and Future Trends", href: "#" },
      { date: "2025-09-20", title: "雲端運算實務 Cloud Computing in Practice", href: "#" },
      { date: "2025-08-15", title: "資安攻防實戰 Cybersecurity Workshop", href: "#" },
    ],
  },
];

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState("news");

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          最新消息
        </h2>
        <p className="text-center text-gray-500 mb-8">News & Events</p>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "tab-active"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {tab.label}
              <span className="hidden sm:inline text-xs text-gray-400 ml-1">
                {tab.labelEn}
              </span>
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="space-y-0">
          {currentTab.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-start gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 px-4 -mx-4 rounded transition group"
            >
              <span className="text-sm text-gray-400 shrink-0 mt-0.5 w-24">
                {item.date}
              </span>
              <span className="text-gray-700 group-hover:text-primary transition">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/news"
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            查看更多 View All
          </Link>
        </div>
      </div>
    </section>
  );
}
