// src/pages/TrendingPosts.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts/type-popular?type=popular")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Posts (Most Comments)</h2>
      {posts.map((post, i) => (
        <div key={i} className="p-4 bg-white rounded shadow mb-3">
          <p><strong>Post ID:</strong> {post.id}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
