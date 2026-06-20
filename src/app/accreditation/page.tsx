import type { Metadata } from "next";
import ObjectivesContent from "@/components/ObjectivesContent";

export const metadata: Metadata = {
  title: "資訊教育認證 IEET CAC Accreditation | IPCS",
  description:
    "IEET CAC Accreditation - Educational Objectives and Core Competencies of International Program in Computer Science.",
};

export default function AccreditationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">資訊教育認證</h1>
      <p className="text-lg text-gray-500 mb-10">IEET CAC Accreditation</p>
      <ObjectivesContent />
    </div>
  );
}
