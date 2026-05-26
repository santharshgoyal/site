import { useNavigate } from "react-router-dom";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Paintings", to: "/artworks" },
  { label: "Links", to: "/links" },
];

export default function BlogSidebar({ heading = "BLOG ARCHIVES:", showBlogArchives = false }) {
  const navigate = useNavigate();
  const go = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <aside
      className="relative md:absolute md:top-0 md:left-0 px-6 sm:px-10 md:pl-16 md:pr-0 pt-8 sm:pt-10 md:pt-12 pb-6 md:pb-0 z-10"
      data-testid="blog-sidebar"
    >
      <h2
        className="text-sm sm:text-base text-[#e8e8e8] tracking-wide uppercase mb-3 md:mb-6"
        data-testid="sidebar-heading"
      >
        {heading}
      </h2>
      <ul className="flex flex-row flex-wrap gap-x-5 gap-y-1 md:flex-col md:gap-0 md:space-y-1 text-xs sm:text-sm text-[#bdbdbd]">
        {showBlogArchives && (
          <li>
            <a href="/blog" onClick={go("/blog")} className="sidebar-link" data-testid="sidebar-blog-archives">
              Blog Archives
            </a>
          </li>
        )}
        {NAV.map((n) => (
          <li key={n.to}>
            <a
              href={n.to}
              onClick={go(n.to)}
              className="sidebar-link"
              data-testid={`sidebar-${n.label.toLowerCase()}`}
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
