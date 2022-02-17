import CopyRigt from "./CopyRight";
import Social from "./Social";
import Statistics from "./Statistics";
import "./Footer.scss";
const Footer = () => {
  let info = {
    characters: 826,
    locations: 126,
    episodes: 51,
    status: true,
  };

  return (
    <div className="footer">
      <Statistics info={info} />
      <Social />
      <CopyRigt />
    </div>
  );
};

export default Footer;
