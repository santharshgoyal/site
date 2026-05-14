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
    <aside className="pl-8 sm:pl-12 md:pl-16 pt-8 sm:pt-10 md:pt-12" data-testid="blog-sidebar">
      <h2
        className="text-sm sm:text-base text-[#e8e8e8] tracking-wide uppercase mb-6"
        data-testid="sidebar-heading"
      >
        {heading}
      </h2>
      <ul className="space-y-1 text-xs sm:text-sm text-[#bdbdbd]">
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
