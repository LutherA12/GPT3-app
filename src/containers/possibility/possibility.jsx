import "./possibility.styles.scss";
import { PossibilityInfo } from "../../simpleConstants/simpleConstants";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityInfo.image} alt="image not found" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>{PossibilityInfo.title}</h4>
        <h1 className="gradient__text">{PossibilityInfo.subtext}</h1>
        <p>{PossibilityInfo.text}</p>
        <h4>{PossibilityInfo.title}</h4>
      </div>
    </div>
  );
}

export default Possibility;
