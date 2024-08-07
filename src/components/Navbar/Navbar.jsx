import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <header>
      <nav>
        <img src="/LOGO.jpg" alt="LogoKasa" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
