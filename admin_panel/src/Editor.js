import React from 'react';
import ReactDOM from 'react-dom'
import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'react-bootstrap'
import './style.css';

const Protocol = {
    titolo : null,
    scopo : null,
    materiali : null,
    procedimento : null,
    conclusioni : null,
    preview : null
}

async function Magic() {
    console.log(Protocol)
    for (let key in Protocol) {
        let value = Protocol[key]
        if(value === null){
            //avverti che c'e' stato un errore e bisogna ricaricare la pagina perche' si e' deficienti
            return 0
        }
    }
    const risposta = await fetch(`/admin/add_protocol/?proto=${Protocol}`)
        .then(data => data.json())
        .then(success => success.protocols);

    console.log(risposta.data)

}

const cambi = {
    0 : 'titolo',
    1 : 'scopo',
    2 : 'materiali',
    3 : 'procedimento',
    4 : 'conclusioni',
    5 : 'previw',
    6 : Magic()
}

let numeromagico = 0

const storeData = (text) => {
    Protocol[cambi[numeromagico]] = text
}



const Submit = () => {
    if(Protocol[cambi[numeromagico]] === null && Protocol[cambi[numeromagico]] !== ''){
        return 0
    }
    numeromagico+=1
    ReactDOM.render(
        <div >
          <Edit />
        </div>,
      document.getElementById('root')
    )
}

export const Edit = function() {
    return(
        <div>
            <Editor
            apiKey='u4ullmdufa5codrn125ecos31qc75qh7d786l2pj6u310ggq'
            initialValue="<p>This is how legends are made</p>"
            init={{
            height: 750,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={storeData}
        />
        <Button variant="primary" type="submit" onClick={Submit}> Invia </Button>
        </div>
    )
}

export const EditWizard = function(id=undefined) {
    Edit()
}