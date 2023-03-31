import styled from "styled-components";

export const StyledProductsListUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    span, h2 {
        color: black;
    }

    .productCard {
        height: 350px;
        width: 305px;
        border-radius: 26px;
        margin-bottom: 30px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
    
`