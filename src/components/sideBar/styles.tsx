import styled from "styled-components";

export const StyledSideBarSection = styled.section`
    background-color: var(--light-black);
    height: 100%;
    width: 20%;
    padding: 42px;
    box-sizing: border-box;
    position: fixed;


    .logoDiv {
        img {
            width: 28%;
        }
    }

    .navAside {
        height: 55%;
        margin-top: 50px;
    }

    .optionsDiv {
        margin-top: 30px;
    }

    .option {
        width: 100%;
        height: 54px;
        font-size: 22px;
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        cursor: pointer;
    }

    .option:hover {
        transform: scale(1.05);
        transition: 500ms;
    }

    .option:not(:hover) {
        transition: 500ms;
    }

    @media (max-width: 1500px) {
        .option {
            font-size: 16px;
        }
    }

    @media (max-width: 1000px) {
        height: 160px;
        width: 100%;
        position: relative;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logoDiv {
            img {
                display: none;
            }
        }

        .optionsDiv {
                margin: 0;
            }

        .option {
            gap: 00px;
            margin-top: 0px;
        }

        .navAside {
            margin-top: 0;
        }
    }
    
`