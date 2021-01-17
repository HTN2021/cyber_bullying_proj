import React, { useState } from "react";
import "../styles/dashboard.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = ({ key, post, likedposts, changeLikedPosts }) => {
  const [liked, changeLiked] = useState(false);
  return (
    <div className="message" key={key}>
      <h5>{post.name}</h5>
      <p>{post.post}</p>
      {liked ? (
        <FavoriteIcon
          onClick={(e) => {
            changeLiked(!liked);
            changeLikedPosts(
              likedposts.filter((pst) => {
                return pst.id !== post.id;
              })
            );
          }}
          style={{ cursor: "pointer", fontSize: 70 }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={(e) => {
            changeLiked(!liked);
            changeLikedPosts(likedposts.push(post));
          }}
          style={{ cursor: "pointer", fontSize: 70 }}
          className="icons"
        />
      )}
      {""}
    </div>
  );
};

export default Post;
