import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Button} from 'react-bootstrap'
import { RenderPanelHomepage } from './panel.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';


const Authentication = function() {
  ReactDOM.render(
    <div className='authentication'>
      <h2 className="text-light">Pannello di controllo</h2>
      <p className="text-light">Inserisci le credenziali d'accesso per accedere al pannello e modificare il contenuto del sito</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Inserisci il nome utente" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Inserisci la password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={validate_user}> Effettua l'accesso </Button>
      </Form>
    </div>,
    document.getElementById('root')
  )
}

const validate_user = function() {
  // fare un controllo effettivo delle credenziali
}

RenderPanelHomepage()
