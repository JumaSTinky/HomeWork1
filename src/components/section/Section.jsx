import "./Section.css";
import picture from "../section/picture.png";
const Section = () => {
  return (
    <div className="container2">
      <p className="paragraph">Make the Impossible</p>
      <img src={picture} alt="picture" className="picture" />
      <a className="text1">Create and edit content like never before.</a>
      <a className="text2">
        Your next generation creative toolkit — powered by machine learning.
      </a>
      <button className="button">Try Runway for free</button>
      <button className="signUp2">Sign up</button>
    </div>
  );
};

export default Section;
