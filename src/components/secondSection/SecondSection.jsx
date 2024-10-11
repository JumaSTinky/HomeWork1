import "./SecondSection.css";
import pictireInSecondBlock from "../secondSection/pictireInSecondBlock.png";

const SecondSection = () => {
  return (
    <div className="secondContainer">
      <a className="description">VIDEO TOOLS</a>
      <p className="title">Introducing Green Screen</p>
      <a className="descriptionText">
        A professional grade tool for cutting objects out of videos with
        <a className="boldText">just one click</a>. All from inside your
        browser.
      </a>
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
