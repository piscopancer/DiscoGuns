import React from "react";
import HeaderButton from "./header-button";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="company">
        <h1 className="company-name">PISCO GUNS</h1>
      </div>
      <div className="buttons">
        <HeaderButton label="VK"/>
        <HeaderButton label="Github"/>
      </div>
    </div>
  )
}

export default Header;