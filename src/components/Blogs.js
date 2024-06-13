import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <section id="blogs">
      <h2>Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </section>
  );
};

export default Blogs;
