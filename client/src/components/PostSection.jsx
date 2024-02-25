import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const PostSection = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/news");
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const image =
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";

  return (
    <div className="flex flex-col gap-5 px-5 ">
      <div className="">
        <h1 className="text-2xl font-bold ">POST</h1>
      </div>
      {post.map(({ id, description, title, category, atuhor,date,newsImage }) => (
        <PostCard key={id} image={newsImage} title={title} postDesc={description} category={category} date={date}/>
      ))}
    </div>
  );
};

export default PostSection;
