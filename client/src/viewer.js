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
                <div Style="color : white; text-align : center">
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

