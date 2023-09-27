import "./blog.styles.scss";
import { Article } from "../../components/componentExports";
import { BlogInfo } from "../../simpleConstants/simpleConstants.jsx";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">{BlogInfo.heading}</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={BlogInfo.blogpics[0]}
            date={BlogInfo.dates[0]}
            title={BlogInfo.titles[0]}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={BlogInfo.blogpics[1]}
            date={BlogInfo.dates[1]}
            title={BlogInfo.titles[1]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[2]}
            date={BlogInfo.dates[2]}
            title={BlogInfo.titles[2]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[3]}
            date={BlogInfo.dates[3]}
            title={BlogInfo.titles[3]}
          />
          <Article
            imgUrl={BlogInfo.blogpics[4]}
            date={BlogInfo.dates[4]}
            title={BlogInfo.titles[4]}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
