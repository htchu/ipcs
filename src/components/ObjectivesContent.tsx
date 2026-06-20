import {
  collegeObjectives,
  programObjectives,
  coreCompetencies,
} from "@/data/objectives";

export default function ObjectivesContent() {
  return (
    <>
      {/* College Educational Objectives */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          資訊學院教育目標
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Educational Objectives of College of Computing and Informatics
        </p>
        <div className="grid gap-4">
          {collegeObjectives.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {item.key}
              </span>
              <div>
                <p className="text-gray-800 font-medium">{item.zh}</p>
                <p className="text-gray-500 text-sm mt-1">{item.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Educational Objectives */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          國際資訊學士學位學程 教育目標
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Educational Objectives of International Program in Computer Science
        </p>
        <div className="grid gap-4">
          {programObjectives.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {item.key}
              </span>
              <div>
                <p className="text-gray-800 font-medium">{item.zh}</p>
                <p className="text-gray-500 text-sm mt-1">{item.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          國際資訊學士學位學程核心能力
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Core Competencies of International Program in Computer Science
        </p>
        <div className="grid gap-4">
          {coreCompetencies.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {i + 1}
              </span>
              <div>
                <p className="text-gray-800 font-medium">{item.zh}</p>
                <p className="text-gray-500 text-sm mt-1">{item.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
