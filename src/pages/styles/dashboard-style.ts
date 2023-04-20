import styled from "styled-components";

export const StyledDashboardMain = styled.main`

    min-height: 100vh;
    margin: 0;

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
            padding: 30px 80px;
        }
    }
`