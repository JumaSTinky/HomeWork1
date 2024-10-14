import "./SecondSection.css";
import pictireInSecondBlock from "./pictireInSecondBlock.png";

const SecondSection = () => {
  return (
    <div className="secondContainer">
      <p className="description">VIDEO TOOLS</p>
      <p className="title">Introducing Green Screen</p>
      <p className="descriptionText">
        A professional grade tool for cutting objects out of videos with
        <a className="boldText">just one click</a>. All from inside your
        browser.
      </p>
      <a className="secondDescriptionText">
        Say goodbye to clumsy plug-ins and expensive software suites.
      </a>
      <button className="changeColorButton">Try Green Screen</button>
      <img
        src={pictireInSecondBlock}
        alt="picture"
        className="howToRepairVideoPicture"
      />
    </div>
  );
};

export default SecondSection;
