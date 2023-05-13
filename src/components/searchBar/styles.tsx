import styled from "styled-components";

export const StyledSearchBar = styled.section`
    background-color: white;
    border: 2px solid var(--gray-2);
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    div:nth-child(1) {
        height: 50px;
        padding: 0 16%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        input {
            width: 89%;
            height: 76%;
            border-radius: 10px;
            border: 2px solid var(--gray-1);
            padding: 0 10px;
            box-sizing: border-box;
            color: var(--light-black);
        }

        svg:hover {
            transform: scale(1.07);
            transition: 500ms;
            cursor: pointer;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        padding-bottom: 4px;
        padding: 0 50px 5px 50px;

        ul {
            min-width: 30%;
            max-width: 90;
            display: flex;
            gap: 14px;
            overflow-x: scroll;
            padding-bottom: 5px;

            ::-webkit-scrollbar {
                height: 4px;
            }

            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px lightgray;
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background: var(--gray-3);
                border-radius: 10px;
            }
        }

        .showAllCard {
            background-color: #ff9100;

            :hover {
                background-color: #ffc400;
                h3 {
                    color: white;
                }
            } 
        }

        li {
            height: 24px;
            background-color: var(--light-black);
            border-radius: 16px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
        }

        .showLowQty{
            background-color: #c40000;
        }

        li:hover {
            background-color: var(--gray-1);
            transition: 500ms;

            h3 {
                color: var(--light-black);
            }
        }

        li:not(:hover) {
            transition: 500ms;
        }
    }
`