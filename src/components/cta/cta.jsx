import "./cta.styles.scss";

function Cta() {
  const info = {
    title: `Request Early Access to Get Started`,
    subtext: `Register today & start exploring the endless possibilities!`,
    buttonText: `Get Started!`,
  };

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{info.title}</p>
        <h3>{info.subtext}</h3>
      </div>

      <div className="gpt3__cta-btn">
        <button type="button">{info.buttonText}</button>
      </div>
    </div>
  );
}

export default Cta;
