import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";

function WhatGPT3() {
  const info = {
    heading: `The possibilities are beyond your imagination!!`,
    subtext: `Explore the library`,
    titles: [`What is GPT-3`, `Chatbots`, `Knowledgebase`, `Education`],
    texts: [
      `As we've covered a little bit in the intro, GPT-3 is a cutting edge AI
       that is very similar to Chat GPT with a few key differences! Sounds good
       right? We think so!`,

      `These chatbots will be deployed in various places to support the main
       "head" of GPT3. Anyone who signs up now will have free access!`,

      `GPT3 pulls from an extensive knowledgebase to give you the widest array
       of answers possible. We are very serious about truth and we want you to
       have all the information you can at your disposel so that you can make
       the most informed decision possible!`,

      `Learning and knowledge, that is what we are all about and we ensure that
       GPT3 is up to speed on the latest and greatest things! Don't believe us?
       We dare you to try it!`,
    ],
  };

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={info.titles[0]} text={info.texts[0]} />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{info.heading}</h1>
        <p>{info.subtext}</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title={info.titles[1]} text={info.texts[1]} />
        <Feature title={info.titles[2]} text={info.texts[2]} />
        <Feature title={info.titles[3]} text={info.texts[3]} />
      </div>
    </div>
  );
}

export default WhatGPT3;
