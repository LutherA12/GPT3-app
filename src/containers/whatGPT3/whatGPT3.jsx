import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";

function WhatGPT3() {
  const info = {
    heading: <>The possibilities are beyond your imagination!!</>,
    subtext: <>Explore the library</>,
    titleOne: <>What is GPT-3</>,
    textOne: (
      <>
        As we've covered a little bit in the intro, GPT-3 is a cutting edge AI
        that is very similar to Chat GPT with a few key differences! Sounds good
        right? We think so!
      </>
    ),
    titleTwo: <>Chatbots</>,
    textTwo: (
      <>
        These chatbots will be deployed in various places to support the main
        "head" of GPT3. Anyone who signs up now will have free access!
      </>
    ),
    titleThree: <>Knowledgebase</>,
    textThree: (
      <>
        GPT3 pulls from an extensive knowledgebase to give you the widest array
        of answers possible. We are very serious about truth and we want you to
        have all the information you can at your disposel so that you can make
        the most informed decision possible!
      </>
    ),
    titleFour: <>Education</>,
    textFour: (
      <>
        Learning and knowledge, that is what we are all about and we ensure that
        GPT3 is up to speed on the latest and greatest things! Don't believe us?
        We dare you to try it!
      </>
    ),
  };

  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={info.titleOne} text={info.textOne} />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{info.heading}</h1>
        <p>{info.subtext}</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title={info.titleTwo} text={info.textTwo} />
        <Feature title={info.titleThree} text={info.textThree} />
        <Feature title={info.titleFour} text={info.textFour} />
      </div>
    </div>
  );
}

export default WhatGPT3;
