import "./blog.styles.scss";
import { Article } from "../../components/componentExports";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets/imports";

function Blog() {
  const info = {
    heading: `A lot is happening and we are blogging about it!`,
    blogpics: [blog01, blog02, blog03, blog04, blog05],
    titles: [
      `GPT-3 and Open AI is the future. Come journey with us and explore how it
       works!`,
      `Is AI really dangerous?`,
      `Breaking off the chains of the past!`,
      `Data, Data and more Data!`,
      `What's the point!`,
    ],
    dates: [
      `Sept 8, 2023`,
      `Jan 22 2022`,
      `Oct 10, 2021`,
      `Jul 25, 2021`,
      `Jan 6, 2019`,
    ],
  };

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">{info.heading}</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={info.blogpics[0]}
            date={info.dates[0]}
            title={info.titles[0]}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={info.blogpics[1]}
            date={info.dates[1]}
            title={info.titles[1]}
          />
          <Article
            imgUrl={info.blogpics[2]}
            date={info.dates[2]}
            title={info.titles[2]}
          />
          <Article
            imgUrl={info.blogpics[3]}
            date={info.dates[3]}
            title={info.titles[3]}
          />
          <Article
            imgUrl={info.blogpics[4]}
            date={info.dates[4]}
            title={info.titles[4]}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
