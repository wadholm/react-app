import React from "react";
import image from "../img/what.jpg";

function Article() {
  return (
    <div className="article-container">
    <div className="article-div">
<header>
    <h1>Vanilla JS Generic App</h1>
</header>
<article>
    <p>This is a sample web page, displaying interesting facts about numbers, gathered from the <a href="http://numbersapi.com/">NUMBERSAPI</a>. This web page is created as part of an experiment for my bachelor&apos;s free thesis at Blekinge Institute of Technology. </p>
</article>
</div>
<div className="img-div">
<img src={image} alt="What?" width="100%"/>
<p className="img-tag">Photo by <a href="https://unsplash.com/@dylan_nolte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">dylan nolte</a> on <a href="https://unsplash.com/photos/RSsqjpezn6o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>
</div>
</div>
  );
}

export default Article;
