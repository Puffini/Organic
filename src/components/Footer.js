
import { config } from "../config";
import '../fonts.css'
import logo5 from '../img/telegram.svg'
import logo6 from '../img/twitter.svg'
import logo7 from '../img/discord.svg'
import logo8 from '../img/wp.svg'
import logo9 from '../img/tel.svg'


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__logo">
        <div><a href={config.scanLink} target="__blank" >
            <img src={logo5} className="pull_logo2" alt=""/>
        </a> </div> 
        <div><a href={config.whitepaperLink} target="__blank" >       
            <img src={logo8} className="pull_logo2" alt=""/>
        </a></div>
        <div> <a href={config.telegramLink} target="__blank" >       
            <img src={logo9} className="pull_logo2" alt=""/>
        </a></div>
        <div><a href={config.twitterLink} target="__blank">
            <img src={logo6} className="pull_logo2" alt=""/>
        </a></div>
        <div><a href={config.discordLink} target="__blank">
            <img src={logo7} className="pull_logo2" alt=""/>
            
        </a></div>
        </div>
        <div className="footer__discrip" id="socials">
            <p className="footer__address">Official Contract Address: 0x6E9F1eAaD6d53e68Cb16fC5C3b1Cb9b14922fdA2</p>
            <p className="footer__reserved">©Organic Farm, All Rights Reserved</p>
        </div>
        
    </div>
  );
}
