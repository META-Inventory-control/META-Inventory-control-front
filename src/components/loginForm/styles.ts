import styled from "styled-components"

export const LoginDiv = styled.div`
    padding: 160px 0;

    main {
        background-color: #2E2A2A;
        width: 86%;
        height: 400px;
        margin: 0 auto;
        border: 3px solid #1AD300;
        border-radius: 30px;
        padding: 20px 0 0 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 40px;
        height: 40px;
        margin: 10px 0;
    }

    h2 {
        font-size: 30px;
        height:20%;
        display: flex;
        align-items: end;
    }

    form {
        height: 80%;
        padding: 40px 18px;

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

        .passwordInput{
            margin: 14px 0 22px 0;
        }

        button {
            width: 100%;
            height: 38px;
            border: 1.5px solid #1AD300;
            border-radius: 8px;
            background-color: transparent;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        a {
            display: flex;
            justify-content: center;
            margin-bottom: 14px;
            cursor: pointer;
            font-size: 15px;
        }

        button:hover {
            background-color: #16B400;
            transform: scale(1.02);
            transition: 650ms;
            box-shadow: rgba(26, 211, 0, 0.3) 0px 4px 12px;
        }

        button:not(:hover) {
            transition: 650ms;
        }
    }

    @media (min-width: 1000px) {
        padding: 200px 0;

        main {
            width: 30%;
            height: 460px;
        }

        img {
            width: 50px;
            height: 50px;
            margin: 14px 0;
        }
        
        h2 {
            height:15%;
        }

        form {
            .passwordInput{
                margin: 14px 0 28px 0;
            }

            a {
                margin-bottom: 28px;
            }

            a:hover {
                text-decoration: underline;
            }

            button {
                height: 44px;
            }
        }
    }
`;