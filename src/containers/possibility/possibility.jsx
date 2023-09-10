import "./possibility.styles.scss";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  const info = {
    title: <>Request Early Access to Get Started</>,
    subtext: <>The possibilities are beyond your imagination!!</>,
    text: (
      <>
        We've tried to save the best for last, but we really believe in our
        product! We know that virtual reality is still in it's infant stages,
        but imagine it: go anywhere, do anything, be anyone, gain knowledge
        beyond what you could without it, there is no limit to what you could
        acheve!
      </>
    ),
  };

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="image not found" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>{info.title}</h4>
        <h1 className="gradient__text">{info.subtext}</h1>
        <p>{info.text}</p>
        <h4>{info.title}</h4>
      </div>
    </div>
  );
}

export default Possibility;
