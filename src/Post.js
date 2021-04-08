import React from "react";
import "./Post.css";
function Post() {
  return (
    <div className="container">
      <h3>Justifiable</h3>
      {/* images */}
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIwfHxsb2FkfGVufDB8fHx8MTYxNTgxODMwOA&ixlib=rb-1.2.1&q=80&w=2000 300w,
                            https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIwfHxsb2FkfGVufDB8fHx8MTYxNTgxODMwOA&ixlib=rb-1.2.1&q=80&w=2000 600w,
                            https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIwfHxsb2FkfGVufDB8fHx8MTYxNTgxODMwOA&ixlib=rb-1.2.1&q=80&w=2000 1000w,
                            https://images.unsplash.com/photo-1523478482487-1eed2b3d9939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIwfHxsb2FkfGVufDB8fHx8MTYxNTgxODMwOA&ixlib=rb-1.2.1&q=80&w=2000 2000w"
        alt=""
      />
      {/* uername + caption */}
      <p className="post__text">
        <strong>Justifiable</strong> What a beautiful day!
      </p>
    </div>
  );
}

export default Post;
