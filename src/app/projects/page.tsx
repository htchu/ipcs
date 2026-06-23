import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "畢業專題 Capstone Projects | IPCS",
  description:
    "Capstone projects of the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type Project = {
  group: string;
  titleEn: string;
  href: string;
};

type AcademicYear = {
  year: string;
  labelZh: string;
  labelEn: string;
  projects: Project[];
};

const years: AcademicYear[] = [
  {
    year: "114",
    labelZh: "114 學年度",
    labelEn: "Academic Year 2025–2026",
    projects: [
      {
        group: "Group 01",
        titleEn: "Dungeon Trial",
        href: "/docs/projects/114/114Group01_Dungeon_Trial.pdf",
      },
      {
        group: "Group 02",
        titleEn: "Farm2Market",
        href: "/docs/projects/114/114Group02_Farm2Market Progress.pdf",
      },
      {
        group: "Group 03",
        titleEn: "Multimodal Conversational AI for Mental Health Support",
        href: "/docs/projects/114/114Group03_MultimodalConversationalAIforMentalHealthSupport.pdf",
      },
    ],
  },
  {
    year: "115",
    labelZh: "115 學年度",
    labelEn: "Academic Year 2026–2027",
    projects: [
      {
        group: "Group 01",
        titleEn: "Self-Driving Car",
        href: "/docs/projects/115/115Group01_Special Project - Self-Driving Car.pdf",
      },
      {
        group: "Group 02",
        titleEn: "SuperChess",
        href: "/docs/projects/115/115Group02_SuperChess Proposal_final.pdf",
      },
      {
        group: "Group 03",
        titleEn: "Taichung Incident Monitor",
        href: "/docs/projects/115/115Group03_TaichungIncidentMonitor.pdf",
      },
    ],
  },
];

/* ── component ── */

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">畢業專題</h1>
      <p className="text-lg text-gray-500 mb-10">Capstone Projects</p>

      <div className="space-y-10">
        {years.map((y) => (
          <section
            key={y.year}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                {y.labelZh}
              </h2>
              <p className="text-sm text-gray-500 ml-11">{y.labelEn}</p>
            </div>

            <div className="px-6 py-5">
              <ul className="space-y-3">
                {y.projects.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
                    >
                      <span className="shrink-0 text-red-500 text-lg">PDF</span>
                      <span>
                        <span className="text-sm font-medium text-primary group-hover:underline">
                          {p.group} — {p.titleEn}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Rubric Template */}
      <section className="mt-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            評分表範本
          </h2>
          <p className="text-sm text-gray-500 ml-11">Rubric Template</p>
        </div>

        <div className="px-6 py-5">
          <Link
            href="/docs/projects/IPCS_Special_Project_Rubric_template.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
          >
            <span className="shrink-0 text-blue-600 text-lg">DOC</span>
            <span>
              <span className="text-sm font-medium text-primary group-hover:underline">
                IPCS Special Project Rubric Template
              </span>
              <span className="block text-xs text-gray-500 mt-0.5">
                畢業專題評分表範本
              </span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
