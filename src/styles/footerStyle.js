import styled from "styled-components";

const Rodape = styled.footer`

    //Mobile
    display: flex;
    padding: 20px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    z-index: 0;

    div{
        width: 200px;
    }
    ul{
        display: flex;
        width:150px;
        flex-flow: row nowrap;
        justify-content: space-between;
        list-style: none;
    }
    ul li a{
        transition: 0.3s;
        text-decoration: none;
        color:black;
    }
    ul li a:hover{
        transition: 0.3s;
        color: orangered;
    }
    ul li a img{
        width: 30px;
    }

    //Desktop
    @media (min-width: 980px){
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
    }
`

export default Rodape;