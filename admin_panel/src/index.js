import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Button, Alert} from 'react-bootstrap'
import { RenderPanelHomepage } from './panel.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';


class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: '', pwd: '', show: false}
    this.validate_user=this.validate_user.bind(this)
  }

  render() {
    return (
      <div>
        <Alert show={this.state.show} variant='danger' style={{'margin': '20px'}} id='error_alert'>L'username o la password sono errati</Alert>
        <div className='authentication'>
          <h2 className="text-light">Pannello di controllo</h2>
          <p className="text-light">Inserisci le credenziali d'accesso per accedere al pannello e modificare il contenuto del sito</p>
          <Form>
            <Form.Group controlId="formBasicEmail" onChange= {(e) => { this.setState({'user': e.target.value}) }}>
              <Form.Control placeholder="Inserisci il nome utente" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" onChange= {(e) => { this.setState({'pwd': e.target.value}) }}>
              <Form.Control type="password" placeholder="Inserisci la password" />
            </Form.Group>
            
            <Button variant="primary" onClick={this.validate_user}> Effettua l'accesso </Button>
          </Form>
        </div>
      </div>
      )
  }

  validate_user() {
    fetch(`/admin/validate_user?user=${this.state.user}&pwd=${this.state.pwd}`)
    .then(data => data.json())
    .then(success => {
      if (success.status === 200) {
        RenderPanelHomepage()
      } else {
        this.setState({'show': true})
      }
    })
  }
}

ReactDOM.render(<Authentication />, document.getElementById('root'))
