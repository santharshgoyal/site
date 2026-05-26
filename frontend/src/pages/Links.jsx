import { useNavigate } from "react-router-dom";
import { Linkedin, Twitter, FileText, Mail } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Paintings", to: "/artworks" },
];

const LINKS = [
  {
    key: "linkedin",
    name: "LinkedIn",
    handle: "@santharshgoyal",
    href: "https://linkedin.com/in/santharshgoyal",
    Icon: Linkedin,
  },
  {
    key: "x",
    name: "X",
    handle: "@santharshgoyal",
    href: "https://x.com/santharshgoyal",
    Icon: Twitter,
  },
  {
    key: "resume",
    name: "Resume",
    handle: "@googledrive",
    href: "https://drive.google.com/file/d/1MTgjr6wotrLmxponHzG0st5KpugQpN9I/view?usp=sharing",
    Icon: FileText,
  },
  {
    key: "email",
    name: "Email me",
    handle: "santharshgoyal@gmail.com",
    href: "mailto:santharshgoyal@gmail.com",
    Icon: Mail,
  },
];

export default function Links() {
  const navigate = useNavigate();
  const go = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <main
      data-testid="links-page"
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Sidebar */}
      <aside className=\"relative md:absolute md:top-0 md:left-0 px-6 sm:px-10 md:pl-16 md:pr-0 pt-8 sm:pt-10 md:pt-12 pb-4 md:pb-0 z-10\">
        <h2
          className=\"text-sm sm:text-base text-[#e8e8e8] tracking-wide uppercase mb-3 md:mb-6\"
          data-testid="links-sidebar-heading"
        >
          LINKS:
        </h2>
        <ul className=\"flex flex-row flex-wrap gap-x-5 gap-y-1 md:flex-col md:gap-0 md:space-y-1 text-xs sm:text-sm text-[#bdbdbd]\">
          {NAV.map((n) => (
            <li key={n.to}>
              <a
                href={n.to}
                onClick={go(n.to)}
                className="sidebar-link"
                data-testid={`links-nav-${n.label.toLowerCase()}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Cards grid */}
      <div className="w-full px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-16 flex flex-col min-h-screen">
        <div className="max-w-3xl mx-auto w-full flex-1 flex items-center fade-in-up">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full"
            data-testid="links-grid"
          >
            {LINKS.map(({ key, name, handle, href, Icon }, idx) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-testid={`link-card-${key}`}
                  className="link-card group block rounded-2xl bg-[#161616] hover:bg-[#1d1d1d] border border-[#222] hover:border-[#2f2f2f] px-6 sm:px-8 py-6 sm:py-8 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      className="w-9 h-9 sm:w-10 sm:h-10 text-[#e8e8e8] shrink-0 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <div className="min-w-0">
                      <p className="text-xl sm:text-2xl text-[#a8a8a8] group-hover:text-white transition-colors">
                        {name}
                      </p>
                      <p className="text-xs sm:text-sm text-[#7a7a7a] mt-1 truncate">
                        {handle}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-12 text-center text-xs text-[#6a6a6a]">
          © Sant Harsh Goyal
        </footer>
      </div>
    </main>
  );
}
