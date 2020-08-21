import React from 'react';
import ReactDOM from 'react-dom'
import { Editor } from '@tinymce/tinymce-react';
import './style.css';

let storeData = (text) => console.log(text)


const Edit = function() {
    ReactDOM.render(
        <div>
            <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
            height: 1000,
            menubar: false,
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
        </div>,
    document.getElementById('root')
)
}

Edit()