const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "全英語授課",
    titleEn: "All-English Instruction",
    description: "課程全以英語授課，培養國際化資訊人才。",
    descriptionEn: "All courses taught in English, fostering globally competitive IT professionals.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "國際化環境",
    titleEn: "International Environment",
    description: "來自世界各國的學生齊聚一堂，體驗多元文化。",
    descriptionEn: "Students from around the world gather together for a multicultural experience.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "實務導向",
    titleEn: "Practice-Oriented",
    description: "結合理論與實務，提供實習與產學合作機會。",
    descriptionEn: "Combining theory with practice, offering internship and industry collaboration opportunities.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "跨領域學習",
    titleEn: "Interdisciplinary Learning",
    description: "涵蓋資工、資傳、資管等多元資訊領域。",
    descriptionEn: "Covering CS Engineering, Communications, and Information Management.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          學程特色
        </h2>
        <p className="text-center text-gray-500 mb-10">Program Highlights</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg text-primary mb-1">{f.title}</h3>
              <p className="text-xs text-gray-400 mb-2">{f.titleEn}</p>
              <p className="text-sm text-gray-600">{f.description}</p>
              <p className="text-xs text-gray-400 mt-1">{f.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
