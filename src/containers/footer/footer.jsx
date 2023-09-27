import "./footer.styles.scss";
import { FooterInfo } from "../../simpleConstants/simpleConstants.jsx";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">{FooterInfo.heading}</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>{FooterInfo.subtext}</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={FooterInfo.gpt3Logo} alt="image not found" />
          <p>{FooterInfo.address}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{FooterInfo.footlinks[0]}</h4>
          <p>{FooterInfo.footlinks[1]}</p>
          <p>{FooterInfo.footlinks[2]}</p>
          <p>{FooterInfo.footlinks[3]}</p>
          <p>{FooterInfo.footlinks[4]}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{FooterInfo.companylinks[0]}</h4>
          <p>{FooterInfo.companylinks[1]}</p>
          <p>{FooterInfo.companylinks[2]}</p>
          <p>{FooterInfo.companylinks[3]}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{FooterInfo.contactlinks[0]}</h4>
          <p>{FooterInfo.contactlinks[1]}</p>
          <p>{FooterInfo.contactlinks[2]}</p>
          <p>{FooterInfo.contactlinks[3]}</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>{FooterInfo.copyright}</p>
      </div>
    </div>
  );
}

export default Footer;
