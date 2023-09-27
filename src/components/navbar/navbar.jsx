import "./navbar.styles.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { logo } from "../../simpleConstants/simpleConstants.jsx";
import { navlinks } from "../../simpleConstants/simpleConstants.jsx";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">{navlinks.menu}</div>
      </div>

      <div>
        <form className="gpt3__navbar-sign">
          <p>{navlinks.info[0]}</p>
          <button type="submit">{navlinks.info[1]}</button>
        </form>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {navlinks.menu}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>{navlinks.info[0]}</p>
              <button type="button">{navlinks.info[1]}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
