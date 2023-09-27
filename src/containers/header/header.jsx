import "./header.styles.scss";
import { HeaderInfo } from "../../simpleConstants/simpleConstants";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{HeaderInfo.heading}</h1>
        <p>{HeaderInfo.intro}</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">{HeaderInfo.text}</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={HeaderInfo.pictures[0]} alt="image not found" />
          <p>{HeaderInfo.people}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={HeaderInfo.pictures[1]} alt="image not found" />
      </div>
    </div>
  );
}

export default Header;
