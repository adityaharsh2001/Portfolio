import {Container} from "./styles";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer(){
  return(
    <Container>
      <a href="/" className="logo">
        <span>A</span>
        <span>H</span>
      </a>
     

      <div className="social-media">
        <a href="https://www.linkedin.com/in/aditya-harsh-9b3559118" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/adityaharsh2001" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="https://www.instagram.com/geeky_adi/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://discord.com/users/607072384998178842" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
      
    </Container>
  )
}