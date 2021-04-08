import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ imgURL, caption, username }) {
  return (
    <div className="container">
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="Justifiable"
            src="/static/images/1.jpg"
          />
          <h3>{username}</h3>
        </div>
        {/* images */}
        <img className="post__image" src={imgURL} alt="" />
        {/* uername + caption */}
        <p className="post__text">
          <strong>{username}</strong> {caption}
        </p>
      </div>
    </div>
  );
}

export default Post;
