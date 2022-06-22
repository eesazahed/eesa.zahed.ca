import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <header>
      <h1>Eesa Zahed</h1>
      <h3>{props.subtitle}</h3>
      <Navbar />
    </header>
  );
};

export default Header;
