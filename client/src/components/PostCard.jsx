import React from "react";

const PostCard = ({ image, title, postDesc, category, atuhor, date }) => {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "UTC",
  });

  return (
    <div className="p-5 bg-red-50 flex rounded-3xl">
      <img src={image} alt="Image not available" className="h-32 rounded-xl" />
      <div className="px-5">
        <h1 className="font-bold text-2xl underline underline-offset-4 ">
          {title}
        </h1>
        <p className="line-clamp-3 text-justify text-lg">{postDesc}</p>
        <p className="text-xs">
          <span className="pr-2">{formattedDate}</span>
          {category}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
