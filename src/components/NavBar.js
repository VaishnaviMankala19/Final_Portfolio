import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/img/logo.png';
import navIcon1 from '../Assets/img/nav-icon1.svg';
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink , setActiveLink] = useState('home');
    const [scrolled , setScrolled] = useState('false');

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll',onScroll);
    })

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/vaishnavi-mankala-33a256252/'><img src={navIcon1} alt=''/></a>
                <a href='#'><img src={navIcon2} alt=''/></a>
                <a href='https://github.com/VaishnaviMankala19'><img src={navIcon3} alt=''/></a>
            </div>
            <Nav.Link href="#connect"  onClick={()=>onUpdateActiveLink('connect')}>
                <button className='vvd'><span>Let's Connect</span></button>
            </Nav.Link>
        </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
