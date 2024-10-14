import "./SecondSectionFooter.css";
import arrowIcon from "./ArrowIcon.png";

const SecondSectionFooter = () => {
  return (
    <div>
      <img src={arrowIcon} className="arrowIcon1" />
      <a className="textOfPath1">
        The first tool for professional rotoscoping on the web — and also the
        fastest.
      </a>
      console.log();
      <img src={arrowIcon} className="arrowIcon2" />
      <a className="textofPath2">
        Forget downloading plugins for decades-old software.
      </a>
      <img src={arrowIcon} className="arrowIcon3" />
      <a className="textofPath3">
        Export full resolution 4K videos for any project.
      </a>
      <img src={arrowIcon} className="arrowIcon4" />
      <a className="textofPath4">
        Skip the tutorial and get on with your work. It’s not that complicated.
      </a>
    </div>
  );
};

export default SecondSectionFooter;
