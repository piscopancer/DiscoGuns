import React from "react";
import "../styles/App.css";
import "../styles/header-button.css"

const HeaderButton = (props) => {
  return (
    <button className="header-button">
      <p className="label">{props.label}</p>
    </button>
  )
}

export default HeaderButton;