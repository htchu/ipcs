import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "表單下載 Forms | IPCS",
  description:
    "Downloadable forms and documents for the International Program in Computer Science at Providence University.",
};

/* ── data ── */

type FormItem = {
  zh: string;
  en: string;
  href: string;
};

const forms: FormItem[] = [
  {
    zh: "靜宜大學簡介手冊",
    en: "Providence Uni. Brochure",
    href: "https://oia.pu.edu.tw/var/file/48/1048/img/174/ProvidenceUni.Brochure_CHandENversion.pdf",
  },
  {
    zh: "靜宜大學招生手冊",
    en: "Providence Uni. Admission Handbook",
    href: "https://oia.pu.edu.tw/var/file/48/1048/img/1126/516627917.pdf",
  },
];

/* ── component ── */

export default function FormsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">表單下載</h1>
      <p className="text-lg text-gray-500 mb-10">Forms</p>

      <section className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-2xl">📄</span>
            文件下載
          </h2>
          <p className="text-sm text-gray-500 ml-11">Downloads</p>
        </div>

        <div className="px-6 py-5">
          <ul className="space-y-3">
            {forms.map((f, i) => (
              <li key={i}>
                <Link
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-md border border-gray-100 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition"
                >
                  <span className="shrink-0 text-red-500 text-lg">PDF</span>
                  <span>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      {f.en}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {f.zh}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
