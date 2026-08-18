import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "學生資訊 Student Info | IPCS",
  description:
    "Student information for the International Program in Computer Science at Providence University.",
};

export default function StudentInfoPage() {
  const info = [
    {
      icon: "📚",
      title: "課程資訊",
      titleEn: "Curriculum",
      description: "查看 IPCS 學位課程結構、必修課程、選修課程及畢業要求。",
      descriptionEn: "View the curriculum structure, required and elective courses, and graduation requirements.",
      href: "/student-info/curriculum",
    },
    {
      icon: "🎓",
      title: "入學申請",
      titleEn: "Admission",
      description: "了解不同的入學途徑，包括學位生、交換生及雙聯學位等申請資訊。",
      descriptionEn: "Learn about different admission pathways including degree-seeking, exchange, and dual degree programs.",
      href: "/student-info/admission",
    },
    {
      icon: "💰",
      title: "獎助學金",
      titleEn: "Scholarship",
      description: "查詢各類獎助學金資訊，包括申請資格、申請方式及相關連結。",
      descriptionEn: "Find information about available scholarships, eligibility requirements, and application procedures.",
      href: "/student-info/scholarship",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">學生資訊</h1>
      <p className="text-lg text-gray-500 mb-10">Student Information</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition overflow-hidden"
          >
            <div className="p-6">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{item.titleEn}</p>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-xs text-gray-500">{item.descriptionEn}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
