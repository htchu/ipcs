import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "學程主任 Program Director | IPCS",
  description:
    "Program Director of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

const director = {
  nameZh: "朱學亭",
  nameEn: "Hsueh-Ting Chu",
  titleZh: "學程主任 / 資訊工程學系合聘教師",
  titleEn: "Program Director / Joint Appointment, Dept. of Computer Science and Information Engineering",
  photo: "/images/faculty/chu-hsueh-ting.jpg",
  email: "htchu2@pu.edu.tw",
  phone: "04-2632-8001 ext. 18216",
  website: "https://www.aiplab.tw/",
  education: [
    {
      zh: "美國愛荷華大學 電機與計算機工程學系 博士",
      en: "Ph.D., Electrical and Computer Engineering, University of Iowa, USA",
    },
    {
      zh: "國立成功大學 資訊工程學系 碩士",
      en: "M.S., Computer Science and Information Engineering, National Cheng Kung University",
    },
    {
      zh: "靜宜大學 資訊管理學系 學士",
      en: "B.S., Information Management, Providence University",
    },
  ],
  expertise: [
    { zh: "雲端計算", en: "Cloud Computing" },
    { zh: "人工智慧", en: "Artificial Intelligence" },
    { zh: "大數據分析", en: "Big Data Analytics" },
    { zh: "智慧醫療", en: "Smart Healthcare" },
    { zh: "數位學習", en: "Digital Learning" },
    { zh: "生物資訊", en: "Bioinformatics" },
  ],
};

/* ── component ── */

export default function DirectorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">學程主任</h1>
      <p className="text-lg text-gray-500 mb-10">Program Director</p>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Profile header */}
        <div className="md:flex">
          <div className="md:w-64 shrink-0 p-6 flex justify-center">
            <Image
              src={director.photo}
              alt={`${director.nameZh} ${director.nameEn}`}
              width={200}
              height={260}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="p-6 md:pl-0">
            <h2 className="text-2xl font-bold text-gray-800">
              {director.nameZh}
            </h2>
            <p className="text-lg text-gray-500 mb-3">{director.nameEn}</p>
            <p className="text-sm font-medium text-primary mb-1">
              {director.titleZh}
            </p>
            <p className="text-xs text-gray-500 mb-5">{director.titleEn}</p>

            {/* Contact */}
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <Link
                  href={`mailto:${director.email}`}
                  className="text-primary hover:underline"
                >
                  {director.email}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                {director.phone}
              </li>
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <Link
                  href={director.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {director.website}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="border-t border-gray-200 px-6 py-5">
          <h3 className="text-lg font-bold text-gray-800 mb-1">學歷</h3>
          <p className="text-sm text-gray-500 mb-4">Education</p>
          <ul className="space-y-3">
            {director.education.map((edu, i) => (
              <li
                key={i}
                className="rounded-md border border-gray-100 px-4 py-3"
              >
                <span className="text-sm font-medium text-gray-800">
                  {edu.zh}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  {edu.en}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Research expertise */}
        <div className="border-t border-gray-200 px-6 py-5">
          <h3 className="text-lg font-bold text-gray-800 mb-1">研究專長</h3>
          <p className="text-sm text-gray-500 mb-4">Research Expertise</p>
          <div className="flex flex-wrap gap-2">
            {director.expertise.map((item, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-medium"
              >
                {item.zh}
                <span className="text-xs text-primary/70 ml-1">
                  {item.en}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
