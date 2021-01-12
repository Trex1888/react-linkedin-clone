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
      {newsArticle("JavaScript", "JavaScript and why you should learn it.")}
      {newsArticle("React", "React is the best hands down!")}
      {newsArticle("MERN", "MongoDB/Mongoose Express React Node.")}
      {newsArticle("Tech", "See which tech trends are the most in demand.")}
      {newsArticle(
        "GitHub",
        "This is the place to store your code and projects."
      )}
    </div>
  );
}

export default Widgets;
