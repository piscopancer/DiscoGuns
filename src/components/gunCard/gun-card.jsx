import React from "react";
import '../../app.css';
import './gun-card.css';

const GunCard = (props) => {
  return (
    <div className="gun-card">
      <img className="gun-image" src={props.gunImage} alt="" />
      <p className="gun-name">{props.gunName}</p>
    </div>
  )
}

export default GunCard;