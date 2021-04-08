import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      imgURL:
        "https://d2.alternativeto.net/dist/listheaders//list-4097-1530878541-cover.png?format=jpg&width=1520&height=760&mode=crop",
      username: "Justifiable",
      caption: "What a beautiful day!",
    },
    {
      imgURL: "https://sandilands.info/sgordon/images/math-example.png",
      username: "viincyy",
      caption: "How can I do it?",
    },
    {
      imgURL:
        "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
      username: "itdev126",
      caption: "Ahm boiz!!!",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImg"
          src="https:www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          imgURL={post.imgURL}
          caption={post.caption}
          username={post.username}
        />
      ))}
    </div>
  );
}

export default App;
