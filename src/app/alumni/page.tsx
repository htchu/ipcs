"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AlumniPage() {
  const { language } = useLanguage();
  const t = (zh: string, en: string) => language === "en" ? en : zh;

  const resources = [
    {
      titleZh: "校友服務中心",
      titleEn: "Alumni Service Center",
      descriptionZh: "各項資料申請",
      descriptionEn: "Document Applications",
      icon: "📋",
    },
    {
      titleZh: "校友資料更新",
      titleEn: "Update Alumni Information",
      descriptionZh: "更新個人資訊",
      descriptionEn: "Update Personal Information",
      icon: "📝",
    },
    {
      titleZh: "成績單、畢業證書補發",
      titleEn: "Transcript & Diploma Reissuance",
      descriptionZh: "線上申請各項文件",
      descriptionEn: "Online Application for Documents",
      icon: "📜",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("系友專區", "Alumni Center")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t(
              "提供校友各項服務資訊與便利申請管道",
              "Provide alumni services and convenient application channels"
            )}
          </p>
        </div>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
            {t("校友資源網頁連結", "Alumni Resources")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === "en" ? resource.titleEn : resource.titleZh}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en" ? resource.descriptionEn : resource.descriptionZh}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Online Application */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
            {t("線上申請", "Online Application")}
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t(
                "成績單、畢業證書補發等線上申請",
                "Online Application for Transcripts & Diplomas"
              )}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  {t("登入方式：", "Login Method:")}
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>
                    <strong>{t("帳號：", "Username:")}</strong>
                    {t("身分證字號", "ID Number")}
                  </li>
                  <li>
                    <strong>{t("密碼：", "Password:")}</strong>
                    {t("出生年月日", "Date of Birth")}
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  {t("申請步驟：", "Application Steps:")}
                </p>
                <p className="text-gray-700 ml-4">
                  {t(
                    "登入後（帳號：身分證字號，密碼：出生年月日）即可依操作畫面所示，完成申請。",
                    "After logging in (Username: ID Number, Password: Date of Birth), follow the on-screen instructions to complete your application."
                  )}
                </p>
              </div>

              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  {t("寄送時間：", "Delivery Time:")}
                </p>
                <p className="text-gray-700 ml-4">
                  {t("費用入帳後 ", "Within ")}
                  <strong>{t("2 個工作天內", "2 business days")}</strong>
                  {t("，綜合業務組將以郵局寄出文件。", " after payment confirmation, the Administration Office will send documents by mail.")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">
            {t("聯絡資訊", "Contact Information")}
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">
                  {t("洽詢單位", "Department")}
                </p>
                <p className="text-gray-900 font-semibold">
                  {t("教務處 / 綜合業務組", "Office of Academic Affairs / Administration Section")}
                </p>
              </div>

              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">
                  {t("電話", "Phone")}
                </p>
                <p className="text-gray-900 font-semibold">
                  04-26328001 {t("分機", "Ext.")} 11111～11118
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {t(
                    "如有任何疑問，歡迎直接洽詢綜合業務組，將有專人為您服務。",
                    "For any inquiries, please contact the Administration Section. Our staff will be happy to assist you."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span>💡</span> {t("服務提示", "Service Tips")}
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>
              {t(
                "請確保登入資訊正確，以順利完成申請",
                "Ensure your login information is correct to complete the application smoothly"
              )}
            </li>
            <li>
              {t(
                "申請後請妥善保管收據，作為查詢進度之依據",
                "Keep your receipt after application to track the status"
              )}
            </li>
            <li>
              {t(
                "如有文件遺失或更新資訊有誤，歡迎聯絡綜合業務組",
                "If you lose documents or need to update information, please contact the Administration Section"
              )}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
