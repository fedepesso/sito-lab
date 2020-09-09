import React from 'react'
import ReactDOM from 'react-dom'
import { Nav, Button, NavDropdown, DropdownButton } from 'react-bootstrap'
import { scaleRotate as Menu } from 'react-burger-menu'
import { EditWizard } from './editor.js'
import { PreviewRenderer } from './annual.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import './sidebar.css';

const Sidebar = function() {
    return (
        <div>
            <Menu pageWrapId={"page-wrap" } outerContainerId={ "outer-container" } id={'menu_container'} style={{'margin': '10px'}} width={'auto'}>
                <Nav defaultActiveKey="" className="flex-column">
                    <Button variant="outline-dark lateral" onClick={RenderPanelNewProtocol} style={{'marginRight': '5px'}}>Aggiungi esperienza</Button>
                    <DropdownButton title="Elenco esperienze" key={'down'} id={'dropdown-button-drop-down'} drop={'down'} variant="outline-dark lateral">
                        <NavDropdown.Item class='bg-dark' onClick={() => {ProtocolList('Prima')}}>Classe prima</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark' onClick={() => {ProtocolList('Seconda')}}>Classe seconda</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark' onClick={() => {ProtocolList('Terza')}}>Classe terza</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark' onClick={() => {ProtocolList('Quarta')}}>Classe quarta</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark' onClick={() => {ProtocolList('Quinta')}}>Classe quinta</NavDropdown.Item>
                    </DropdownButton>
                </Nav>
            </Menu>
        </div>
    )
}

export const RenderPanelHomepage = function() {
    ReactDOM.render(
    <div id={'outer-container'} className='text-light'>
        <Sidebar />
        <div id={'page-wrap'} className='wrapper'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut egestas ante. Integer quis metus elit. Maecenas pulvinar sit amet justo id pellentesque. Ut efficitur lorem erat, eu vestibulum lectus dictum eget. Phasellus non tortor et urna lacinia facilisis ac et felis. Donec id vehicula quam. Duis eget orci id arcu bibendum tempus ac in urna. Quisque purus sapien, sagittis vel ornare eu, vulputate in risus. Aliquam vulputate finibus leo sit amet porttitor. Etiam semper tellus ac ultrices porttitor. Nulla a augue velit. Etiam fermentum, augue in ullamcorper euismod, orci dolor pretium purus, id pretium velit elit a leo. Aliquam aliquam felis sit amet odio pretium vulputate. Curabitur eleifend libero ac felis fermentum, vel feugiat odio gravida. Sed consequat in lectus et dapibus.
                Nullam in malesuada orci, eu viverra nibh. Integer quis porttitor nisi, in porttitor massa. Nullam nec tortor ligula. Fusce ac massa in erat pulvinar malesuada. Vivamus eget justo arcu. Aenean in euismod augue, in suscipit velit. Nulla facilisi. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies auctor elit, ut dictum lectus auctor consequat.
                Donec quis nunc sapien. Nulla efficitur mi eros, nec pulvinar ipsum dictum non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pharetra faucibus mi, non interdum odio scelerisque ut. Fusce at urna id est varius suscipit in vel augue. Mauris luctus enim ut eleifend blandit. Morbi interdum in leo ac finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a lectus ullamcorper, sollicitudin purus ut, finibus nulla. Etiam et pellentesque augue. Cras odio orci, faucibus non pretium ac, rhoncus sit amet elit. Nullam hendrerit sollicitudin neque, a blandit risus vulputate sed. Vestibulum placerat imperdiet congue. Quisque varius consectetur enim nec luctus.
                Sed a neque blandit, condimentum nibh in, aliquam lectus. Pellentesque tincidunt iaculis libero, eu mattis ligula pharetra quis. Vivamus ut felis posuere, laoreet libero non, eleifend metus. Aenean at odio sollicitudin ex congue placerat eget id nulla. Proin id risus justo. Pellentesque bibendum lectus at finibus gravida. Aliquam ac arcu quis ante sagittis eleifend. Vivamus sed ullamcorper lorem. Sed ligula tortor, iaculis eget purus sit amet, rhoncus hendrerit risus. Pellentesque commodo egestas dui, vitae commodo tortor venenatis vitae. Nullam vel gravida nulla. Phasellus eget nisi ante. Cras ullamcorper hendrerit mollis. Cras hendrerit efficitur sagittis. Donec nec ornare elit. Nunc quis quam a elit aliquam molestie non sed nisi. 
            </p>
        </div>
    </div>, 
    document.getElementById('root'))
}

const RenderPanelNewProtocol = function() {
    EditWizard()
}

export const ProtocolList = async function(year) {
    const card_list = await PreviewRenderer(year)
    ReactDOM.render(
        <div id={'outer-container'} className='text-light'>
            <Sidebar />
            <div id={'page-wrap'} className='wrapper'>
            {card_list}
            </div>
        </div>, 
        document.getElementById('root'))
}