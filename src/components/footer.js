import React, { Component } from "react";
import Rodape from "../styles/footerStyle.js";
import fbIcon from "../facebook.png";
import inIcon from "../linkedin.png";
import igIcon from "../instagram.png";

class Footer extends Component {
    render() {
        return (
            <Rodape id="rodape">
                <div id="copy">
                    &copy; Anderson Ryan
                </div>
                <ul id="socialMedia">
                    <li><a href="https://www.facebook.com/profile.php?id=100072460578679" rel="noreferrer" target="_blank"><img src={fbIcon} /></a></li>
                    <li><a href="https://www.instagram.com/ryaan_a.r/?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank"><img src={igIcon} /></a></li>
                    <li><a href="https://www.linkedin.com/in/anderson-ryan-924a0422a/" rel="noreferrer" target="_blank"><img src={inIcon} /></a></li>
                </ul>
            </Rodape>
        );
    }
}

export default Footer;