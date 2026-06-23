import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "兼任師資 Adjunct Faculty | IPCS",
  description:
    "Adjunct faculty of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Faculty = {
  nameZh: string;
  nameEn: string;
  titleZh: string;
  titleEn: string;
  photo: string;
  deptZh: string;
  deptEn: string;
  education: { zh: string; en: string }[];
  expertise: { zh: string; en: string }[];
  email: string;
  phone: string;
  office?: string;
};

const faculty: Faculty[] = [
  {
    nameZh: "翁添雄",
    nameEn: "Weng, Tian-Hsiung",
    titleZh: "教授",
    titleEn: "Professor",
    photo: "/images/faculty/weng-tian-hsiung.jpg",
    deptZh: "資訊工程學系",
    deptEn: "Dept. of Computer Science & Information Engineering",
    education: [
      {
        zh: "美國休士頓大學 資訊科學 博士",
        en: "Ph.D., Computer Science, University of Houston, USA",
      },
    ],
    expertise: [
      { zh: "編譯器設計與最佳化", en: "Compiler Design and Optimization" },
      { zh: "平行計算", en: "Parallel Computing" },
      { zh: "分散式處理", en: "Distributed Processing" },
      { zh: "計算機結構", en: "Computer Architecture" },
    ],
    email: "thweng@pu.edu.tw",
    phone: "04-2632-8001 ext. 18204",
    office: "主顧樓 501",
  },
];

/* ── component ── */

export default function AdjunctFacultyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">兼任師資</h1>
      <p className="text-lg text-gray-500 mb-10">Adjunct Faculty</p>

      <div className="space-y-8">
        {faculty.map((f) => (
          <section
            key={f.email}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-48 shrink-0 p-5 flex justify-center items-start">
                <Image
                  src={f.photo}
                  alt={`${f.nameZh} ${f.nameEn}`}
                  width={160}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5 md:pl-0 flex-1">
                <h2 className="text-xl font-bold text-gray-800">
                  {f.nameZh}
                </h2>
                <p className="text-base text-gray-500">{f.nameEn}</p>
                <p className="text-sm font-medium text-primary mt-1">
                  {f.titleZh}
                </p>
                <p className="text-xs text-gray-500">{f.titleEn}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {f.deptZh}
                  <span className="block">{f.deptEn}</span>
                </p>

                {/* Contact */}
                <ul className="text-sm text-gray-600 mt-3 space-y-1">
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <Link
                      href={`mailto:${f.email}`}
                      className="text-primary hover:underline"
                    >
                      {f.email}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    {f.phone}
                  </li>
                  {f.office && (
                    <li className="flex items-center gap-2">
                      <span>🏢</span>
                      {f.office}
                    </li>
                  )}
                </ul>

                {/* Education */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    學歷 Education
                  </h3>
                  <ul className="space-y-1">
                    {f.education.map((edu, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        {edu.zh}
                        <span className="block text-xs text-gray-500">
                          {edu.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    研究專長 Research Expertise
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {f.expertise.map((item, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium"
                      >
                        {item.zh}
                        <span className="text-primary/70 ml-1">{item.en}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
