import React from 'react'
import { EditWizard } from './editor.js'
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
    await fetch(`/api/remove_protocol?id=${id}`, {method: "POST"})
        .then(data => data.json())
        .then(success => console.log(success.data));
}

async function Modifier(id){
    EditWizard(id)
}

export async function PreviewRenderer(year){
    const list = await get_list(year)
    console.log(list)

    if (list.length === 0) {
        // restituire testo che avverte della mancanza di esperimenti memorizzati
    }

    let cards = await list.map((e) => {
        return(
            <Row style={{'margin': '20px', 'border-style': 'solid', 'border-width': '1px', 'border-color': '#efefef'}} key={e.id}>
                <Col Style='color:white' xs={6}>
                    {e.Titolo}
                </Col>
                <Col>
                    <Button variant="danger" Style='margin:10px'  onClick={() => Remover(e.id)}>Rimuovi Protocollo</Button>
                    <Button variant="warning" Style='margin:10px' onClick={() => Modifier(e.id)}>Modifica Protocollo</Button>
                </Col>
            </Row>
        )
    })
    return (<Container fluid>
        <h1>Protocolli trovati</h1>
        {cards}
        </Container>)
}