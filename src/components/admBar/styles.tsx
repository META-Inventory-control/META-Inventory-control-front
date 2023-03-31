import styled from "styled-components";

export const StyledAdmBarHeader = styled.header`
    background-color: var(--gray-1);
    width: 100%;
    height: 100px;
    padding: 0 80px;
    box-sizing: border-box;
    display: flex;
    gap: 18px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .addProduct {
        background-color: var(--Color-brand-1);
        width: 220px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
        border-radius: 10px;
    }

    .addProduct:hover {
        transform: scale(1.05);
        transition: 500ms;
        cursor: pointer;
    }

    .addProduct:not(:hover) {
        transition: 500ms;
    }

    .addUser {
        background-color: var(--Color-brand-1);
        width: 180px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
        border-radius: 10px;
    }

    .addUser:hover {
        transform: scale(1.05);
        transition: 500ms;
        cursor: pointer;
    }

    .addUser:not(:hover) {
        transition: 500ms;
    }

    
`