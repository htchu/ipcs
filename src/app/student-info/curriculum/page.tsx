import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "課程資訊 Curriculum | IPCS",
  description:
    "Curriculum information for the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Course = { zh: string; en: string; credits: number };

const required: { year: number; semester: string; semesterEn: string; courses: Course[] }[] = [
  {
    year: 1,
    semester: "上學期",
    semesterEn: "Fall",
    courses: [
      { zh: "線性代數", en: "Linear Algebra", credits: 3 },
      { zh: "計算機概論（一）", en: "Introduction to Computer Science (I)", credits: 2 },
      { zh: "程式設計", en: "Programming", credits: 3 },
    ],
  },
  {
    year: 1,
    semester: "下學期",
    semesterEn: "Spring",
    courses: [
      { zh: "資訊數學", en: "Information Mathematics", credits: 3 },
      { zh: "離散數學", en: "Discrete Mathematics", credits: 3 },
      { zh: "計算機概論（二）", en: "Introduction to Computer Science (II)", credits: 2 },
      { zh: "進階程式設計", en: "Advanced Programming", credits: 3 },
    ],
  },
  {
    year: 2,
    semester: "上學期",
    semesterEn: "Fall",
    courses: [
      { zh: "資料結構", en: "Data Structures", credits: 3 },
      { zh: "網路通訊概論", en: "Introduction to Network Communications", credits: 3 },
    ],
  },
  {
    year: 2,
    semester: "下學期",
    semesterEn: "Spring",
    courses: [
      { zh: "作業系統", en: "Operating Systems", credits: 3 },
      { zh: "演算法概論", en: "Introduction to Algorithms", credits: 3 },
    ],
  },
  {
    year: 3,
    semester: "上學期",
    semesterEn: "Fall",
    courses: [
      { zh: "專案實作（一）", en: "Project Implementation (I)", credits: 2 },
    ],
  },
  {
    year: 3,
    semester: "下學期",
    semesterEn: "Spring",
    courses: [
      { zh: "專案實作（二）", en: "Project Implementation (II)", credits: 2 },
    ],
  },
];

const electives: Course[] = [
  { zh: "邏輯設計", en: "Logic Design", credits: 3 },
  { zh: "程式語言", en: "Programming Languages", credits: 3 },
  { zh: "網頁設計", en: "Web Design", credits: 3 },
  { zh: "IC 設計簡介", en: "Introduction to IC Design", credits: 3 },
  { zh: "UNIX 實作", en: "UNIX Lab", credits: 3 },
  { zh: "機率與統計", en: "Probability and Statistics", credits: 3 },
  { zh: "物聯網互動設計入門", en: "Introduction to IoT Interactive Design", credits: 3 },
  { zh: "資料庫管理", en: "Database Management", credits: 3 },
  { zh: "網路程式設計", en: "Network Programming", credits: 3 },
  { zh: "IC 設計實作", en: "IC Design Lab", credits: 3 },
  { zh: "系統分析與設計", en: "System Analysis and Design", credits: 3 },
  { zh: "網路系統規劃與管理", en: "Network System Planning and Management", credits: 3 },
  { zh: "影像處理", en: "Image Processing", credits: 3 },
  { zh: "雲端與通訊網路", en: "Cloud and Communication Networks", credits: 3 },
  { zh: "資訊安全", en: "Information Security", credits: 3 },
  { zh: "安全程式設計", en: "Secure Programming", credits: 3 },
  { zh: "網路安全", en: "Network Security", credits: 3 },
  { zh: "深度學習", en: "Deep Learning", credits: 3 },
  { zh: "人工智慧", en: "Artificial Intelligence", credits: 3 },
  { zh: "進階深度學習", en: "Advanced Deep Learning", credits: 3 },
  { zh: "大數據分析", en: "Big Data Analytics", credits: 3 },
  { zh: "平行計算", en: "Parallel Computing", credits: 3 },
  { zh: "企業實習（一）", en: "Corporate Internship (I)", credits: 3 },
  { zh: "企業實習（四）", en: "Corporate Internship (IV)", credits: 6 },
];

const chinese: {
  category: string;
  categoryEn: string;
  note: string;
  noteEn: string;
  courses: Course[];
}[] = [
  {
    category: "初級華語課程",
    categoryEn: "Basic Chinese Courses",
    note: "限外籍生修習，未具基礎華語程度之學生可修習。",
    noteEn: "For foreign students only. Students who have not reached basic Chinese level can take these courses.",
    courses: [
      { zh: "初級華語閱讀與書寫（一）", en: "Basic Chinese Reading & Writing (I)", credits: 2 },
      { zh: "初級華語聽力與口說（一）", en: "Basic Chinese Listening & Speaking (I)", credits: 2 },
      { zh: "初級華語閱讀與書寫（二）", en: "Basic Chinese Reading & Writing (II)", credits: 2 },
      { zh: "初級華語聽力與口說（二）", en: "Basic Chinese Listening & Speaking (II)", credits: 2 },
    ],
  },
  {
    category: "進階華語課程",
    categoryEn: "Intermediate Chinese Courses",
    note: "限外籍生修習，具 A2（含）以上華語程度之學生可修習。",
    noteEn: "For foreign students only. Students with A2 level or above in Chinese can take these courses.",
    courses: [
      { zh: "進階華語（一）", en: "Intermediate Chinese (I)", credits: 4 },
      { zh: "進階華語（二）", en: "Intermediate Chinese (II)", credits: 4 },
    ],
  },
  {
    category: "高階華語課程",
    categoryEn: "Advanced Chinese Courses",
    note: "限外籍生修習，具 B1（含）以上華語程度者建議修習。",
    noteEn: "For foreign students only. Students with B1 level or above in Chinese are recommended to take these courses.",
    courses: [
      { zh: "高階華語（一）", en: "Advanced Chinese (I)", credits: 4 },
      { zh: "高階華語（二）", en: "Advanced Chinese (II)", credits: 4 },
    ],
  },
];

const general: Course[] = [
  { zh: "英文（一）", en: "Freshman English (I)", credits: 2 },
  { zh: "英文（二）", en: "Freshman English (II)", credits: 2 },
  { zh: "閱讀與書寫（一）", en: "Reading and Writing (I)", credits: 2 },
  { zh: "閱讀與書寫（二）", en: "Reading and Writing (II)", credits: 2 },
  { zh: "通識涵養課程（共 16 學分）", en: "General Education Courses (16 credits total)", credits: 16 },
  { zh: "運動健康與素養（基礎體育）", en: "Sports Health & Literacy (Basic PE)", credits: 1 },
  { zh: "運動技能與涵養（初級專項）", en: "Sports Skills & Cultivation (Beginner)", credits: 1 },
  { zh: "人文素養", en: "Humanistic Literacy", credits: 0 },
];

/* ── component ── */

function CourseTable({ courses }: { courses: Course[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border border-gray-200">課程 Course</th>
            <th className="px-4 py-2 border border-gray-200 w-24 text-center">
              學分 Credits
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">
                <span className="text-gray-800">{c.zh}</span>
                <span className="block text-xs text-gray-500">{c.en}</span>
              </td>
              <td className="px-4 py-2 border border-gray-200 text-center text-gray-700">
                {c.credits}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CurriculumPage() {
  const totalRequired = required.reduce(
    (sum, g) => sum + g.courses.reduce((s, c) => s + c.credits, 0),
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">課程資訊</h1>
      <p className="text-lg text-gray-500 mb-4">Curriculum</p>

      {/* Graduation summary */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-10">
        <p className="text-gray-800 font-medium">
          畢業總學分要求：<span className="text-primary font-bold">128 學分</span>
        </p>
        <p className="text-sm text-gray-500">
          Total credits required for graduation:{" "}
          <span className="font-semibold">128 credits</span>
        </p>
      </div>

      {/* Required courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          專業必修課程
        </h2>
        <p className="text-base text-gray-500 mb-2">
          Required Courses ({totalRequired} credits)
        </p>
        <p className="text-sm text-gray-500 mb-6">
          所有課程必須通過。All courses must be passed.
        </p>

        <div className="space-y-6">
          {required.map((group, gi) => (
            <div key={gi}>
              <h3 className="font-semibold text-gray-700 mb-2">
                第 {group.year} 學年 {group.semester}{" "}
                <span className="text-gray-400 font-normal text-sm">
                  Year {group.year} {group.semesterEn}
                </span>
              </h3>
              <CourseTable courses={group.courses} />
            </div>
          ))}
        </div>
      </section>

      {/* Elective courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          專業選修課程
        </h2>
        <p className="text-base text-gray-500 mb-2">Elective Courses</p>
        <p className="text-sm text-gray-500 mb-6">
          依每學期開課表選修。Elective courses vary depending on the semester.
        </p>
        <CourseTable courses={electives} />
      </section>

      {/* General education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">校訂課程</h2>
        <p className="text-base text-gray-500 mb-6">
          General Education &amp; University Requirements
        </p>
        <CourseTable courses={general} />

        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600 space-y-2">
          <p>
            <strong>通識涵養課程</strong>共分四大向度，應修得 16 學分：
          </p>
          <p className="text-gray-500">
            General Education courses are divided into four dimensions, requiring 16 credits:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              「永續與在地」向度，至少 4 學分
              <span className="text-gray-500">
                {" "}— Sustainability & Local, min. 4 credits
              </span>
            </li>
            <li>
              「宗教與思維」向度，至少 2 學分
              <span className="text-gray-500">
                {" "}— Religion & Thinking, min. 2 credits
              </span>
            </li>
            <li>
              「科技與服務」向度，至少 2 學分
              <span className="text-gray-500">
                {" "}— Technology & Service, min. 2 credits
              </span>
            </li>
            <li>
              「跨域與設計」向度，至少 4 學分
              <span className="text-gray-500">
                {" "}— Interdisciplinary & Design, min. 4 credits
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Chinese courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">華文課程</h2>
        <p className="text-base text-gray-500 mb-2">Chinese Language Courses</p>
        <p className="text-sm text-gray-500 mb-6">
          含英文、閱讀與書寫、初級/進階/高階華語課程至多採計 8 學分。
          <span className="block">
            Including Freshman English, Reading and Writing, and Chinese courses — up to 8 credits counted.
          </span>
        </p>

        <div className="space-y-8">
          {chinese.map((group, gi) => (
            <div key={gi}>
              <h3 className="font-semibold text-gray-700 mb-1">
                {group.category}{" "}
                <span className="text-gray-400 font-normal text-sm">
                  {group.categoryEn}
                </span>
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                {group.note}
                <span className="block">{group.noteEn}</span>
              </p>
              <CourseTable courses={group.courses} />
            </div>
          ))}
        </div>
      </section>

      {/* Other graduation requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          其他畢業條件
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Other Graduation Requirements
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              校訂英文能力{" "}
              <span className="text-gray-400 font-normal">
                English Proficiency Requirement
              </span>
            </h3>
            <p>
              畢業前須通過靜宜大學英文能力畢業門檻。未通過者須完成英文 4 學分及外語教學中心「選修英文」4 學分。
            </p>
            <p className="text-gray-500 mt-1">
              Before graduation, students must meet the English proficiency requirements. Students who do not meet this requirement must complete 4 credits of Freshman English and 4 credits of &quot;Elective English&quot; courses offered by the Foreign Language Center.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              外系學分{" "}
              <span className="text-gray-400 font-normal">
                Cross-department Credits
              </span>
            </h3>
            <p>
              修習外系至多承認 20 學分。
            </p>
            <p className="text-gray-500 mt-1">
              Students who choose courses outside of this college are only allowed to take up to 20 elective credits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
