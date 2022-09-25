import React from "react";
import '../../app.css';
import './headline.css';

const Headline = (props) => {
  return (
    <h2 className='headline'>{props.text}</h2>
  )
}

export default Headline;