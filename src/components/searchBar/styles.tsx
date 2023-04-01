import styled from "styled-components";

export const StyledSearchBar = styled.section`
    background-color: white;
    height: 55px;
    border: 2px solid var(--gray-2);
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
        color: black;
    }

    svg:hover {
        transform: scale(1.07);
        transition: 500ms;
        cursor: pointer;
    }
`