import styled from "styled-components";

export const StyledDeleteModal = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;

    display: flex;
    justify-content:center;
    align-items:center;

    @media (min-width: 1000px) {
        width: 80%;
    }

    main {
        width: 86%;
        background-color: #2E2A2A;
        border: 2px solid red;
        border-radius: 18px;
        position: relative;

        .closeModal {
            position: absolute;
            right: 5px;
            top: 5px;
            border: 1px solid lightblue;
            border-radius: 50%;
            color: white;
            background-color: transparent;
            cursor: pointer;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 14px;
            gap: 10px;

            h2 {
                font-size: 26px;
                height:5%;
                display: flex;
                align-items: end;
            }

            p {
                font-size: 12px;
                text-align: center;
                margin-bottom: 20px;
            }

            button {
                width: 100%;
                height: 38px;
                border: 1.5px solid red;
                border-radius: 8px;
                background-color: transparent;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }

            button:hover {
                background-color: red;
                transition: 600ms;
            }

            button:not(:hover) {
                transition: 400ms;
            }
        }

    @media (min-width: 1000px) {
        width: 30%;

    }
`