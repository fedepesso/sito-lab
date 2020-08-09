import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './index.css';
import {Section} from './section.js'
import {DefaultNav} from './index.js'

async function get_protocol(){
    const data = await fetch(`/api/collect-protocol`)
        .then(data => data.json())
        .then(success => success.data);
    return data
}

const template_format = function(protocol){
    return(
        <div Style='margin : 60px 0px'>
            <h1 Style='text-align: center'>{protocol.title}</h1>
            <br></br>
            <ol Style='text-align: left; color : white;'>
                <li>
                    <h2><b>1. Scopo dell'esperimento</b></h2>
                    <p>{protocol.scopo}</p>
                </li>
                <li>
                    <h2><b>2. Materiali</b></h2>
                    <p>{protocol.materiali}</p>
                </li>
                <li>
                    <h2><b>3. Procedimento</b></h2>
                    <p>{protocol.procedimento}</p>
                </li>
                <li>
                    <h2><b>4. Conclusioni</b></h2>
                    <p>{protocol.riflessioni}</p>
                </li>
            </ol>
        </div>
    )
}

export async function Viewer(){
    const protocol_data = await get_protocol()
    ReactDOM.render(
        <div Style="color : white; text-align : center;">
            <DefaultNav />
            <br></br>
            <template_format protocol={protocol_data} />
            <br></br>
            <Button variant="info" Style='font-size:15px' onClick={Section}>Home</Button>
        </div>,
        document.getElementById('root')
    )
}
