import React from "react";
import "../styles/App.css";
import "../styles/intro.css";
import IntroGun from "../assets/images/interface/intro-gun.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <h2 className="intro-title">Firearms</h2>
        <p className="intro-description">Game-ready low-poly pack of guns that I have been creating for my individual 3D games</p>
        <p className="intro-additional"> The original pack contains 32 models of 3 <strong>claymores</strong>, 3 <strong>hand grenades</strong>, total of 11 models for <strong>silencers</strong> and <strong>iron sights, optical scopes</strong></p>
      </div>
      <div className="gun-box">
        <img className="gun-photo" src={IntroGun} alt="" />
        <p className="favorite">My favourite one is</p>
        <h3 className="favorite-name">L-96</h3>
      </div>
    </div>
  )
}

export default Intro;