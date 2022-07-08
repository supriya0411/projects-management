import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import styled from "styled-components";

const NavStyle = styled.nav`
  padding: 1em;
  background: #f7f3e9;
  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 250px;
    height: 100%;
    overflow-y: scroll;
  }
`;
const NavListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  margin-top: 20px;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    color: #333;
  }
  a:visited {
    color: #333;
  }
  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const LeftNav = () => {
  return (
    <NavStyle>
      <img src={logo} alt="Logo" className="w-100" />
      <NavListStyle>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/epics">Epics</Link>
        </li>
      </NavListStyle>
    </NavStyle>
  );
};
export default LeftNav;
