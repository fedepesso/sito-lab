import React from 'react';
import ReactDOM from 'react-dom';
import parse from "html-react-parser"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { DefaultNav, Home } from './index.js'

async function get_protocol(id){
    const data = await fetch(`/api/collect-protocol?id=${id}`)
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
                    <a href=''></a>
                    <div>{parse(props.scopo)}</div>
                </li>
                <li>
                    <h2><b>Materiali</b></h2>
                    <div>{parse(props.materiali)}</div>
                </li>
                <li>
                    <h2><b>Procedimento</b></h2>
                    <div>{parse(props.procedimento)}</div>
                </li>
                <li>
                    <h2><b>Conclusioni</b></h2>
                    <div>{parse(props.riflessioni)}</div>
                </li>
            </ul>
            <Button onClick={Home} variant='light'>Torna alla homepage</Button>
        </div>
    )
}

export async function Viewer(id){
    const protocol_data = await get_protocol(id)
    console.log(protocol_data)
    ReactDOM.render(
        <div Style="color : white; text-align : center;">
            <DefaultNav />
            <div class='content_wrapper'>
                <div class='{card_list}'>
                    <TemplateFormat
                        titolo={protocol_data.Titolo}
                        scopo={protocol_data.Scopo}
                        materiali={protocol_data.Materiali}
                        procedimento={protocol_data.Procedimento}
                        riflessioni={protocol_data.Riflessioni}
                    />
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}
