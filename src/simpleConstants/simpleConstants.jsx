import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";
import possibility from "../assets/possibility.png";
import logo from "../assets/logo.png";
import people from "../assets/people.png";
import ai from "../assets/ai.png";

export {
  google,
  slack,
  atlassian,
  dropbox,
  shopify,
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  logo,
  possibility,
  people,
  ai,
};

export const pictures = {
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

export const navlinks = {
  menu: (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  ),
  info: [`Sign In`, `Sign Up`],
};

export const BlogInfo = {
  heading: `A lot is happening and we are blogging about it!`,
  blogpics: [blog01, blog02, blog03, blog04, blog05],
  titles: [
    `GPT-3 and Open AI is the future. Come journey with us and explore how it
     works!`,
    `Is AI really dangerous?`,
    `Breaking off the chains of the past!`,
    `Data, Data and more Data!`,
    `What's the point!`,
  ],
  dates: [
    `Sept 8, 2023`,
    `Jan 22 2022`,
    `Oct 10, 2021`,
    `Jul 25, 2021`,
    `Jan 6, 2019`,
  ],
};

export const ArticleInfo = {
  text: `Read Full Article`,
};

export const CtaInfo = {
  title: `Request Early Access to Get Started`,
  subtext: `Register today & start exploring the endless possibilities!`,
  buttonText: `Get Started!`,
};

export const WhatGpt3Info = {
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

export const PossibilityInfo = {
  title: `Request Early Access to Get Started`,
  subtext: `The possibilities are beyond your imagination!!`,
  text: `
      We've tried to save the best for last, but we really believe in our
      product! We know that virtual reality is still in it's infant stages,
      but imagine it: go anywhere, do anything, be anyone, gain knowledge
      beyond what you could without it, there is no limit to what you could
      acheve!`,
  image: possibility,
};

export const FooterInfo = {
  heading: `Do you want to step into the future before others?`,
  subtext: `Request Early Access`,
  gpt3Logo: logo,
  address: `Obscure GPT3 141 Main St, Citytown, USA, All Rights Reserved`,
  footlinks: [`Links`, `Overrons`, `Social Media`, `Counters`, `Contact`],
  companylinks: [`Company`, `Terms & Conditions`, `Privacy Policy`, `About Us`],
  contactlinks: [
    `Get In Touch`,
    `141 Main St, Citytown, USA`,
    `1-800-722-6564`,
    `gpt3@info.net`,
  ],
  copyright: <>&copy; 2021 GPT-3 All Rights Reserved</>,
};

export const HeaderInfo = {
  heading: `Let's Build Something Amazing with GPT-3 OpenAI!!`,
  intro: `
      Have you ever been excited about something? Silly question right? We all
      have! What excites us the most is what we call GPT-3 an extremely
      intelligent AI system that will be the next big thing! We know you've
      visited this site for a reason and since you're here please allow us to
      make it worth your time!`,
  people: `
      We've had at least 1,600 people request access and visit our site in the
      last 24 hours`,
  text: `Get Started!`,
  pictures: [people, ai],
};

export const FeaturesInfo = {
  heading:
    "The Future is Now! You just need to realize it! Step into the future today & make it happen!",
  subtext: "Request Early Access to Get Started!",
};

export const featuresDataOG = [
  {
    title: "Improving End User Mistrust",
    text: "It's very easy to mistrust anyone working with AI, and robotics in general, remember skynet? Well, we aim to rectify that issue and help end users understand that AI is undoubtedly under our control!",
  },
  {
    title: "Becoming Active",
    text: "One of our goals is to become very active in any community we can, and that may mean community service, giving to local churches and food shelters, or anything else we can do to assist!",
  },
  {
    title: "Our message is clear",
    text: "Help people with technology and doing what we can for the community, it's that or nothing!",
  },
  {
    title: "Ethics",
    text: "Ethics are and will always be a large part of AI. Bias is prevelent and we do our best to have as many points of view while coding these systems in order to eliminate as much bias as we can!",
  },
];
