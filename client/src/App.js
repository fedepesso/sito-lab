import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Card, Button, CardDeck } from 'react-bootstrap';



function App() {
  return (
    <div className="App" >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Esperienze di Laboratorio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Primo anno</Nav.Link>
          <Nav.Link href="#features">Secondo anno</Nav.Link>
          <Nav.Link href="#features">Terzo anno</Nav.Link>
          <Nav.Link href="#features">Quarto anno</Nav.Link>
          <Nav.Link href="#features">Quinto anno</Nav.Link>
        </Nav>
      </Navbar>
      <Seeder />
    </div>
  );
}

const list = [
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Prima', id: 0},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Seconda', id: 1},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Terza', id: 2},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quarta', id: 3},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quinta', id: 4},

]

// la costante list dovra' essere sostuita dal risultato di una chiamata al db che ci buttera' tra le 7 e le 12 esperienza a caso


const Seeder = () => {
  let res = list.map((e,i) => {
    let card = 
      <Card Style='margin: 30px 30px 0px 30px'>
        <Card.Body>
          <Card.Title Style='font-size: 35px'>{e.titolo}</Card.Title>
          <Card.Text Style='font-size: 18px'>
            {e.descrizione}
          </Card.Text>
          <Button variant="danger" Style='font-size:15px'>Download protoccolo di Laboratorio</Button>
          <iframe id="my_iframe" Style="display:none;" title={e.id}></iframe>
        </Card.Body>
        <Card.Footer>
          Esperienza pensata per classi di {e.classe}
        </Card.Footer>
    </Card>
    return card
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



function Download(url) {
    document.getElementById('my_iframe').src = url;
}


export default App;
