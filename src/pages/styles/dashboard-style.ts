import styled from "styled-components";

export const StyledApplicationMain = styled.main`

    min-height: 100vh;
    margin: 0;

    .fullMainContainer{
        width:100vw;
    }

    .buttonShowAside{
        background-color:transparent;
        cursor:pointer;

        transition: 0.3s;

        margin: 5px;

        :hover{
            transform: scale(1.2);
        }
    }

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 20% 80%;

        .sideBarContainer {
            height: 100vh;
            opacity: 1;
        }

        .mainContainer {
            // PROBLEMA DE SCROLL HORIZONTAL AQUI (height maior que 100vh | tela)
            // height: 2000px;
        }

        .admContainer {
            background-color: blue;
            height: 60px;
        }

        .contentContainer {
            padding: 26px 80px 0px 80px;
        }
    }
`