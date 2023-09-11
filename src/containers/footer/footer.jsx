import "./footer.styles.scss";
import { logo } from "../../assets/imports";

function Footer() {
  const info = {
    heading: `Do you want to step into the future before others?`,
    subtext: `Request Early Access`,
    gpt3Logo: logo,
    address: `Obscure GPT3 141 Main St, Citytown, USA, All Rights Reserved`,
    footlinks: [`Links`, `Overrons`, `Social Media`, `Counters`, `Contact`],
    companylinks: [
      `Company`,
      `Terms & Conditions`,
      `Privacy Policy`,
      `About Us`,
    ],
    contactlinks: [
      `Get In Touch`,
      `141 Main St, Citytown, USA`,
      `1-800-722-6564`,
      `gpt3@info.net`,
    ],
    copyright: <>&copy; 2021 GPT-3 All Rights Reserved</>,
  };

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">{info.heading}</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>{info.subtext}</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={info.gpt3Logo} alt="image not found" />
          <p>{info.address}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{info.footlinks[0]}</h4>
          <p>{info.footlinks[1]}</p>
          <p>{info.footlinks[2]}</p>
          <p>{info.footlinks[3]}</p>
          <p>{info.footlinks[4]}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{info.companylinks[0]}</h4>
          <p>{info.companylinks[1]}</p>
          <p>{info.companylinks[2]}</p>
          <p>{info.companylinks[3]}</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>{info.contactlinks[0]}</h4>
          <p>{info.contactlinks[1]}</p>
          <p>{info.contactlinks[2]}</p>
          <p>{info.contactlinks[3]}</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>{info.copyright}</p>
      </div>
    </div>
  );
}

export default Footer;
