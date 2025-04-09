// src/pages/Feed.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3001/posts/type-popular?type=latest")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Live Feed (Latest Posts)</h2>
      {posts.map((post, i) => (
        <div key={i} className="p-4 bg-white rounded shadow mb-3">
          <p><strong>Post ID:</strong> {post.id}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
