import React from 'react'
import { EditWizard } from './Editor.js'
import {Button, Row, Col, Container} from 'react-bootstrap'
import { ProtocolList } from './panel.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';


async function get_list(year){
    const list = await fetch(`/api/collect-preview?year=${year}`)
        .then(data => data.json())
        .then(success => success.protocols);
    return list
}


async function Remover(id, year){
    await fetch(`/api/remove_protocol?id=${id}`, {method: "POST", headers: {'access-token': sessionStorage.getItem("access-token")}})
        .then(data => data.json())
        .then(success => {
            if (success.status === 600) { alert('Non è stato possibile autenticare la sessione, si prega di rieffettuare l\'accesso')  }
        })
    ProtocolList(year)
}

async function Modifier(id){
    EditWizard(id)
}

export async function PreviewRenderer(year){
    const list = await get_list(year)

    if (list.length === 0) {
        return(
            <div>
                <h3 className='text-white'>Nessun esperimento caricato per la classe {year.toLowerCase()}</h3>
            </div>
        )
    }

    let cards = await list.map((e) => {
        return(
            <Row style={{'margin': '20px', 'borderStyle': 'solid', 'borderWidth': '1px', 'borderColor': '#efefef'}} key={e.id}>
                <Col style={{'color': 'white'}} xs={6}>
                    {e.Titolo}
                </Col>
                <Col>
                    <Button variant="danger" style={{'margin': '10px'}}  onClick={() => Remover(e.id, year)}>Rimuovi Protocollo</Button>
                    <Button variant="warning" style={{'margin': '10px'}} onClick={() => Modifier(e.id)}>Modifica Protocollo</Button>
                </Col>
            </Row>
        )
    })
    return (
        <Container fluid>
        <h1>Protocolli trovati</h1>
        {cards}
        </Container>
    )
}