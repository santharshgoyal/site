import { useParams, useNavigate } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import { BLOG_POSTS, formatDate } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main
        className="min-h-screen w-full flex items-center justify-center"
        style={{ backgroundColor: "#0a0a0a" }}
        data-testid="blog-post-not-found"
      >
        <div className="text-center">
          <p className="text-[#888] mb-4">post not found.</p>
          <button
            onClick={() => navigate("/blog")}
            className="back-link text-sm"
            data-testid="back-to-blog"
          >
            ← back to archives
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      data-testid="blog-post-page"
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <BlogSidebar heading="BLOG:" showBlogArchives />

      <div className="w-full px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16">
        <article className="max-w-2xl mx-auto fade-in-up">
          {/* Title with underline */}
          <header className="border-b border-[#e8e8e8]/80 pb-3">
            <h1
              className="text-base sm:text-lg text-[#e8e8e8] tracking-wide"
              data-testid="post-title"
            >
              {post.title}
            </h1>
          </header>

          <p className="mt-4 text-right text-xs text-[#7a7a7a]" data-testid="post-date">
            {formatDate(post.date)}
          </p>

          {/* Body */}
          <div
            className="mt-10 space-y-6 text-sm sm:text-[15px] leading-relaxed text-[#cfcfcf] whitespace-pre-line"
            data-testid="post-body"
          >
            {post.body}
          </div>

          {/* Signature */}
          <div className="mt-16 text-right space-y-1">
            <p className="text-base sm:text-lg text-[#e8e8e8]">Sant Harsh Goyal</p>
            <p>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs sm:text-sm text-[#bdbdbd] hover:text-white sidebar-link"
                data-testid="follow-on-x"
              >
                Follow on X
              </a>
            </p>
            <p>
              <a
                href="mailto:hello@harsh.example"
                className="text-xs sm:text-sm text-[#bdbdbd] hover:text-white sidebar-link"
                data-testid="post-email"
              >
                Email
              </a>
            </p>
          </div>
        </article>

        <footer className="mt-20 text-center text-xs text-[#6a6a6a]">© Sant Harsh Goyal</footer>
      </div>
    </main>
  );
}
