import React, { Component } from "react";
import MainStyle from "../styles/mainStyle";
import Projects from "./projects";
import Resume from "./resume";

class Main extends Component {
    render() {
        return (
            <MainStyle>
                <section className="presentation">
                    <h1>Oi, sou Anderson prazer!</h1>
                    <h2>Sou focado em desenvolvimento de<br/> interfaces web e evoluir<br/> no <em>ReactJs</em></h2>
                </section>
                <Projects />
                <a href="https://github.com/santanderson">
                    <button>GitHub</button>
                </a>
                <Resume />
            </MainStyle>
        );
    }
}

export default Main;