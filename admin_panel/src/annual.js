import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Row, Col, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';


async function get_list(year){
    const list = await fetch(`/api/collect-preview?year=${year}`)
        .then(data => data.json())
        .then(success => success.protocols);
    return list
}


async function Remover(id){
    await fetch(`/api/remove_protocol?id=${id}`)
        .then(data => data.json())
        .then(success => console.log(success.data));
}

async function Modifier(id){
    //
}

export async function PreviewRenderer(year){
    const list = await get_list(year)

    if (list.length === 0) {
        // restituire testo che avverte della mancanza di esperimenti memorizzati
    }

    let cards = await list.map((e) => {
        return(
            <Row Style='margin:20px' key={e.ID}>
                <Col Style='color:white' xs={6}>
                    {e.Titolo}
                </Col>
                <Col>
                    <Button variant="danger" Style='margin:10px'  onClick={() => Remover(e.ID)}>Rimuovi Protocollo</Button>
                    <Button variant="warning" Style='margin:10px' onClick={() => Modifier(e.ID)}>Modifica Protocollo</Button>
                </Col>
            </Row>
        )
    })
    return (<Container fluid>{cards}</Container>)
}