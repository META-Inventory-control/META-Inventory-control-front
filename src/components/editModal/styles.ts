import styled from "styled-components";

interface iPropsEditModal{
    set_width?: string;
}

export const StyledEditModal = styled.div`
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

        .deleteBtn {
            border: 1px solid #eb3434;
            width: 90%;
            height: 38px;
            border-radius: 8px;
            background-color: transparent;
            color: white;
            font-size: 16px;
            cursor: pointer;
            display: block;
            margin: 0 auto 18px auto;
        }

        .deleteBtn:hover {
            background-color: #ed0e0e;
            transition: 600ms;
        }

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

            
    
            .lastInput{
                margin: 14px 0 22px 0;
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

            button:hover {
                background-color: var(--Color-brand-2);
                transition: 600ms;
            }

            button:not(:hover) {
                transition: 400ms;
            }

            .multipleFieldDiv {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 0 14px 0;

                div {
                    padding: 0 0 14px 0;
                    width: 48%;

                    .enableFinalCostEdition {
                        display: flex;
                        margin: 0;

                        input {
                            width: 18px;
                            margin: 0 0 0 5px;
                        }
                    }
                }

                input, select {
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
        width: ${({set_width = "80%"}: iPropsEditModal) => set_width};

        main {
            width: 35%;
        }
    }
`