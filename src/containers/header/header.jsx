import "./header.styles.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  const info = {
    heading: <>Let's Build Something Amazing with GPT-3 OpenAI!!</>,
    intro: (
      <>
        Have you ever been excited about something? Silly question right? We all
        have! What excites us the most is what we call GPT-3 an extremely
        intelligent AI system that will be the next big thing! We know you've
        visited this site for a reason and since you're here please allow us to
        make it worth your time!
      </>
    ),
    people: (
      <>
        We've had at least 1,600 people request access and visit our site in the
        last 24 hours
      </>
    ),
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{info.heading}</h1>
        <p>{info.intro}</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="image not found" />
          <p>{info.people}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="image not found" />
      </div>
    </div>
  );
}

export default Header;
