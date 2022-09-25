import React from "react";
import '../../app.css';
import './software-card.css';

const SoftwareCard = (props) => {
  return (
    <div className='software-card'>
      <div className='app'>
        <img className='icon' src={props.icon} alt={''}/>
        <p className='name'>{props.name}</p>
      </div>
      <p className='summary'>{props.summary}</p>
    </div>
  )
}

export default SoftwareCard;