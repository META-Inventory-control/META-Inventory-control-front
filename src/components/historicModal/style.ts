import styled from "styled-components";

export const StyledHistoricModal = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;

    display: flex;
    justify-content:center;
    align-items:center;

    .divContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    main {
        width: 65%;
        height: 80%;
        background-color: #2E2A2A;
        border: 2px solid var(--Color-light);
        border-radius: 18px;
        position: relative;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

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

        h2 {
            font-size: 23px;
            padding: 10px;
        }
    }

    .divDesc{
        display:flex;
        flex-direction: column;
        gap: 3px;
        justify-content: space-evenly;
    }

    .mainContainer {
        width: 98%;
        height: 90%;
        display: flex;

        .filterContainer {
            height: 100%;
            width: 50%;
            box-sizing: border-box;
            padding: 0 20px;

            .filterInformation {
                height: 8%;
                display: flex;
                flex-direction: column;
                align-items: center;
                h3 {
                    font-size: 20px;
                    padding-bottom: 14px;
                }

                span {
                    font-size: 13px;
                }
            }

            .filterHolder {
                height: 10%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                div:nth-child(1) {
                    width: 70%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    input {
                        color: black;
                        width: 85%;
                        height: 28px;
                        border-radius: 6px;
                        border: none;
                    }
                }

                button {
                    height: 30px;
                    background-color: transparent;
                    border-radius: 4px;
                    border: 1px solid var(--Color-brand-1);
                    color: white;
                    cursor: pointer;
                }

                button:hover {
                    background-color: var(--Color-brand-1);
                }
            }

            .productsContainer {
                height: 82%;
                ul {
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    height: 100%;

                    ::-webkit-scrollbar {
                        width: 3px;
                    }
                    ::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    ::-webkit-scrollbar-thumb {
                        background: var(--Color-brand-1);
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: white;
                    }
                }
            }

            .productCard {
                background-color: var(--gray-1);
                border-radius:10px;
                display: flex;
                align-items: center;
                height: 90px;
                margin-right: 5px;

                p{
                    color:var(--light-black);
                }

                img{
                    width:80px;
                    height: 80px;
                    margin-left: 10px;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-left: 10px;
                    height: 80px;
                }

                :hover {
                    transform: scale(1.01);
                    transition: 200ms;
                    cursor: pointer;
                }
            }
        }

        .historicEntriesContainer {
            height: 100%;
            width: 50%;

            .historicEntriesInformation {
                height: 18%;
                display: flex;
                flex-direction: column;
                align-items: center;
                h3 {
                    font-size: 20px;
                    padding-bottom: 14px;
                }

                p {
                    font-size: 13px;
                    margin-bottom: 8px;
                }

                button {
                    height: 30px;
                    background-color: transparent;
                    border-radius: 4px;
                    border: 1px solid var(--Color-brand-1);
                    color: white;
                    cursor: pointer;
                }

                button:hover {
                    background-color: var(--Color-brand-1);
                }
            }

            ul {
                overflow-y: scroll;
                display: flex;
                flex-direction: column;
                gap: 8px;
                height: 82%; 

                ::-webkit-scrollbar {
                    width: 3px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                     background: var(--Color-brand-1);
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: white;
                }
            }

            .entryCard {
                width: 100% - 5px;
                height: 90px;
                min-height: 80px;
                background-color: var(--gray-1);
                border-radius:10px;
                display: flex;
                margin-right: 5px;
                padding: 0 3px;

                section:nth-child(1) {
                    width: 50%;
                    padding: 3px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    div:nth-child(1) {
                        display: flex;
                        width: 100%;
                        height: 25%;
                        align-items: flex-end;
                        gap: 7px;
                        h3 {
                            color: var(--light-black);
                            font-size: 14px;
                        }
                        span {
                            font-size: 14px;
                            color: var(--Color-brand-1);
                        }
                    }

                    div:nth-child(2) {
                        display: flex;
                        width: 100%;
                        background-color: white;
                        margin-top: 10px;
                        height: 55%;
                        border-radius: 6px;
                        padding: 4px 3px 0 3px;
                        box-sizing: border-box;
                        p {
                            color: var(--light-black);
                            font-size: 13px;
                        }  
                    }
                }

                section:nth-child(2) {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 3px;
                    box-sizing: border-box;
                    span {
                        color: var(--light-black);
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media (min-width: 1000px) {
        width: 80%;
    }

`