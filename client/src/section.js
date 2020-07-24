import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck } from 'react-bootstrap';
import './index.css';
import {DefaultNav} from './index.js'
import {Viewer} from './viewer.js'

async function get_list(){
    let list = await fetch(`/api/collect-protocol`)
                    .then(data => data.json())
                    .then(success => success.protocols);
    return list
}


async function Seeder(tipo){
    const list = await get_list()
    let cards = await list.map((e) => {
        return(
            <Card Style='margin: 60px 30px 0px 30px'>
                <Card.Body>
                    <Card.Title Style='font-size: 35px'>{e.titolo}</Card.Title>
                    <Card.Text Style='font-size: 18px'>
                    {e.descrizione}
                    </Card.Text>
                    <Button variant="danger" Style='font-size:15px' onClick={Viewer}>Visualizza il protoccolo di Laboratorio</Button>
                </Card.Body>
                <Card.Footer>
                    Esperienza pensata per classi di {e.classe}
                </Card.Footer>
            </Card>)
    })

    let seed =[]
    for(let i = 0; i<cards.length; i+=3){
        let deck = await cards.slice(i, i+3)
        seed.push(<CardDeck>{deck}</CardDeck>)
    }
    return seed
}

export async function Section(year){
    const prova = await Seeder()
    ReactDOM.render(
    <div>
        <DefaultNav />
        {prova}
    </div>,
    document.getElementById('root')
    );
}


