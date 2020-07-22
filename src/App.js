/*
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
          <Button variant="danger" Style='font-size:15px' onClick={Raid()}>Visualizza il protoccolo di Laboratorio</Button>
        </Card.Body>
        <Card.Footer>
          Esperienza pensata per classi di {e.classe}
        </Card.Footer>
      </Card>)
  })

  let numDecks = res.length/3
  console.log(numDecks)
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

function Protocol(e){
  return(
    <div>
      <p>{e}</p>
    </div>
  )
}

function Raid(){
  let e=fetch(`/api/Fill`)
  Protocol(e)
}


ReactDOM.render(
  <div>
    <DefaultNav />
    <App />
  </div>,
  document.getElementById('root')
);

*/

//defaultnav e' semplicemente la navbar che resta costante nel tempo quindi mi sembrava giusto separarla dal resto dell'app
//la funzione seeder crea deck di card da 3 con all'interno un titolo, una descrizione, un pulsante che portera' all protocollo, e un footer stupido
//le esperienze che verranno messe nelle card dovranno avere gli stessi attributi del lorem ipsum mentre la pagina del singolo protocollo avra' solo il protocollo in se' e non la descrizione
//App e' diciamo il body della pagina, la parte che verra' modificata quando si cercheranno le varie esperienze filtrate per anno, bastera' modificare 'list'
//per ogni nuovo elemento che creiamo dobbiamo aggiungere il nome all'export e stare attenti a richiamarlo anche in index.js



//export {App, DefaultNav, Protocol};
