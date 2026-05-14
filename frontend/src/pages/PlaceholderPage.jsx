import { useNavigate } from "react-router-dom";

export default function PlaceholderPage({ title, subtitle, testId }) {
  const navigate = useNavigate();

  return (
    <main
      data-testid={testId}
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <header className="pt-10 sm:pt-12 px-8 sm:px-16 md:px-24 lg:px-32">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="back-link text-sm fade-in-up"
          data-testid="back-link"
        >
          ← les archives de harsh:
        </a>
      </header>

      <section className="flex-1 flex items-center">
        <div className="pl-8 sm:pl-16 md:pl-24 lg:pl-32 max-w-2xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl text-[#e8e8e8] fade-in-up"
            style={{ animationDelay: "0.15s" }}
            data-testid="page-title"
          >
            {title}
          </h1>
          <p
            className="mt-6 text-sm sm:text-base text-[#888] fade-in-up"
            style={{ animationDelay: "0.35s" }}
            data-testid="page-subtitle"
          >
            {subtitle}
          </p>
        </div>
      </section>

      <footer className="pb-10 sm:pb-12 px-8 sm:px-16 md:px-24 lg:px-32">
        <p
          className="text-xs text-[#555] fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          — harsh
        </p>
      </footer>
    </main>
  );
}
