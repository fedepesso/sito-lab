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
        <Alert variant='danger' show={this.state.show} onClose={() => this.show=false} style={{'margin': '20px'}} dismissible>L'username o la password sono errati</Alert>
        <div className='authentication'>
          <h2 className="text-light">Pannello di controllo</h2>
          <p className="text-light">Inserisci le credenziali d'accesso per accedere al pannello e modificare il contenuto del sito</p>
          <Form>
            <Form.Group controlId="formBasicEmail" onChange= {(e) => { this.state.user = e.target.value}}>
              <Form.Control placeholder="Inserisci il nome utente" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" onChange= {(e) => { this.state.pwd = e.target.value}}>
              <Form.Control type="password" placeholder="Inserisci la password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={this.validate_user}> Effettua l'accesso </Button>
          </Form>
        </div>
      </div>
      )
  }

  validate_user() {
    console.log(this.state.user, this.state.pwd)
    get_validation(this.state.user, this.state.pwd)
  }
}

const get_validation = function(user, pwd) {
  fetch(`/admin/validate_user?user=${user}&pwd=${pwd}}`)
    .then(data => data.json())
    .then(success => {
      if (success.status === 200) {
        RenderPanelHomepage()
      } else {
        this.state.show = true
      }
    })
}

ReactDOM.render(<Authentication />, document.getElementById('root'))
