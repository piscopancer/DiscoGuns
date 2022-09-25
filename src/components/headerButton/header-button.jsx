import React from "react";
import '../../app.css';
import "./header-button.css";

const HeaderButton = (props) => {
  const link = props.link;
  const openLink = () => {
    window.open(link);
  }
  return (
    <button className="header-button" onClick={openLink}>
      <p className="label">{props.label}</p>
    </button>
  )
}

export default HeaderButton;