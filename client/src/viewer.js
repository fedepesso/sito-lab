import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './style.css';
import { DefaultNav } from './navbar.js'
import { Home } from './index.js'

async function get_protocol(){
    const data = await fetch(`/api/collect-protocol`)
        .then(data => data.json())
        .then(success => success.data);
    return data
}

const TemplateFormat = function(props){
    return(
        <div Style='margin : 60px 0px'>
            <h1 Style='text-align: center'>{props.titolo}</h1>
            <br></br>
            <ul Style='text-align: left; color: white;'>
                <li>
                    <h2><b>Scopo dell'esperimento</b></h2>
                    <p>{props.scopo}</p>
                </li>
                <li>
                    <h2><b>Materiali</b></h2>
                    <p>{props.materiali}</p>
                </li>
                <li>
                    <h2><b>Procedimento</b></h2>
                    <p>{props.procedimento}</p>
                </li>
                <li>
                    <h2><b>Conclusioni</b></h2>
                    <p>{props.riflessioni}</p>
                </li>
            </ul>
        </div>
    )
}

export async function Viewer(){
    const protocol_data = await get_protocol()
    ReactDOM.render(
        <div Style="color : white; text-align : center;">
            <DefaultNav />
            <br></br>
            <TemplateFormat
                titolo={protocol_data.Titolo}
                scopo={protocol_data.Scopo}
                materiali={protocol_data.Materiali}
                procedimento={protocol_data.Procedimento}
                riflessioni={protocol_data.Riflessioni}
             />
            <br></br>
            <Button variant="info" Style='font-size:15px' onClick={Home}>Home</Button>
        </div>,
        document.getElementById('root')
    )
}
