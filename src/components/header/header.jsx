import React from "react";
import HeaderButton from "../headerButton/header-button";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="company">
          <h1 className="company-name">PISCO GUNS</h1>
        </div>
        <div className="buttons" >
          <HeaderButton label="VK" link="https://vk.com/piscopancer"/>
          <HeaderButton label="Github" link="https://github.com/piscopancer"/>
        </div>
      </div>
    </div>
  )
}

export default Header;