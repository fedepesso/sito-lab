import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Card, Button, CardDeck } from 'react-bootstrap';
import './index.css';


const list = [
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Prima'},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Seconda'},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Terza'},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quarta'},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quinta'},

]

// la costante list dovra' essere sostuita dal risultato di una chiamata al db


const Seeder = (tipo) => {
  let res = list.map((e,i) => {
    return (
      <Card Style='margin: 30px 30px 0px 30px'>
        <Card.Body>
          <Card.Title Style='font-size: 35px'>{e.titolo}</Card.Title>
          <Card.Text Style='font-size: 18px'>
            {e.descrizione}
          </Card.Text>
          <Button variant="danger" Style='font-size:15px' onClick={Raid}>Visualizza il protoccolo di Laboratorio</Button>
        </Card.Body>
        <Card.Footer>
          Esperienza pensata per classi di {e.classe}
        </Card.Footer>
      </Card>)
  })

  let seed =[]
  for(let i = 0; i<res.length; i+=3){
    let deck = res.slice(i, i+3)
    seed.push(<CardDeck>{deck}</CardDeck>)
  }
  return seed
}



function App() {
  return (
    <div className="App">
      <Seeder />
    </div>
  );
}


function DefaultNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Esperienze di Laboratorio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Primo anno</Nav.Link>
        <Nav.Link href="#features">Secondo anno</Nav.Link>
        <Nav.Link href="#features">Terzo anno</Nav.Link>
        <Nav.Link href="#features">Quarto anno</Nav.Link>
        <Nav.Link href="#features">Quinto anno</Nav.Link>
      </Nav>
    </Navbar>)
}



function Raid(){
    fetch(`/api/Fill`)
        .then(data => data.json())
        .then(success => {
            ReactDOM.render(
                <div Style="color : white; text-align : center">
                    {success.data}
                    <br></br>
                    <Button variant="info" Style='font-size:15px' onClick={Home}>Home</Button>
                </div>,
                document.getElementById('root')
            )
            console.log(success.data)
        });
}

function Home(){
    ReactDOM.render(
    <div>
        <DefaultNav />
        <App />
    </div>,
    document.getElementById('root')
    );
}

Home()