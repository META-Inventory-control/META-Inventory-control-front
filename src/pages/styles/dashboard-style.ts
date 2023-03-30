import styled from "styled-components";

export const StyledDashboardMain = styled.main`

    width: 100vw;
    min-height: 100vh;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 20% 80%;

        .a {
            background-color: black;
            opacity: 0.4;
        }

        .b {
           background-color: blue;
            opacity: 0.3; 
            display: grid;
            grid-template-rows: 10% 90%;
        }

        .c {
            background-color: red;
        }
    }
`