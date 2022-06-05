import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <div name="projects" id="projects">
                <div>
                    <a id="um" href="https://santanderson.github.io/Spotify-Clone/"><span>Cópia do spotify</span></a>
                    <a id="dois" href="https://santanderson.github.io/FooDrop/"><span>Site de uma Lanchonete</span><img/></a>
                </div>
                <div>
                    <a id="tres" href="https://santanderson.github.io/Google/"><span>Cópia do Google</span><img/></a>
                    <a id="quatro" href="https://santanderson.github.io/coffee-shop/"><span>Site de uma cafeteria</span></a>
                </div>
            </div>
        );
    }
}

export default Projects;