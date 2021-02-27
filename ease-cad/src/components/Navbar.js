import React from "react";
import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import Logoz from "../img/logo_easeb.png";

const Nav = styled.nav`

  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLink = css`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 100;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
  color: #000;
  font-style: italic;
`;
const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 0.001;
  right: 0;
  transform: translate(-50, 25%);
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right:-48px;

@media screen and (max-width: 768px){
  display: none;
}
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  color: #000;
`;

const NavBtn = styled.div`
align-items: center;
margin-right: 24px;
display: flex;

@media screen and (max-width: 768px){
  display: none;
}
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo><img src={Logoz} width="110px" height="110px"/> </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
    
        <Button to="/contact" primary='true' style={{borderRadius: 40}}>Contact us</Button>
        
      </NavBtn>
    </Nav>
  );
};
