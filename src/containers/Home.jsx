import Card from "../components/Card/Card";
import Logo from "../components/Logo/Logo";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  let info = {
    title: "Rick-D99",
    media: "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
    subTitle: "Alive - Human",
    location: "Earth (Replacement Dimension)",
    firstSeen: "Big Trouble in Little Sanchez",
  };

  return (
    <div className="home">
      <header>
        <div className="navbar">
          <Nav />
        </div>
        <Logo />
      </header>

      <div className="list">
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
        <Card info={info} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
