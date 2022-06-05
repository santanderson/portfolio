import React, { Component } from "react";

class Resume extends Component {
    render() {
        return (
            <section id="resume">
                    <h1>Descrição</h1>
                    <p>
                        Sou um desenvolvedor web front-end com uma paixão em construir, e discutir idéias de design. Minha proposta de trabalho é um trabalho fiel e altamente agradável a experiência do usuário, minha vontade em resolver problemas ajuda nisso.
                        Desenvolvo sites responsivos e tenho prazer de acessar um site agradável e fácil de compreender e que tem alta compatibilidade com a maioria dos navegadores.
                    </p>

                    <h1>Experiência</h1>
                    <p>
                        Além da tríade web(HTML, CSS, JavaScript) tenho também bastante prática com ReactJs e Styled-Components sem falar de versionamento de código com git e gitHub.
                        Também possuo conhecimento básico com wordpress e php.
                        Conhecimento básico em design(Teoria das Cores e Design Clean).
                    </p>

                    <a href="https://drive.google.com/file/d/15cZfCMBGcXUXkGHIwFIzARZyV7hJNlx3/view?usp=sharing" target="_blank">
                        <button>Download PDF</button>
                    </a>
            </section>
        );
    }
}

export default Resume;