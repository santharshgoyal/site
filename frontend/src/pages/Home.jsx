import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const go = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main
      data-testid="home-page"
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Heading anchored roughly center-left */}
      <section className="flex-1 flex items-center">
        <div className="pl-8 sm:pl-16 md:pl-24 lg:pl-32">
          <h1
            data-testid="site-title"
            className="title-reveal text-base sm:text-lg md:text-xl text-[#e8e8e8] tracking-tight"
          >
            les archives de harsh:
          </h1>
        </div>
      </section>

      {/* Bottom nav */}
      <nav
        data-testid="bottom-nav"
        className="pb-12 sm:pb-16 md:pb-20 px-6 sm:px-10 md:px-16 nav-fade-in"
      >
        <ul className="flex flex-wrap items-center justify-around gap-y-4 gap-x-6 text-sm sm:text-base md:text-lg">
          <li>
            <a
              href="/blog"
              onClick={go("/blog")}
              className="nav-link"
              data-testid="nav-blog"
            >
              blog
            </a>
          </li>
          <li>
            <a
              href="/artworks"
              onClick={go("/artworks")}
              className="nav-link"
              data-testid="nav-artworks"
            >
              artworks
            </a>
          </li>
          <li>
            <a
              href="/random-thoughts"
              onClick={go("/random-thoughts")}
              className="nav-link"
              data-testid="nav-random-thoughts"
            >
              random thoughts
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@harsh.example"
              className="nav-link"
              data-testid="nav-contact"
            >
              contact me
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
