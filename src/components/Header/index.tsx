// Styling Imports
import { HeaderContainer } from "./styles";

// Strategic Imports
import { NavLink } from "react-router-dom";

// Icons Imports
import { Scroll, Timer } from "phosphor-react";

// Image Imports
import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
