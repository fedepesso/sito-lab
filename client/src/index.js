import React from 'react'
import ReactDOM from 'react-dom'
import {Nav, Navbar, Jumbotron, Carousel} from 'react-bootstrap'
import { Section } from './section.js'
import m_img_0 from "./images/main_page_0.jpg"
import m_img_1 from "./images/main_page_1.jpg"
import m_img_2 from "./images/main_page_2.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'

const Homepage = function(){
    return(
        <div Style='text-align:center'>
            <div Style="margin: 60px 30px; color: white;">
            <Jumbotron className='bg-secondary text-white'>
              <h1>Benvenuto nel portale del laboratorio di scienze!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
            </Jumbotron>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; 
            and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. 
            These cases are perfectly simple and easy to distinguish. 
            In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. 
            But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. 
            The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            <Carousel style={{'margin-top': '20px', 'margin-left': '135px', 'margin-right': '135px'}}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={m_img_0}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={m_img_1}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={m_img_2}
                />
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}

export function DefaultNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand onClick={Home}>Esperienze di Laboratorio</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link type='button' onClick={() => Section('Prima')} >Primo anno</Nav.Link>
            <Nav.Link type='button' onClick={() => Section('Seconda')} >Secondo anno</Nav.Link>
            <Nav.Link type='button' onClick={() => Section('Terza')} >Terzo anno</Nav.Link>
            <Nav.Link type='button' onClick={() => Section('Quarta')} >Quarto anno</Nav.Link>
            <Nav.Link type='button' onClick={() => Section('Quinta')} >Quinto anno</Nav.Link>
          </Nav>
        </Navbar>)
  }

export const Home = function (){
    ReactDOM.render(
      <div>
        <DefaultNav />
        <div class='content_wrapper'><Homepage /></div>
      </div>,
    document.getElementById('root')
    );
}

Home()