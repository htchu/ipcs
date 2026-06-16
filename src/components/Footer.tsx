import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-3">聯絡資訊 Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                43301 台中市沙鹿區台灣大道七段200號<br />
                No.200, Sec.7, Taiwan Boulevard, Shalu Dist., Taichung City 43301, Taiwan
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                04-2632-8001 ext. 18024
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                pu20750@pu.edu.tw
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-3">快速連結 Quick Links</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <Link href="/about" className="block hover:text-white transition">關於學程 About</Link>
              <Link href="/admission" className="block hover:text-white transition">入學申請 Admission</Link>
              <Link href="/scholarship" className="block hover:text-white transition">獎助學金 Scholarship</Link>
              <Link href="/curriculum" className="block hover:text-white transition">課程資訊 Curriculum</Link>
              <Link href="/forms" className="block hover:text-white transition">表單下載 Forms</Link>
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-3">相關連結 Related Links</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <a href="https://www.pu.edu.tw/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">靜宜大學 Providence University</a>
              <a href="https://www.csie.pu.edu.tw/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">資訊工程學系 CSIE</a>
              <a href="https://www.csce.pu.edu.tw/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">資訊傳播工程學系 CSCE</a>
              <a href="https://www.csim.pu.edu.tw/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">資訊管理學系 CSIM</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 國際資訊學士學位學程 International Program in Computer Science, Providence University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
