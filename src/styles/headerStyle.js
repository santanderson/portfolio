import styled from "styled-components";

const HeaderBar = styled.header`
    ul{
        padding: 50px;
        margin: 0;
        list-style: none;
    }
    ul li, li a{
        transition: 0.3s;
        color:black;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
    }

    //Mobile
    ul#mobile{
        display: flex;
        position: fixed;
        background-color: white;
        top: 0;
        right: 0;
        width: 100%;
        justify-content: center;
        align-items: center;
        z-index: 10;

        @media (min-width: 980px){
            display: none;
        }
    }
    li.logo{
        color: orangered;
        font-size: 28px;
        font-weight: 600;
    }
    ul li#button{
        position: absolute;
        right: 20px;
    }
    #button button{
        font-size: 24px;
        width: 35px;
        height: 35px;
        border: none;
        z-index: 999;
        background-color: transparent;
    }
    #button button:hover{
        cursor:pointer;
    }
    ul#menuItems{
        display: none;
        position: fixed;
        box-sizing: border-box;
        top: 132px;
        font-weight: 500;
        padding: 70px 20px;
        background-color: white;
        width: 100%;
        height: 80vh;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        text-align: center;
    }
    #menuItems li a{
        font-size: 25px;
    }

    //Desktop
    ul#desktop{
        display: none;
        font-size: 30px;
        justify-content: space-between;
        padding: 70px 50px;

        @media (min-width:980px){
            display: flex;
        }
    }
    #desktop div{
        display: flex;
        width: 250px;
        justify-content: space-between;
        align-items: center;
    }
    #desktop div li a:hover, #menuItems li a:hover{
        transition: 0.3s;
        text-decoration: underline 3px;
        color: orangered;
    }
`
export default HeaderBar;