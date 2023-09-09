import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";

function WhatGPT3() {
  const info = {
    heading: <>The possibilities are beyond your imagination!!</>,
    subtext: <>Explore the library</>,
  };

  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{info.heading}</h1>
        <p>{info.subtext}</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
}

export default WhatGPT3;
