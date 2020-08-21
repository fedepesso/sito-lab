import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import {Edit} from './Editor.js'


const Authentication = function() {
  ReactDOM.render(
    <div class='content_wrapper'>
      <h2 class="text-light">Pannello di controllo</h2>
      <p class="text-light">Inserisci le credenziali d'accesso per accedere al pannello e modificare il contenuto del sito</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome utente</Form.Label>
          <Form.Control type="email" placeholder="Inserisci il nome utente" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Inserisci la password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" onclick={validate_user}>Effettua l'accesso</Button>
      </Form>
      <Edit />
    </div>,
  document.getElementById('root')
  )
}

const validate_user = function() {
  //
}


Authentication()