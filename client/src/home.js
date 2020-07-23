import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DefaultNav} from './index.js'
import { Button } from 'react-bootstrap';
import { Section } from './section.js';


export const Home = function (){
    ReactDOM.render(
    <div>
        <DefaultNav />
        <div Style="margin: 60px 30px; color: white; text-align:center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Button variant="danger" Style='font-size:15px' onClick={Section}>Visualizza il protoccolo di Laboratorio</Button>
    </div>,
    document.getElementById('root')
    );
}