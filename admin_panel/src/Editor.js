import React from 'react';
import ReactDOM from 'react-dom'
import { Editor } from '@tinymce/tinymce-react';
import { Button, Nav, Badge, Form } from 'react-bootstrap'
import { RenderPanelHomepage } from './panel.js'
import './style.css';
let Protocol = null // l'assegnazione avviene quando viene chiamato WizardEdit e la variabile ritorna null alla fine del ciclo
let numeromagico = 0
const cambi = {
    0 : 'anteprima',
    1 : 'scopo',
    2 : 'materiali',
    3 : 'procedimento',
    4 : 'conclusioni',
    5 : Magic
}

async function get_protocol(id){
    const data = await fetch(`/api/collect-protocol?id=${id}`)
        .then(data => data.json())
        .then(success => success.data);
    return data
}

export const EditWizard = async function(id=undefined) {
    numeromagico = -1
    if (id === undefined) {
        Protocol = {
            titolo : '',
            anteprima : '',
            scopo : '',
            materiali : '',
            procedimento : '',
            conclusioni : ''
        }
    }
    else { 
        const protocol_data = await get_protocol(id)
        Protocol = {
            titolo : protocol_data.Titolo,
            anteprima : protocol_data.Anteprima,
            scopo : protocol_data.Scopo,
            materiali : protocol_data.Materiali,
            procedimento : protocol_data.Procedimento,
            conclusioni : protocol_data.Riflessioni
        }
    }

    Submit(1)
}

const Submit = (delta) => {
    numeromagico+=delta
    if (numeromagico >= 4) {
        document.getElementById('upload_button').disabled = false
        numeromagico = 4
    }
    if (numeromagico < 0) {
        numeromagico = 0
    }
    ReactDOM.render(
        <div>
            <Edit default_value={Protocol[cambi[numeromagico]]} />
        </div>,
        document.getElementById('root')
    )
}

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {content: ''}
    }

    handleEditorChange(content) {
        Protocol[cambi[numeromagico]] = content
    }

    render() {
        let render_value;
        if (this.props.default_value === undefined) {
            render_value = ''
        } 
        else {
            render_value = this.props.default_value
        }
        this.setState.content = render_value
        return(
            <div className='wrapper'>
                <Nav as="ul">
                    <Nav.Item as="li">
                        <Button variant="outline-light" type="submit" onClick={ RenderPanelHomepage } style={{'margin': '10px'}}> Homepage </Button>
                    </Nav.Item>
                    <Form style={{'margin': '10px'}}>
                        <Form.Group controlId="formTitolo">
                            <Form.Control placeholder="Titolo" />
                        </Form.Group>
                    </Form>
                    <Form style={{'margin': '10px'}}>
                        <Form.Group controlId="formClasse">
                            <Form.Control as="select">
                            <option>Prima</option>
                            <option>Seconda</option>
                            <option>Terza</option>
                            <option>Quarta</option>
                            <option>Quinta</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Nav.Item as="li">
                        <Button variant="outline-light" type="submit" onClick={() => {Submit(-1)}} style={{'margin': '10px'}}> Indietro </Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Button variant="outline-light" type="submit" onClick={() => {Submit(1)}} style={{'margin': '10px'}}> Avanti </Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Badge  className='text-light' style={{'marginRight': '10px', 'marginTop': '20px'}} variant='info'>Stai modificando: {cambi[numeromagico]}</Badge >
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Button variant="outline-light" type="submit" onClick={()=>{Magic()}} style={{'margin': '10px'}} id='upload_button' disabled> Carica </Button>
                    </Nav.Item>
                </Nav>
                <div style={{'margin': '10px'}}>
                    <Editor
                    value={this.state.content}
                    apiKey='u4ullmdufa5codrn125ecos31qc75qh7d786l2pj6u310ggq'
                    init={{
                    height: 750,
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={this.handleEditorChange}
                    />
                </div>
            </div>
        )
    }
}

async function Magic() {
    console.log(Protocol)
    console.log('prova')
    // aggiungere titolo e classe contenuti nei form
    await fetch(`/api/add-protocol?protocol=${Protocol}`)
        .then(data => data.json())
        .then(success => console.log(success.data));
}