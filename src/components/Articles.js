import React from "react";

function Articles() {
  return (
    <div className="article-container">
      <div className="article-box">
        <div className="article-card">
          {/* Updated alt attribute */}
          <img src="assets/img/article-1.jpg" alt="Incense fragrances" />
          <div className="article-content">
            <h3>The story of how our famous incense fragrances are created</h3>
            <p>5K views • 12 hours ago</p>
          </div>
        </div>
        <div className="article-card">
          {/* Updated alt attribute */}
          <img src="assets/img/article-2.jpg" alt="Natural aroma candles" />
          <div className="article-content">
            <h3>Natural ingredients for the manufacture of aroma candles</h3>
            <p>3K views • 1 day ago</p>
          </div>
        </div>
      </div>
      <a href="/" className="article-button">
        All articles
      </a>
    </div>
  );
}

export default Articles;
