import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於學程 About IPCS | IPCS",
  description:
    "About the International Program in Computer Science (IPCS) at Providence University.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">關於學程</h1>
      <p className="text-lg text-gray-500 mb-10">About IPCS</p>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">學程歷史</h2>
        <p className="text-base text-gray-500 mb-6">Program History</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">2020</div>
            <div className="text-sm text-gray-400 mb-3">民國 109 年</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              籌備階段
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              Preparation Phase
            </p>
            <p className="text-sm text-gray-600 mt-3">
              召開籌備委員會議，確立課程架構、畢業條件、開班與師資原則
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Preparatory committee meetings established the curriculum
              framework, graduation requirements, class formation, and faculty
              principles.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">2021</div>
            <div className="text-sm text-gray-400 mb-3">民國 110 年</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              正式成立
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              Officially Established
            </p>
            <p className="text-sm text-gray-600 mt-3">
              學程正式成立，提供 4 年完整學士學位訓練
            </p>
            <p className="text-sm text-gray-500 mt-1">
              The program was officially established, offering a full 4-year
              bachelor&apos;s degree training.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">2025</div>
            <div className="text-sm text-gray-400 mb-3">民國 114 年</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              首屆畢業生
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              First Graduating Class
            </p>
            <p className="text-sm text-gray-600 mt-3">
              迎來第一屆畢業生，展現全英文授課與資訊專業培育成果
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Welcomed the first graduating class, demonstrating the results of
              full-English instruction and IT professional training.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">自我定位</h2>
        <p className="text-base text-gray-500 mb-6">
          Positioning: EMI Program of the College of Computing and Informatics
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <p className="text-gray-700 mb-2">
            IPCS 為資訊學院唯一的全英語 (EMI) 教學學程，隸屬於資訊學院，與以下系所並列：
          </p>
          <p className="text-gray-500 text-sm mb-4">
            IPCS is the only English as a Medium of Instruction (EMI) program in
            the College of Computing and Informatics, alongside the following
            departments:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                zh: "資訊工程學系",
                en: "Computer Science & Engineering",
              },
              {
                zh: "資訊管理學系",
                en: "Information Management",
              },
              {
                zh: "人工智慧應用學系",
                en: "Applied Artificial Intelligence",
              },
              {
                zh: "資料科學暨大數據學系",
                en: "Data Science & Big Data Analytics",
              },
              {
                zh: "晶片設計學士班",
                en: "Chip Design",
              },
              {
                zh: "學院不分系",
                en: "Interdisciplinary Program",
              },
            ].map((dept, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-md p-3 text-center border border-gray-100"
              >
                <p className="text-sm font-medium text-gray-800">{dept.zh}</p>
                <p className="text-xs text-gray-500">{dept.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role 1: EMI */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          IPCS 角色（一）：學院的全英語（EMI）教學學程
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Role 1: The College&apos;s EMI Teaching Program
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl mb-3">🌏</div>
            <h3 className="font-bold text-gray-800 mb-1">全英語學習環境</h3>
            <p className="text-sm text-gray-500 mb-3">
              Full-English Learning Environment
            </p>
            <p className="text-sm text-gray-600">
              課程 100% 以英語授課（English as Medium of
              Instruction），訓練學生以英語進行電腦科學學習與溝通
            </p>
            <p className="text-sm text-gray-500 mt-1">
              All courses are taught 100% in English (EMI), training students to
              learn and communicate in computer science in English.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-800 mb-1">國際學生共學</h3>
            <p className="text-sm text-gray-500 mb-3">
              Learning with International Students
            </p>
            <p className="text-sm text-gray-600">
              與來自各國的國際生同班上課，培養跨文化合作能力，建立真實的全球人脈
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Study alongside international students from around the world,
              building cross-cultural collaboration skills and real global
              connections.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-bold text-gray-800 mb-1">
              出國留學 / 交換準備
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Preparation for Study Abroad / Exchange
            </p>
            <p className="text-sm text-gray-600">
              提前適應全英文學術環境，為赴海外留學或交換奠定語言與文化基礎
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Adapt to a full-English academic environment in advance, building
              the language and cultural foundation for studying abroad or
              exchange programs.
            </p>
          </div>
        </div>
      </section>

      {/* Role 2: Bridge for International Students */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          IPCS 角色（二）：招收外國學生的橋樑
        </h2>
        <p className="text-base text-gray-500 mb-6">
          Role 2: A Bridge for Recruiting International Students
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">
              目前外國學生管道
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Current Channels for International Students
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  國際專修部（語言先修）
                  <span className="block text-gray-500">
                    International Foundation Program (Language Preparatory)
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  交換生（短期）
                  <span className="block text-gray-500">
                    Exchange Students (Short-term)
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  學位生
                  <span className="block text-gray-500">Degree Students</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">
              透過 IPCS 串接的未來願景
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Future Vision through IPCS
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  外國學生加入資訊學院大學部
                  <span className="block text-gray-500">
                    International students joining the college&apos;s
                    undergraduate programs
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  外國學生研究所的入口管道
                  <span className="block text-gray-500">
                    A gateway for international students to graduate programs
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  提升學院國際化程度與能見度
                  <span className="block text-gray-500">
                    Enhancing the college&apos;s internationalization and
                    visibility
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
