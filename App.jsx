// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-6 space-x-4">
          <Link to="/" className="font-bold text-blue-600">Top Users</Link>
          <Link to="/trending" className="font-bold text-blue-600">Trending Posts</Link>
          <Link to="/feed" className="font-bold text-blue-600">Feed</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
