import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";
import { WhatGpt3Info } from "../../simpleConstants/simpleConstants";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={WhatGpt3Info.titles[0]} text={WhatGpt3Info.texts[0]} />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{WhatGpt3Info.heading}</h1>
        <p>{WhatGpt3Info.subtext}</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title={WhatGpt3Info.titles[1]} text={WhatGpt3Info.texts[1]} />
        <Feature title={WhatGpt3Info.titles[2]} text={WhatGpt3Info.texts[2]} />
        <Feature title={WhatGpt3Info.titles[3]} text={WhatGpt3Info.texts[3]} />
      </div>
    </div>
  );
}

export default WhatGPT3;
