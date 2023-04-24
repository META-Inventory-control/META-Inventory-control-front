import styled from "styled-components";

export const StyledCreateGroupModal = styled.div`
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

    .divButtons{
        display:flex;
        flex-direction:row;
    }

    .buttonPatch{
        border: 2px solid var(--Color-brand-1);
        border-radius: 3px;

        background-color:transparent;
        color: var(--Color-brand-1);
        padding: 4px 8px;
        cursor:pointer;
    }

    .buttonDelete{
        border: 2px solid red;
        border-radius: 3px;

        background-color:transparent;
        color:red;
        padding: 4px 8px;
        cursor:pointer;
    }

    .divButtons > h3{
        width: 250px;
    }

    .formPatch{
        display:flex;
        align-items:center;
        gap: 1rem;
    }

    .formPatch > input{
        margin: 0px;
    }

    .formPatch > button{
        width:100px;
        cursor:pointer;
    }

    .existGroupUl{
        max-height: 300px;
        width: 300px;
        overflow-y:auto;

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

    .existGroupUl > li{
        display: flex;
        align-items: center;
        justify-content: center;

        margin:10px;
        padding:5px;
        border:2px solid var(--Color-brand-1);
    }

    .ulEmpty{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ulGroups{
        max-height:200px;
        overflow-y:auto;

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
        background: black;
        }
    }

    .liGroups{
        margin:0.6rem;
        padding:0.6rem;
        background-color:var(--light-black);
        border-radius:3px;
        cursor:pointer;
    }

    .existGroupUl > li > button{
        background-color:var(--light-black);
        color:var(--gray-1);
        border-radius:3px;
        cursor:pointer;
    }

    .divList{
        background-color:var(--light-black);
        border-radius:6px;
        padding:1rem;
        width: 400px;
        height: 400px;
    }

    h2{
        text-align:center;
        margin:1.2rem 0px;  
    }

    @media (min-width: 1000px) {
        width: 80%;
    }

    main {
        width: 76%;
        height: 550px;
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
    
            input {
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
        
    }
}


    /* @media (min-width: 1000px) {
        width: 30%;

    } */
`