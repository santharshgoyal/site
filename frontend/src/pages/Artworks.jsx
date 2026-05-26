import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTWORKS, ARTWORK_CATEGORIES } from "../data/artworks";
import ArtworkLightbox from "../components/ArtworkLightbox";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Links", to: "/links" },
];

export default function Artworks() {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const items = useMemo(
    () => (active === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.category === active)),
    [active],
  );

  const go = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <main
      data-testid="artworks-page"
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Sidebar */}
      <aside
        className=\"relative md:absolute md:top-0 md:left-0 px-6 sm:px-10 md:pl-16 md:pr-0 pt-8 sm:pt-10 md:pt-12 pb-4 md:pb-0 z-10\"
        data-testid="artworks-sidebar"
      >
        <h2 className=\"text-sm sm:text-base text-[#e8e8e8] tracking-wide uppercase mb-3 md:mb-6\">
          ARTWORK:
        </h2>
        <ul className=\"flex flex-row flex-wrap gap-x-5 gap-y-1 md:flex-col md:gap-0 md:space-y-1 text-xs sm:text-sm text-[#bdbdbd]\">
          {NAV.map((n) => (
            <li key={n.to}>
              <a
                href={n.to}
                onClick={go(n.to)}
                className="sidebar-link"
                data-testid={`artworks-nav-${n.label.toLowerCase()}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Centered content */}
      <div className="w-full px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-24">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Tabs */}
          <div className="border-y border-[#e8e8e8]/80 py-4">
            <ul
              className="grid grid-cols-3 text-center text-xs sm:text-sm"
              data-testid="artwork-tabs"
            >
              {ARTWORK_CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <li key={c}>
                    <button
                      onClick={() => setActive(c)}
                      data-testid={`artwork-tab-${c.toLowerCase()}`}
                      className={`w-full py-1 tracking-wide transition-colors duration-200 ${
                        isActive ? "text-white" : "text-[#bdbdbd] hover:text-white"
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Grid */}
          <ul
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14 sm:gap-y-20"
            data-testid="artworks-grid"
          >
            {items.map((art) => (
              <li key={art.id} className="flex justify-center">
                <button
                  onClick={() => setSelected(art)}
                  className="artwork-thumb group block focus:outline-none"
                  data-testid={`artwork-${art.id}`}
                  aria-label={`Open ${art.title}`}
                >
                  <img
                    src={art.src}
                    alt={art.title}
                    loading="lazy"
                    className="w-full max-w-[420px] h-[220px] sm:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-24 text-center text-xs text-[#6a6a6a]">© Sant Harsh Goyal</footer>
      </div>

      {selected && <ArtworkLightbox artwork={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
