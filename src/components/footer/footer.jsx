import React from "react";
import '../../app.css';
import './footer.css';
import { ReactComponent as VK } from '../../assets/svgs/vk.svg';
import { ReactComponent as Github } from '../../assets/svgs/github.svg';
import { ReactComponent as Discord } from '../../assets/svgs/discord.svg';
import { ReactComponent as Email } from '../../assets/svgs/email.svg';


const Footer = () => {

  const openLink = (link) => {
    window.open(link);
  }
  const openVK = () => {
    openLink('https://vk.com/piscopancer');
  }
  const openGithub = () => {
    openLink('https://github.com/piscopancer');
  }

  return (
    <footer>
      <div className='contact'>
        <h3 className='contact-title'>Contact me</h3>
        <div className='contact-buttons'>
          <button onClick={openVK}>
            <VK/>
          </button>
          <button onClick={openGithub}>
            <Github/>
          </button>
        </div>
        <div className='contact-notes'>
          <div className='contact-note'>
            <Discord className='contact-icon'/>
            <p>hotdogson#3193</p>
          </div>
          <div className='contact-note'>
            <Email className='contact-icon'/>
            <p>igor.bistr01092003@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='bio'>
        <p className='nickname'>pisco pancer</p>
        <p className='realname'>Быстрицкий Игорь</p>
      </div>
    </footer>
  )
}

export default Footer;