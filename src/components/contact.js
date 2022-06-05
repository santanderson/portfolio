import React, { Component } from "react";
import fbIcon from "../facebook.png";
import inIcon from "../linkedin.png";
import igIcon from "../instagram.png";

class Contact extends Component {
    constructor(props){
        super(props);
        this.c = React.createRef();
        this.showContact = this.showContact.bind(this);
        window.addEventListener('click', this.showContact);

    }
    showContact(event){
        const e = event.target;

        if(this.c.current.style.display == 'flex' && e.id != 'contact'){
            this.c.current.style.display = 'none';
        }
        if(e.classList == 'contact'){
            this.c.current.style.display = 'flex';
        }
    }
    render() {
        return (
            <section id="contact" ref={this.c}>
                <ul>
                    <li><a href="https://www.roxannecook.com/" rel="noreferrer" target="_blank"><img src={fbIcon}/></a></li>
                    <li><a href="https://www.roxannecook.com/" rel="noreferrer" target="_blank"><img src={igIcon}/></a></li>
                    <li><a href="https://www.roxannecook.com/" rel="noreferrer" target="_blank"><img src={inIcon}/></a></li>
                </ul>
            </section>
        );
    }
}

export default Contact;