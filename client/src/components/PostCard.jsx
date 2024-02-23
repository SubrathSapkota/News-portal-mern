import React from "react";

const PostCard = ({ image, title, postDesc }) => {
  return (
    <div className="p-5 bg-red-50 flex rounded-3xl">
      <img src={image} alt="" className="h-32 rounded-xl" />
      <div className="px-5">
        <h1 className="font-bold text-2xl underline underline-offset-4 pb-2">
          {title}
        </h1>
        <p className="line-clamp-3 text-justify text-lg">{postDesc}</p>
      </div>
    </div>
  );
};

export default PostCard;
