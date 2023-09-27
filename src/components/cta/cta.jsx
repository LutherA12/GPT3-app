import "./cta.styles.scss";
import { CtaInfo } from "../../simpleConstants/simpleConstants";

function Cta() {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{CtaInfo.title}</p>
        <h3>{CtaInfo.subtext}</h3>
      </div>

      <div className="gpt3__cta-btn">
        <button type="button">{CtaInfo.buttonText}</button>
      </div>
    </div>
  );
}

export default Cta;
