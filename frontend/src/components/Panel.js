import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleIcon from "@material-ui/icons/People";
import "../styles/dashboard.css";

const Panel = ({ likedposts }) => {
  return (
    <div className="panel">
      <div>
        Liked <FavoriteIcon style={{ cursor: "pointer", fontSize: 70 }} />
      </div>
      <div>
        Followed <PeopleIcon style={{ cursor: "pointer", fontSize: 70 }} />
      </div>
      <div>
        Home <HomeIcon style={{ cursor: "pointer", fontSize: 70 }} />
      </div>
    </div>
  );
};

export default Panel;
