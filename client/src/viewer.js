import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './index.css';
import {Section} from './section.js'
import {DefaultNav} from './index.js'

export function Viewer(){
    fetch(`/api/test`)
        .then(data => data.json())
        .then(success => {
            ReactDOM.render(
                <div Style="color : white; text-align : center;">
                    <DefaultNav />
                    <br></br>
                        {success.data}
                    <br></br>
                    <Button variant="info" Style='font-size:15px' onClick={Section}>Home</Button>
                </div>,
                document.getElementById('root')
            )
        });
}



function Template(protocol){
    return(
        <div Style='margin : 60px 0px'>
            <h1 Style='text-align: center'>{protocol.title}</h1>
            <br></br>
            <ol Style='text-align: left; color : white;'>
                <li>
                    <h2><b>1. Scopo dell'esperimento</b></h2>
                    <p>{protocol.scope}</p>
                </li>
                <li>
                    <h2><b>2. Materiali</b></h2>
                    <p>{protocol.materials}</p>
                </li>
                <li>
                    <h2><b>3. Procedimento</b></h2>
                    <p>{protocol.process}</p>
                </li>
                <li>
                    <h2><b>4. Conclusioni</b></h2>
                    <p>{protocol.results}</p>
                </li>
            </ol>
        </div>
    )
}
