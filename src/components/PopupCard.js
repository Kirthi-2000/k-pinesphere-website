import React from 'react';
import './PopupCard.css'; // Import your CSS for styles

const PopupCard = ({ id, color, title, content }) => (
  <section className="article">
    <article className={`article__panel article__panel_${color}`} id={`article-${id}`}>
      <div className="article__body">
        <div className="article__container">
          <header className="article__header">
            <h2>{title}</h2>
            <a role="button" href="#0" className="back-link">close</a>
          </header>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
    <a role="button" className={`article__pointer article__pointer_${color}`} href={`#article-${id}`}>
      <span className={`article__layer article__layer_${color}`} role="presentation"></span>
      {title}
    </a>
  </section>
);

export default PopupCard;