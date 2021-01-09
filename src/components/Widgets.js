import React from "react";
import "../styles/Widgets.css";
import { FiberManualRecord, Info } from "@material-ui/icons";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Hello",
        "How's it goingasdfasdfasdfasd asdfasdf asdfaf fadfasdddd?"
      )}
    </div>
  );
}

export default Widgets;
