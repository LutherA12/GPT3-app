import "./article.styles.scss";
import { ArticleInfo } from "../../simpleConstants/simpleConstants";

function Article({ imgUrl, date, title }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="image not found" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{ArticleInfo.text}</p>
      </div>
    </div>
  );
}

export default Article;
