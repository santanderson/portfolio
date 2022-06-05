import React, { Component } from "react";
import HeaderBar from "../styles/headerStyle";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.items = React.createRef();
        this.b = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.isOpen === false) {
            this.items.current.style.display = 'flex';
            this.b.current.innerHTML = 'X';
            this.setState({ isOpen: true })
        };
        if (this.state.isOpen === true) {
            this.items.current.style.display = 'none';
            this.b.current.innerHTML = '|||';
            this.setState({ isOpen: false });
        };
    }

    render() {
        return (
            <HeaderBar>
                <ul id="mobile">
                    <li className="logo">Anderson</li>
                    <li id="button"><button ref={this.b} onClick={this.handleClick}>|||</button></li>
                </ul>
                <ul id="menuItems" ref={this.items}>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#resume">Resumo</a></li>
                    <li><a href="https://drive.google.com/file/d/15cZfCMBGcXUXkGHIwFIzARZyV7hJNlx3/view?usp=sharing">Download Pdf</a></li>
                    <li><a href="#rodape">Contato</a></li>
                </ul>
                <ul id="desktop">
                    <div>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#resume">Resumo</a></li>
                    </div>
                    <li className="logo">Anderson</li>
                    <div>
                        <li><a href="https://drive.google.com/file/d/15cZfCMBGcXUXkGHIwFIzARZyV7hJNlx3/view?usp=sharing">Download Pdf</a></li>
                        <li><a href="#rodape">Contato</a></li>
                    </div>
                </ul>
            </HeaderBar>
        )
    }
}

export default Header;