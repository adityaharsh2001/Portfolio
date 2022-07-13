import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
// import CV from '../../assets/CV.pdf'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Aditya Harsh 👽</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <br />
          <br />
          <h3>
            Self-taught Full-Stack Developer
            <br></br>
            Institute-Made Engineer
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <p className="small-resume">
            <br />
            I am a Full-Stack Software Developer specialised in backend
            applications and have a good knowledge of front-end technologies as
            well. I started web development in 2022 and acquired a strong
            knowledge and expertise in this field over time.
            <br />
            <br />I am a great software engineer and why you should hire me. For
            a more formal introduction, you can have a look at the my Resume  
            <a
              href="https://drive.google.com/file/d/1dTrsBGb7Ivz05m-wbOYBXvKQQWDAYHf0/view?usp=sharing"
              className="resume_link"
            >
              View My Resume
            </a>
            . And if want to read more about me in details,{" "}
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1.4 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#about" className="button">
              Read More About
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
