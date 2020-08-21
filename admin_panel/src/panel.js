import React from 'react'
import ReactDOM from 'react-dom'
import { Nav, Button, Badge, NavDropdown, ButtonGroup, DropdownButton } from 'react-bootstrap'
import { scaleRotate as Menu } from 'react-burger-menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

const Sidebar = function() {
    return (
        <>
            <Button onclick={() => {document.getElementById('menu_container').open()}}>Menu</Button>
            <Menu pageWrapId={"page-wrap" } outerContainerId={ "outer-container" } id={'menu_container'} style={{'margin': '10px'}} width={'25%'}>
                <Nav defaultActiveKey="" className="flex-column">
                    <Button variant="outline-dark lateral">Aggiungi esperienza</Button>
                    <DropdownButton title="Elenco esperienze" id="basic-nav-dropdown" key={'right'} id={'dropdown-button-drop-right'} drop={'right'} variant="outline-dark lateral">
                        <NavDropdown.Item class='btn-dark'>Classe prima</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark'>Classe seconda</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark'>Classe terza</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark'>Classe quarta</NavDropdown.Item>
                        <NavDropdown.Item class='bg-dark'>Classe quinta</NavDropdown.Item>
                    </DropdownButton>
                </Nav>
            </Menu>
        </>
    )
}

export const RenderPanel = function() {
    ReactDOM.render(
    <div id={'outer-container'} class='text-light'>
        <Sidebar />
        <div id={'page-wrap'}>
            <h1>Example heading <Badge variant="secondary">New</Badge></h1>
            <h2>Example heading <Badge variant="secondary">New</Badge></h2>
            <h3>Example heading <Badge variant="secondary">New</Badge></h3>
            <h4>Example heading <Badge variant="secondary">New</Badge></h4>
            <h5>Example heading <Badge variant="secondary">New</Badge></h5>
            <h6>Example heading <Badge variant="secondary">New</Badge></h6>
        </div>
    </div>
    , document.getElementById('root'))
}