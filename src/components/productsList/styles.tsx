import styled from "styled-components";

export const StyledProductsListUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;
    max-height: 754px;

    ::-webkit-scrollbar {
        width: 1px;
    }

    .filteredNull{
        width:100%;
        text-align:center;
        margin-top:5rem;
        color:black;
        font-size:32px;
        font-weight:bold;
    }
    
    span, h2 {
        color: black;
    }

    .productCard {
        height: 350px;
        width: 305px;
        border-radius: 26px;
        margin-top: 26px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: relative;

        .groupDiv {
            position: absolute;
            background-color: var(--light-black);
            padding: 2px;
            left: 8%;
            border-radius: 0 0 5px 5px;

            span {
                color: white;
                font-size: 12px;
                display: flex;
                justify-content: center;
            }
        }

        .codeDiv {
            position: absolute;
            background-color: var(--Color-brand-2);
            padding: 2px;
            right: 8%;
            border-radius: 0 0 5px 5px;

            span {
                color: white;
                font-size: 12px;
                display: flex;
                justify-content: center;
            }
        }

        .imgDiv {
            width: 100%;
            height: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--gray-2);
            border-radius: 26px 26px 0 0;
    
            img {
                max-height: 88%;
            }
        }

        .contentDiv {
            background-color: white;
            width: 100%;
            height: 55%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid var(--gray-2);
            border-top: none;
            border-radius: 0 0 26px 26px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .contentDiv div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2px;
        }
    
        .contentDiv div:nth-child(1) {
            height: 28%;

            h2 {
                font-size: 22px;
                width: 88%;
            }

            svg:hover {
                transform: scale(1.15);
                transition: 500ms;
                cursor: pointer;
            }

            svg:not(:hover) {
                transition: 500ms;
            }
        }

        .contentDiv div:nth-child(2) {
            height: 16%;
        }

        .contentDiv div:nth-child(3) {
            height: 16%;
        }

        .contentDiv div:nth-child(4) {
            height: 16%;
            background-color: var(--Color-brand-2);
            padding: 6px 10px;
            border-radius: 16px;
            margin-top: 14px;
            
            span {
                color: white;
            }
        }
    }

    @media (max-width: 615px) {
        justify-content: center;
    }
    
`