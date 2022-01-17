import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="Contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:adityaharsh118@gmail.com">adityaharsh118@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+917488123552">(91) 7488123552</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}