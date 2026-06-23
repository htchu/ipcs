import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "專任師資 Full-Time Faculty | IPCS",
  description:
    "Full-time faculty of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Faculty = {
  nameZh: string;
  nameEn: string;
  titleZh: string;
  titleEn: string;
  photo: string | null;
  deptZh: string;
  deptEn: string;
  education: { zh: string; en: string }[];
  expertise: { zh: string; en: string }[];
  email: string;
  phone: string;
  website?: string;
};

const faculty: Faculty[] = [
  {
    nameZh: "方百立",
    nameEn: "Fong, Bai-Li",
    titleZh: "副教授",
    titleEn: "Associate Professor",
    photo: "/images/faculty/fong-bai-li.jpg",
    deptZh: "國際資訊學士學位學程（IPCS）",
    deptEn: "International Program in Computer Science",
    education: [
      {
        zh: "博士",
        en: "Ph.D.",
      },
    ],
    expertise: [
      { zh: "物聯網", en: "IoT" },
      { zh: "數據分析", en: "Data Analytics" },
      { zh: "遠距醫療", en: "Telemedicine" },
    ],
    email: "bfong1@pu.edu.tw",
    phone: "04-2632-8001 ext. 18217",
  },
  {
    nameZh: "李冠憬",
    nameEn: "Li, Kuan-Ching",
    titleZh: "特聘教授",
    titleEn: "Distinguished Professor",
    photo: "/images/faculty/li-kuan-ching.jpg",
    deptZh: "資訊工程學系（合聘）",
    deptEn: "Dept. of Computer Science & Information Engineering (Joint Appointment)",
    education: [
      {
        zh: "巴西聖保羅大學 電機工程學系 博士",
        en: "Ph.D., Electrical Engineering, University of São Paulo, Brazil",
      },
    ],
    expertise: [
      { zh: "雲端計算", en: "Cloud Computing" },
      { zh: "GPU 計算", en: "GPU Computing" },
      { zh: "大數據", en: "Big Data" },
      { zh: "平行程式設計", en: "Parallel Programming" },
    ],
    email: "kuancli@pu.edu.tw",
    phone: "04-2632-8001 ext. 18211",
  },
  {
    nameZh: "劉國有",
    nameEn: "Liu, Guo-You",
    titleZh: "教授兼資訊學院院長",
    titleEn: "Professor & Dean of the College of Computing and Informatics",
    photo: "/images/faculty/liu-guo-you.png",
    deptZh: "資訊傳播工程學系（合聘）",
    deptEn: "Dept. of Computer Science & Communication Engineering (Joint Appointment)",
    education: [
      {
        zh: "國立暨南國際大學 資訊工程學系 博士",
        en: "Ph.D., Computer Science and Information Engineering, National Chi Nan University",
      },
    ],
    expertise: [
      { zh: "數位科技與學習", en: "Digital Technology and Learning" },
      { zh: "網頁技術與應用", en: "Web Technologies and Applications" },
      { zh: "AR/VR 應用開發", en: "AR/VR Application Development" },
    ],
    email: "kyliu@pu.edu.tw",
    phone: "04-2632-8001 ext. 18000 / 18308",
  },
  {
    nameZh: "蔡英德",
    nameEn: "Tsai, Ying-De",
    titleZh: "教授兼主任秘書",
    titleEn: "Professor & Director of PUIC",
    photo: "/images/faculty/tsai-ying-de.png",
    deptZh: "資訊傳播工程學系（合聘）",
    deptEn: "Dept. of Computer Science & Communication Engineering (Joint Appointment)",
    education: [
      {
        zh: "國立清華大學 資訊科學研究所 博士",
        en: "Ph.D., Institute of Computer Science, National Tsing Hua University",
      },
    ],
    expertise: [
      { zh: "資訊系統與設計", en: "Information Systems and Design" },
      { zh: "資訊應用", en: "Information Applications" },
      { zh: "演算法", en: "Algorithms" },
    ],
    email: "yttsai@pu.edu.tw",
    phone: "04-2632-8001 ext. 19200 / 18301",
  },
  {
    nameZh: "葉介山",
    nameEn: "Yeh, Jieh-Shan",
    titleZh: "副教授兼電子計算機中心主任",
    titleEn: "Associate Professor & Director, Office of Information Technology",
    photo: null,
    deptZh: "資訊管理學系（合聘）",
    deptEn: "Dept. of Information Management (Joint Appointment)",
    education: [
      {
        zh: "美國俄亥俄州立大學 數學系 博士",
        en: "Ph.D., Department of Mathematics, The Ohio State University, USA",
      },
    ],
    expertise: [
      { zh: "資料探勘", en: "Data Mining" },
      { zh: "數據分析", en: "Data Analysis" },
      { zh: "雲端計算", en: "Cloud Computing" },
      { zh: "資訊安全", en: "Information Security" },
    ],
    email: "jsyeh@pu.edu.tw",
    phone: "04-2632-8001 ext. 18113 / 11700",
  },
  {
    nameZh: "楊孟蒨",
    nameEn: "Yang, Meng-Chien",
    titleZh: "教授",
    titleEn: "Professor",
    photo: "/images/faculty/yang-meng-chien.jpg",
    deptZh: "資訊傳播工程學系（合聘）",
    deptEn: "Dept. of Computer Science & Communication Engineering (Joint Appointment)",
    education: [
      {
        zh: "美國雪城大學 資訊與電腦科學 博士",
        en: "Ph.D., Information and Computer Science, Syracuse University, USA",
      },
    ],
    expertise: [
      { zh: "數位典藏", en: "Digital Archives" },
      { zh: "系統分析", en: "Systems Analysis" },
      { zh: "語意網", en: "Semantic Web" },
      { zh: "台灣原住民語計算", en: "Taiwanese Indigenous Language Computing" },
      { zh: "遊戲式學習", en: "Game-Based Learning" },
    ],
    email: "mcyang2@pu.edu.tw",
    phone: "04-2632-8001 ext. 18303",
  },
  {
    nameZh: "胡學誠",
    nameEn: "Hu, Hsueh-Cheng",
    titleZh: "副教授",
    titleEn: "Associate Professor",
    photo: "/images/faculty/hu-hsueh-cheng.jpg",
    deptZh: "人工智慧應用學系（合聘）",
    deptEn: "Dept. of Applied Artificial Intelligence (Joint Appointment)",
    education: [
      {
        zh: "美國德州農工大學 計算機科學 博士",
        en: "Ph.D., Computer Science, Texas A&M University, USA",
      },
    ],
    expertise: [
      { zh: "雲端運算", en: "Cloud Computing" },
      { zh: "數位學習系統", en: "Digital Learning Systems" },
      { zh: "Web 技術", en: "Web Technology" },
      { zh: "電子商務", en: "E-Commerce" },
    ],
    email: "schu@pu.edu.tw",
    phone: "04-2632-8001 ext. 18304",
  },
  {
    nameZh: "余瑞琳",
    nameEn: "Yu, Jui-Ling",
    titleZh: "教授",
    titleEn: "Professor",
    photo: "/images/faculty/yu-jui-ling.jpg",
    deptZh: "資料科學暨大數據分析與應用學系（合聘）",
    deptEn: "Dept. of Data Science and Big Data Analytics (Joint Appointment)",
    education: [
      {
        zh: "美國密西根州立大學 應用數學 博士",
        en: "Ph.D., Applied Mathematics, Michigan State University, USA",
      },
    ],
    expertise: [
      { zh: "生物數學建模分析", en: "Biomathematical Modeling and Analysis" },
      { zh: "人工智慧", en: "Artificial Intelligence" },
      { zh: "數值分析", en: "Numerical Analysis" },
    ],
    email: "jlyu@pu.edu.tw",
    phone: "04-2632-8001 ext. 18507",
  },
];

/* ── component ── */

export default function FullTimeFacultyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">專任師資</h1>
      <p className="text-lg text-gray-500 mb-10">Full-Time Faculty</p>

      <div className="space-y-8">
        {faculty.map((f) => (
          <section
            key={f.email}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-48 shrink-0 p-5 flex justify-center items-start">
                {f.photo ? (
                  <Image
                    src={f.photo}
                    alt={`${f.nameZh} ${f.nameEn}`}
                    width={160}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-40 h-50 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-4xl">
                    👤
                  </div>
                )}
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
                  {f.website && (
                    <li className="flex items-center gap-2">
                      <span>🌐</span>
                      <Link
                        href={f.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {f.website}
                      </Link>
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
