import styled from "styled-components";
import spotify from "../assets/spotify.png";
import google from "../assets/google.png";
import milkoff from "../assets/milkoff.png";
import foodrop from "../assets/foodrop.png";


const MainStyle = styled.main`
    padding: 0px 30px;
    margin-top: 150px;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media (min-width: 980px){
        margin-top: 0;
        font-size: 160%;
    }

    //Intro
    section.presentation{
        margin-bottom: 100px;
    }
    .presentation h1, h2{
        margin: 0;
    }
    .presentation h1{
        font-size: 30px;
        font-weight: 500;
        color: orangered;
    }
    .presentation h1 em, .presentation h2 em{
        color: navy;
    }
    @media (min-width: 980px){
        .presentation h1 {
            font-size: 35px;
        }
    }

    //Projects
    #projects{
        display: flex;
        flex-flow: column nowrap;
    }
    #projects div{
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
    }
    #projects div a{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-repeat:no-repeat;
        background-size: 100% 100%;
        width: auto;
        height: 200px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
    }
    #projects div a#um{
        background-image: url(${spotify});
    }
    #projects div a#dois{
        background-image: url(${foodrop});
    }
    #projects div a#tres{
        background-image: url(${google});
    }
    #projects div a#quatro{
        background-image: url(${milkoff});
    }
    #projects div a span{
        color: white;
        font-weight: 500;
        display: none;
        font-size: 25px;
    }
    #projects div a:hover{
        transition: 0.3s;
        filter: grayscale(70%); 
        background: transparent 20%;
    }
    #projects div a:hover span{
        display: block;
        transition: 0.3s;
    }
    @media(min-width:700px){
        #projects {
            flex-flow: row nowrap;
            justify-content: space-between;
            padding: 40px 10px 0;
        }
        #projects div a{
            height: 300px;
        }
    }
    a button{
        background-color: orangered;
        border: none;
        color: white;
        padding: 15px;
        font-size: 20px;
        width: 80%;
        margin: 30px 0;
        border-radius: 5px;
    }
    a button:hover{
        cursor:pointer;
    }
    @media (min-width:450px){
        a button{
            width: 300px;
            font-size: 25px;
        }
    }

    //Resume
    #resume{
        padding: 25px;
    }
    #resume h1{
        font-size: 30px;
        color: orangered;
    }
    #resume p{
        font-size: 25px;
        font-weight: 200;
    }

    //Contato
    #contact{
        display: none;
        position: fixed;
        top: 1px;
        width: 55%;
        background-color: orangered;
        border-radius: 10px;
        padding: 30px;
        margin: 30px;
    }
    #contact ul{
        width: 70%;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    #contact ul a{
        text-decoration:none;
        color: white;
    }
    #contact ul a img{
        width: 30px;
    }
`

export default MainStyle;