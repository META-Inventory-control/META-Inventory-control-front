import styled from "styled-components";

export const ContactListDiv = styled.div`
    background-color: transparent;

    .contactsIcon {
        width: 80px;
        height: 80px;
        display: block;
        margin: 20px auto 30px auto;
    }

    ul {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        img {
            width: 70px;
            height: 70px;
        }

        .noContentMessage {
            background-color: #2E2A2A;
            color: white;
            padding: 20px;
            font-size: 15px;
            text-align: center;
            box-shadow: 12px 12px 15px -3px rgba(0,0,0,0.4);
        }

        .card {
            width: 280px;
            height: 280px;
            background-color: white;
            border-radius: 16px;

            label {
                margin: 10px 0 5px 0;
                font-size: 14px;
            }

            .cardImg {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30%;
                border: 2px solid #c2c3c3;
                border-bottom: none;
                border-radius: 12px 12px 0 0;
                box-sizing: border-box;
            }

            .cardInfo {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #2E2A2A;
                height: 50%;
                box-sizing: border-box;
            }

            .cardOps {
                background-color: #2E2A2A;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 20%;
                border-radius: 0 0 12px 12px;

                svg:hover {
                    transform: scale(1.1);
                    transition: 400ms;
                    cursor: pointer;
                }

                svg:not(:hover) {
                    transition: 400ms;
                }
            }
        }
    }

    @media (min-width: 1000px) {
        padding: 0;

        .contactsIcon {
            display: none;
        }

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            width: 70vw;
            justify-content: space-evenly;
            margin: 100px 0 0 100px;
        }
    }
`