import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem} from "@nextui-org/react";
// import {AcmeLogo} from "../assets/imgs/AcmeLogo";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default function App() {

  const handleNavigation = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

 
  return (
    <Navbar 
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">SECURTY</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">SECURTY FOR YOU</p>
        </NavbarBrand>
        <NavbarItem>
          <a color="foreground" href="#network" onClick={(event) => handleNavigation(event, 'network')}>
            Network
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="#cyber-attack" onClick={(event) => handleNavigation(event, 'cyber-attack')}>
            Cyber Attack
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="#protect-attack" onClick={(event) => handleNavigation(event, 'protect-attack')}>
            Protect Attack
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
