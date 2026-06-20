import type { Metadata } from "next";
import ObjectivesContent from "@/components/ObjectivesContent";

export const metadata: Metadata = {
  title: "教育目標及核心能力 Educational Objectives | IPCS",
  description:
    "Educational Objectives and Core Competencies of International Program in Computer Science.",
};

export default function ObjectivesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">
        教育目標及核心能力
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Educational Objectives &amp; Core Competencies
      </p>
      <ObjectivesContent />
    </div>
  );
}
