import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <img src="/LOGO.jpg" alt="LogoKasa"></img>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="underline">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/apropos" activeClassName="underline">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
