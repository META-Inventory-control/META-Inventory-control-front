import styled from "styled-components";

export const StyledSideBar = styled.main`
    background-color: #2E2A2A;
    width: 100%;
    height: 130px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 15px 10px 15px -3px rgba(0,0,0,0.4);

    .userInfo {
        display: flex;

        img {
            width: 60px;
            height: 60px;
            margin-right: 18px;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;;
            max-width: 230px;
        }
    }

    .addContactSec {

        button {
            width: 64px;
            height: 64px;
            border: 2px solid #1AD300;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
        }

        button:hover {
            background-color: #16B400;
            border: 2px solid white;
            transition: 650ms;
            box-shadow: rgba(26, 211, 0, 0.3) 0px 4px 12px;
        }

        button:not(:hover) {
            transition: 650ms;
        }
    }

    @media (min-width: 1000px) {
        height: 100vh;
        width: 20%;
        flex-direction: column;
        padding: 7% 0;


        .userInfo {
            flex-direction: column;
            width: 86%;
            align-items: center;
            gap: 10px;

            img {
                width: 82px;
                height: 82px;
                margin: 0;
            }

            div {
                gap: 10px;
            }
        }

        .addContactSec {
            button {
                width: 82px;
                height: 82px;
            }
        }
    }
`