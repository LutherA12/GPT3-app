import "./brand.styles.scss";
import { google, slack, atlassian, shopify, dropbox } from "./imports.jsx";

function Brand() {
  const pictures = {
    icons: (
      <>
        <div>
          <img src={google} alt="image not found" />
        </div>
        <div>
          <img src={slack} alt="image not found" />
        </div>
        <div>
          <img src={atlassian} alt="image not found" />
        </div>
        <div>
          <img src={shopify} alt="image not found" />
        </div>
        <div>
          <img src={dropbox} alt="image not found" />
        </div>
      </>
    ),
  };

  return <div className="gpt3__brand section__padding">{pictures.icons}</div>;
}

export default Brand;
