const links = [
  {
    title: "靜宜大學",
    titleEn: "Providence University",
    href: "https://www.pu.edu.tw/",
    color: "bg-primary",
  },
  {
    title: "資訊學院",
    titleEn: "College of Computing & Informatics",
    href: "https://www.cci.pu.edu.tw/",
    color: "bg-primary-light",
  },
  {
    title: "國際暨兩岸事務處",
    titleEn: "Office of International Affairs",
    href: "https://www.oia.pu.edu.tw/",
    color: "bg-[#1a5a6c]",
  },
  {
    title: "教務處",
    titleEn: "Office of Academic Affairs",
    href: "https://www.aa.pu.edu.tw/",
    color: "bg-[#2a6a4c]",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          相關單位
        </h2>
        <p className="text-center text-gray-500 mb-10">Related Units</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white rounded-xl p-6 text-center hover:opacity-90 transition shadow-sm hover:shadow-md`}
            >
              <h3 className="font-bold text-lg mb-1">{link.title}</h3>
              <p className="text-sm text-white/70">{link.titleEn}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
