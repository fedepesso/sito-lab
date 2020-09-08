import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck } from 'react-bootstrap';
import parse from "html-react-parser"
import './style.css';
import { DefaultNav } from './index.js'
import { Viewer } from './viewer.js'


async function get_list(year){
    const list = await fetch(`/api/collect-preview?year=${year}`)
        .then(data => data.json())
        .then(success => success.protocols);
    return list
}


async function PreviewRenderer(year){
    const list = await get_list(year)

    if (list.length === 0) {
        const dogecoin_value = await get_dogecoin_value()
        return(
            <div>
                <h3 className='text-white'>Ops, non abbiamo trovato esperienze per la classe {year.toLowerCase()} :(</h3>
                <p className='text-white'>Sappiamo però che il valore del dogecoin è attualmente di {dogecoin_value}€!</p>
                <img src={process.env.PUBLIC_URL + '/immagine_errori.png'} />
            </div>
        )
    }

    let cards = await list.map((e) => {
        return(
            <Card Style='margin: 60px 30px 0px 30px' border='dark' bg='light'>
                <Card.Body>
                    <Card.Title Style='font-size: 35px'>{e.Titolo}</Card.Title>
                    <Card.Text Style='font-size: 18px'>
                    <div>{parse(e.Preview)}</div>
                    </Card.Text>
                    <Button variant="dark" Style='font-size:15px' onClick={() => Viewer(e.id)}>Visualizza il protocollo di Laboratorio</Button>
                </Card.Body>
                <Card.Footer>
                    Esperienza pensata per classi di {e.Classe.toLowerCase()}
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
    const card_list = await PreviewRenderer(year)
    ReactDOM.render(
    <div>
        <DefaultNav />
        <div class='content_wrapper'>{card_list}</div>
    </div>,
    document.getElementById('root')
    );
}

async function get_dogecoin_value(){
    const value = await fetch('https://api.cryptonator.com/api/ticker/DOGE-usd')
        .then(data => data.json())
    return value.ticker.price
}


