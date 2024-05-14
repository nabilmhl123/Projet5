import { NavLink } from "react-router-dom";

function Navbar() {
  return (
   <header>
    <nav>
      <img src="/LOGO.jpg" alt="LogoKasa"></img>
      <ul>
        <NavLink to='/' className={({isActive}) => (isActive ? "underline" : "")}> 
        <li>Accueil</li>
        </NavLink>
        
        <NavLink to='/apropos' className={({isActive}) => (isActive ? "underline" : "")}> 
        <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
   </header>
  )
}

export default Navbar;