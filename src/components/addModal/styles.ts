import styled from "styled-components";

export const StyledAddProductModal = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;

    display: flex;
    justify-content:center;
    align-items:center;
    

    main {
        width: 75%;
        background-color: #2E2A2A;
        border: 2px solid var(--Color-light);
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
            }
        }

        form {
            padding: 24px 18px;

            label {
                font-size: 16px;
            }
    
            input, select {
                width: 100%;
                padding: 8px 10px;
                box-sizing: border-box;
                border: 1px solid transparent;
                border-radius: 8px;
                margin: 14px 0 30px 0;
                color: black;
    
                ::placeholder {
                    color: red;
                    opacity: 0.75;
                }
            }

            span {
                color: red;
                display: block;
                top: 0;
            }
    
            button {
                width: 100%;
                height: 38px;
                border: 1.5px solid var(--Color-light);
                border-radius: 8px;
                background-color: transparent;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }

            .loadingButton {
                background: rgba(18, 94, 166, 0.38);
                color: white;
                cursor: wait;
            }

            button:hover {
                background-color: var(--Color-brand-1);
                transition: 600ms;
            }

            button:not(:hover) {
                transition: 400ms;
            }

            .inputFile {
                width: 100%;
                background: white;
            }

            .setQtyDiv {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 0 14px 0;

                div {
                    padding: 0 0 14px 0;
                    width: 30%;
                }

                input, select {
                    height: 38px;
                    margin: 0;
                    box-sizing: border-box;
                }
            }
        }
    }



    @media (min-width: 600px) {
        width: 100%;

        main {
            width: 60%;
        }
    }

    @media (min-width: 1000px) {
        width: 80%;

        main {
            width: 35%;
        }
    }
`