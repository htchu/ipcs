"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function IEETCACPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;
  const standardsZh = [
    {
      number: 1,
      title: "教育目標",
      content: "學程須具備明確且公開的教育目標，展現學程的功能及特色，且符合時代潮流及社會需求。須說明教育目標與學校願景或教育目標的關聯性及形成的流程，並具備有效的評量方式以確保教育目標的達成。"
    },
    {
      number: 2,
      title: "學生",
      content: "須訂定並有效執行配合達成教育目標合理可行的規章。須訂定並有效執行鼓勵學生交流與學習的措施及辦法。須持續並有效執行學生輔導機制及成效評量。"
    },
    {
      number: 3,
      title: "應屆畢業生核心能力",
      content: "應屆畢業生須具備下述七項核心能力：創新與應用資訊科技及數學知識的能力、執行資訊科技實務所需技術、技巧及使用現代工具的能力、設計及評估電腦化的系統、程序、元件或程式的能力、專案管理、有效溝通、領域整合及團隊合作的能力、發掘、分析、應用研究成果及兼顧永續發展，以解決複雜且整合性資訊問題的能力、認識時事議題，瞭解資訊科技對環境永續、社會共好及全球發展的影響，並培養持續學習的習慣及能力、理解及應用專業與資訊倫理，認知社會責任及尊重多元觀點。"
    },
    {
      number: 4,
      title: "課程及教學",
      content: "課程設計及內容須與教育目標一致，課程應包含：數學相關課程至少 9 學分、專業課程占最低畢業學分八分之三以上，須包括展現整合資訊設計能力的專題實作、通識課程與專業課程均衡，並與教育目標一致。課程及教學須符合產業需求，並能反思及改善，以確保學生核心能力的培育。"
    },
    {
      number: 5,
      title: "教師",
      content: "應有足夠的專任教師人數。教師須參與教育目標的訂定及執行，專長應能涵蓋相關領域所需的專業知識。須促進師生互動、輔導學生成效，並與業界保持交流，具備專業持續成長的管道及鼓勵措施，參與相關學術及專業組織與活動。"
    },
    {
      number: 6,
      title: "設備及空間",
      content: "須營造一個有利師生互動及學生發展專業能力的環境。須提供足夠的專業設備與工具及資訊設施，以利學生學習。須具備安全的學習空間、設備維護及管理制度。"
    },
    {
      number: 7,
      title: "行政支援人力及經費",
      content: "須提供足以確保學程品質及賡續發展的行政支援人力及經費，並具備有效的領導及管理制度。須提供足以支援師生專業成長的經費，及足夠的行政及技術人力。須提供足夠的經費支應教學、實驗及實習設備的取得、保養及運轉。"
    },
    {
      number: 8,
      title: "持續改善",
      content: "須具備持續改善機制，並說明持續改善成效。"
    }
  ];

  const standardsEn = [
    {
      number: 1,
      title: "Educational Objectives",
      content: "Programs must establish clear and publicly disclosed educational objectives that demonstrate the program's functions and distinctive features, aligned with contemporary trends and societal needs. Programs must document the relationship between educational objectives and institutional vision or institutional educational objectives, describe the process of their formulation, and establish effective assessment methods to ensure achievement of these objectives."
    },
    {
      number: 2,
      title: "Students",
      content: "Programs must establish and effectively implement reasonable and feasible policies and regulations aligned with achieving educational objectives. Programs must establish and effectively implement measures and procedures that encourage student exchange and learning. Programs must continuously and effectively implement student mentoring mechanisms and effectiveness evaluation systems."
    },
    {
      number: 3,
      title: "Graduating Student Core Competencies",
      content: "Graduating students must possess the following seven core competencies: ability to innovate and apply information technology and mathematical knowledge; ability to execute technical skills, techniques, and use modern tools required in information technology practice; ability to design and evaluate computerized systems, processes, components, or programs; ability in project management, effective communication, interdisciplinary integration, and teamwork; ability to identify, analyze, apply research results and address sustainable development while solving complex and integrated information problems; ability to recognize current issues, understand the impact of information technology on environmental sustainability, social well-being, and global development, and cultivate habits and ability for lifelong learning; ability to understand and apply professional and information ethics, recognize social responsibility, and respect diverse perspectives."
    },
    {
      number: 4,
      title: "Curriculum and Instruction",
      content: "Curriculum design and content must be consistent with educational objectives. The curriculum must include: mathematics-related courses of at least 9 credits; professional courses comprising at least three-eighths of minimum graduation credits, which must include capstone projects demonstrating integrated information design capabilities; balanced general education and professional courses aligned with educational objectives. Curriculum and instruction must meet industry requirements, be subject to reflection and continuous improvement, and ensure development of students' core competencies."
    },
    {
      number: 5,
      title: "Faculty",
      content: "Programs must have a sufficient number of full-time faculty members. Faculty must participate in the formulation and implementation of educational objectives, with expertise covering relevant professional knowledge required in related fields. Programs must promote faculty-student interaction and mentoring effectiveness, maintain industry engagement, provide channels and incentives for professional development, and encourage participation in relevant academic and professional organizations and activities."
    },
    {
      number: 6,
      title: "Facilities and Space",
      content: "Programs must create an environment conducive to faculty-student interaction and student development of professional competencies. Programs must provide adequate professional equipment, tools, and information technology facilities to support student learning. Programs must provide safe learning spaces with equipment maintenance and management systems."
    },
    {
      number: 7,
      title: "Administrative Support Personnel and Funding",
      content: "Programs must provide sufficient administrative support personnel and funding to ensure program quality and sustainable development, with effective leadership and management systems in place. Programs must provide funding adequate to support faculty and student professional development and sufficient administrative and technical personnel. Programs must provide adequate funding for acquisition, maintenance, and operation of teaching, laboratory, and practical training equipment."
    },
    {
      number: 8,
      title: "Continuous Improvement",
      content: "Programs must establish continuous improvement mechanisms and document the effectiveness of continuous improvement efforts."
    }
  ];

  const standards = language === "en" ? standardsEn : standardsZh;

  const attributesZh = [
    { label: "1. 學術教育", desc: "完成設計完善的認可課程，具備成為資訊專業人士的能力。" },
    { label: "2. 知識與問題解決", desc: "應用資訊基礎、專業領域知識及數學能力，從已界定的問題及需求中抽象化及概念化資訊模型。" },
    { label: "3. 問題分析", desc: "辨識及解決複雜資訊問題，使用數學、資訊科學及相關領域的基本原理達成有根據的結論。" },
    { label: "4. 解決方案設計與開發", desc: "設計及評估複雜資訊問題的解決方案，並設計及評估滿足特定需求的系統、元件或流程。" },
    { label: "5. 現代工具使用", desc: "建立、選擇或調整並應用適當的技術、資源及現代資訊工具從事複雜的資訊活動，並理解其限制。" },
    { label: "6. 個人與團隊工作", desc: "在多領域環境中有效地獨立工作，以及作為團隊成員或領導人發揮作用。" },
    { label: "7. 溝通", desc: "與資訊社群有效溝通複雜的資訊活動，能夠撰寫有效報告、設計文件、進行簡報及清楚指導。" },
    { label: "8. 專業性與社會責任", desc: "認識及評估在地球及全球背景下的社會、健康、安全、法律及文化議題，以及其對專業資訊實踐的責任。" },
    { label: "9. 專業倫理", desc: "理解及承諾專業倫理、責任及專業資訊實踐的規範。" },
    { label: "10. 終身學習", desc: "認識持續專業發展的需求，並具備獨立學習以持續發展為資訊專業人士的能力。" }
  ];

  const attributesEn = [
    { label: "1. Academic Foundation", desc: "Complete well-designed accredited curricula with competence to become an information technology professional." },
    { label: "2. Knowledge and Problem Solving", desc: "Apply information technology fundamentals, domain-specific professional knowledge, and mathematical competencies to abstract and conceptualize information models from identified problems and requirements." },
    { label: "3. Problem Analysis", desc: "Identify and analyze complex information technology problems, using fundamental principles from mathematics, computer science, and related disciplines to reach well-founded conclusions." },
    { label: "4. Design and Development of Solutions", desc: "Design and evaluate solutions to complex information technology problems, as well as design and evaluate systems, components, or processes that meet specific requirements." },
    { label: "5. Use of Modern Tools", desc: "Create, select, or adapt and apply appropriate techniques, resources, and modern information technology tools for complex information technology activities, and understand their limitations." },
    { label: "6. Individual and Team Work", desc: "Work effectively as an individual in multi-disciplinary environments and function as a team member or leader within a team." },
    { label: "7. Communication", desc: "Communicate effectively with the information technology community about complex information technology activities, and be able to write effective reports, prepare design documentation, make presentations, and provide clear instructions." },
    { label: "8. Professionalism and Social Responsibility", desc: "Recognize and evaluate social, health, safety, legal, and cultural issues in local and global contexts, and the associated responsibilities to professional information technology practice." },
    { label: "9. Professional Ethics", desc: "Understand and commit to professional ethics, responsibilities, and standards of professional information technology practice." },
    { label: "10. Lifelong Learning", desc: "Recognize the need for ongoing professional development and possess the ability to engage in independent learning to continue development as an information technology professional." }
  ];

  const attributes = language === "en" ? attributesEn : attributesZh;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t("IEET 資訊教育認證規範", "IEET Information Education Accreditation Standards")}
          </h1>
          <p className="text-lg text-gray-700 mb-4 max-w-2xl">
            {t(
              "中華工程教育學會認證委員會訂定的資訊相關學程教育品質標準，定義學程應達成的教育目標與學生核心能力要求。",
              "Quality standards for information-related programs established by the Taiwan Engineering Accreditation Council (TEAC), defining educational objectives and core competencies required for graduates."
            )}
          </p>
          <p className="text-sm text-gray-600">
            {t(
              "中華工程教育學會（IEET）認證委員會 | CAC2024版本",
              "Taiwan Engineering Accreditation Council (TEAC) | CAC2024 Version"
            )}
          </p>
        </div>

        {/* Standards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-green-600">
            {t("學士學位認證規範", "Bachelor's Degree Accreditation Standards")}
          </h2>

          <div className="space-y-6">
            {standards.map((standard) => (
              <div
                key={standard.number}
                className="bg-white rounded-lg p-6 sm:p-8 border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <div className="text-2xl font-bold text-green-600 flex-shrink-0">
                    {standard.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {standard.title}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed pl-12">
                  {standard.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seoul Accord Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-green-600">
            {t("Seoul Accord 核心能力", "Seoul Accord Core Competencies")}
          </h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 border-l-4 border-green-600 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t("畢業生應具備的十項核心能力", "Ten Core Competencies for Graduates")}
            </h3>

            <div className="space-y-4">
              {attributes.map((attr, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="font-semibold text-green-600 sm:col-span-1">
                    {attr.label}
                  </div>
                  <div className="text-gray-700 sm:col-span-2">
                    {attr.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graduate Programs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-green-600">
            {t("研究所認證規範", "Graduate Program Accreditation Standards")}
          </h2>

          <div className="bg-white rounded-lg p-6 sm:p-8 border-l-4 border-green-600 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("學位要求", "Degree Requirements")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t(
                  "研究所教育為學士教育的延伸，以「專、精」為教育重點。除符合上述規範 1、2、5、6、7、8 的要求外，另需符合下列要求：",
                  "Graduate education extends bachelor education with emphasis on specialization and excellence. In addition to meeting standards 1, 2, 5, 6, 7, and 8 above, programs must also meet the following requirements:"
                )}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("入學與教育目標", "Admission and Educational Objectives")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>{t("具有適當的入學評量方式", "Appropriate admission evaluation methods")}</li>
                <li>{t("符合規範 1 教育目標的要求", "Meet requirements of Standard 1 on educational objectives")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("學生與核心能力", "Students and Core Competencies")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>{t("強調研究生與指導教授間的互動", "Emphasis on graduate-advisor interaction")}</li>
                <li>{t("特定領域的專業知識", "Specialized domain knowledge")}</li>
                <li>{t("策劃及執行專題研究的能力", "Ability to plan and conduct thesis research")}</li>
                <li>{t("撰寫專業論文的能力", "Ability to write professional thesis")}</li>
                <li>{t("創新思考及獨立解決問題的能力", "Innovative thinking and independent problem-solving")}</li>
                <li>{t("與不同領域人員協調整合的能力", "Ability to collaborate and integrate with multi-disciplinary teams")}</li>
                <li>{t("良好的國際觀", "Global perspective")}</li>
                <li>{t("領導、管理及規劃的能力", "Leadership, management, and planning ability")}</li>
                <li>{t("終身自我學習成長的能力", "Lifelong self-learning and development")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("課程與師資", "Curriculum and Faculty")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>{t("提供適當的課程及教學，滿足專業領域發展需求", "Provide appropriate curriculum and instruction meeting professional field development needs")}</li>
                <li>{t("教師重視學術或實務研究，發表相關研究成果並參與國內外學術活動", "Faculty emphasize academic or practical research, publish results, and participate in domestic and international academic activities")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t("設施支援", "Facilities Support")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>{t("設備及空間須滿足研究的需要", "Equipment and space must meet research needs")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            © {t("中華工程教育學會", "Taiwan Engineering Accreditation Council")} | {t("資訊教育認證規範", "Information Education Accreditation Standards")}（CAC2024）
          </p>
        </div>
      </div>
    </main>
  );
}
