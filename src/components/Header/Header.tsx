import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

// import CV from '../../assets/CV.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  // function closeMenu() {
  //   setActive(false)
  // }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>AH</span>
          {/* <span></span> */}
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
            <NavHashLink smooth to="#home" >Home</NavHashLink>
            <NavHashLink smooth to="#about">About</NavHashLink>
            <NavHashLink smooth to="#portfolio">Portfolio</NavHashLink>
            <NavHashLink smooth to="#Contact">Contact</NavHashLink>
            <a href='https://drive.google.com/file/d/1dTrsBGb7Ivz05m-wbOYBXvKQQWDAYHf0/view?usp=sharing' download className="button">CV</a>
          </nav>


        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
