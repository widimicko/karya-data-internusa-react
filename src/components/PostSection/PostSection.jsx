import { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost:8000/";

  useEffect(() => {
    axios.get(`${baseUrl}api/post`).then((res) => {
      res.status && setPosts(res.data.posts);
    });

    return () => {};
  }, []);

  return (
    <section id="post" className="post">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Post</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </header>

        <div
          className="row gy-4 post-container justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {posts.length ? (
            posts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 post-item">
                <div className="post-wrap">
                  <img
                    src={`${baseUrl}storage/${post.image}`}
                    className="img-fluid"
                    alt={post.title}
                  />
                  <div className="post-info">
                    <h4>{post.title}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">There's no data available yet</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostSection;
