import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import { BLOG_POSTS, CATEGORIES, formatDate } from "../data/blogPosts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function Blog() {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState("Latest");

  const posts = useMemo(() => {
    let list = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);
    list = [...list].sort((a, b) =>
      sort === "Latest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date),
    );
    return list;
  }, [active, sort]);

  return (
    <main
      data-testid="blog-archives-page"
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <BlogSidebar heading="BLOG ARCHIVES:" />

      <div className="w-full px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-24">
        <div className="max-w-3xl mx-auto fade-in-up">
          {/* Tabs */}
          <div className="border-y border-[#e8e8e8]/80 py-4">
            <ul
              className="grid grid-cols-4 text-center text-xs sm:text-sm"
              data-testid="category-tabs"
            >
              {CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <li key={c}>
                    <button
                      onClick={() => setActive(c)}
                      data-testid={`tab-${c.toLowerCase()}`}
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

          {/* Sort */}
          <div className="flex justify-end mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="text-xs sm:text-sm text-[#bdbdbd] hover:text-white focus:outline-none"
                data-testid="sort-trigger"
              >
                Sort By
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#2a2a2a] border-[#3a3a3a] text-[#e8e8e8] font-mono rounded-md min-w-[120px]"
              >
                <DropdownMenuItem
                  onClick={() => setSort("Latest")}
                  data-testid="sort-latest"
                  className="focus:bg-[#3a3a3a] focus:text-white cursor-pointer"
                >
                  Latest
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSort("Oldest")}
                  data-testid="sort-oldest"
                  className="focus:bg-[#3a3a3a] focus:text-white cursor-pointer"
                >
                  Oldest
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Posts list */}
          <ul className="mt-8 space-y-10" data-testid="posts-list">
            {posts.map((p) => (
              <li key={p.slug}>
                <button
                  onClick={() => navigate(`/blog/${p.slug}`)}
                  className="w-full text-left group rounded-md px-3 py-2 -mx-3 transition-colors duration-200 hover:bg-[#161616]"
                  data-testid={`post-${p.slug}`}
                >
                  <p className="text-xs text-[#7a7a7a] mb-1">{formatDate(p.date)}</p>
                  <h3 className="text-xl sm:text-2xl text-[#e8e8e8] group-hover:text-white">
                    {p.title}
                  </h3>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-24 text-center text-xs text-[#6a6a6a]">© Sant Harsh Goyal</footer>
      </div>
    </main>
  );
}
