import "./Footer.css";
import bigArrowIcon from "../footer/bigArrowIcon.png";
import textIcon from "../footer/text.png";

const Footer = () => {
  return (
    <div className="footersContainer">
      <img src={bigArrowIcon} className="BigArrowIcon" />
      <p className="topicOfFooter1">Get Started</p>

      <p className="topicOfFooter2">Now</p>

      <img src={textIcon} className="textIcon" />
      <a className="descriptionOfFooter1">FEATURES</a>

      <a className="descriptionOfFooter2">Green Screen</a>
      <a className="descriptionOfFooter3">Generative Media</a>
      <a className="descriptionOfFooter4">Face Animation (Soon)</a>
      <a className="descriptionOfFooter5">Model Playground</a>
      <a className="descriptionOfFooter6">Training</a>
      <a className="descriptionOfFooter7">Hosted Models</a>

      <a className="descriptionOfFooter8">RESOURSES</a>

      <a className="descriptionOfFooter9">Educators</a>
      <a className="descriptionOfFooter10">Blog</a>
      <a className="descriptionOfFooter11">Learn & Docs</a>
      <a className="descriptionOfFooter12">Support</a>
      <a className="descriptionOfFooter13">Python SDK</a>
      <a className="descriptionOfFooter14">Made With</a>
      <a className="descriptionOfFooter15">Sign up</a>
      <a className="descriptionOfFooter16">Log in</a>

      <a className="descriptionOfFooter8">RUNWAY</a>

      <a className="descriptionOfFooter9">About</a>
      <a className="descriptionOfFooter10">Careers</a>
      <a className="descriptionOfFooter11">System Status</a>
      <a className="descriptionOfFooter12">Release Notes</a>
      <a className="descriptionOfFooter13">Join our Slack</a>
      <a className="descriptionOfFooter14">YouTube</a>
      <a className="descriptionOfFooter15">Twitter</a>
      <a className="descriptionOfFooter16">Contact Us</a>

      <a className="descriptionOfFooter17">2021 Runway AI, Inc.</a>
      <a className="descriptionOfFooter18">Code of Conduct</a>
      <a className="descriptionOfFooter19">Privacy Policy</a>
      <a className="descriptionOfFooter19">CCPA</a>
      <a className="descriptionOfFooter20">Terms and Conditions</a>
    </div>
  );
};

export default Footer;
