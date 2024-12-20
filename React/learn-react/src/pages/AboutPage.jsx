import { useEffect, useState } from "react";
import instance from "../axios";

function AboutPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await instance.get("/posts");
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  const handleLike = (id) => {
   setPost((prevPosts) => 
    prevPosts.map((post) =>
      post.id === id 
   ? { ...post, reactions: { ...post.reactions, likes: post.reactions.likes +1 }} :post
    )
  )
  }

  const handleDislike = (id) => {
    setPost((prevPosts) => 
     prevPosts.map((post) => 
      post.id === id 
    ? { ...post,reactions: { ...post.reactions, dislikes: post.reactions.dislikes +1}} :post
    )
  )
  }
  return (
    <>
      <div className="container">
        <h1>Post</h1>
        <div className="row">
          {post.map((post) => (
            <div className="col-md-3" key={post.id}>
              <div className="card h-100 shadow">
                <div className="card-body">
                <h2 className="card-header badge bg-success uppercase">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                </div>
                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="badge bg-secondary mx-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div>
                    <button className="btn btn-primary" onClick={() => handleLike(post.id)}>
                      👍 {post.reactions.likes}
                    </button>
                    <button className="btn btn-danger ms-2" onClick={()=> handleDislike(post.id)}>
                      👎 {post.reactions.dislikes}
                    </button>
                  </div>
                  <p className="text-end mb-0">{post.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutPage;
