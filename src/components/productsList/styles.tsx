import styled from "styled-components";

interface componentProps {
  listMode?: boolean; // Define the addGap prop here
}

export const StyledProductsListUl = styled.ul<componentProps>`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  max-height: 754px;
  ${(props) => props.listMode && "gap: 10px; padding-top: 20px;"}

  ::-webkit-scrollbar {
    width: 1px;
  }

  .filteredNull {
    width: 100%;
    text-align: center;
    margin-top: 5rem;
    color: black;
    font-size: 32px;
    font-weight: bold;
  }

  span,
  h2 {
    color: black;
  }

  .redQty {
    color: red;
  }

  @media (max-width: 615px) {
    justify-content: center;
  }
`;
