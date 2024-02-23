import React from "react";
import PostCard from "./PostCard";

const PostSection = () => {
  const image =
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
  return (
    <div className="flex flex-col gap-5 px-5 ">
      <div className="">
        <h1 className="text-2xl font-bold ">POST</h1>
      </div>
      <PostCard
        image={image}
        title="Title One"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
      <PostCard
        image={image}
        title="Title Two"
        postDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          impedit iusto sunt itaque pariatur temporibus. Aut soluta aliquam in,
          eius sequi eveniet atque ratione dolore. Quia ipsa eveniet quasi
          necessitatibus."
      />
    </div>
  );
};

export default PostSection;
