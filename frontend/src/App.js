import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Artworks from "./pages/Artworks";
import RandomThoughts from "./pages/RandomThoughts";
import Links from "./pages/Links";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/random-thoughts" element={<RandomThoughts />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
