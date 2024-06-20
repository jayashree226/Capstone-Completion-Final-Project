import "./Footer.css";
import Contact from "../Pages/Contact";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <nav className="footbar">
      {/* <a href="#">Contact</a> */}
      <Link to="/contact">Contact</Link>
      {/* <div className="socialIcon">
      <img src="https://img.icons8.com/?size=96&id=118497&format=png" alt="follow us" />
      </div> */}
    </nav>
  );
}

export default Footer;
