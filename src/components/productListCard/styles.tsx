import styled from "styled-components";

export const StyledProductListCard = styled.li`
  width: 100%;
  height: 50px;
  background-color: lightblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 5px;

  .iconDiv {
    width: 5%;
    display: flex;
    justify-content: center;
  }

  .nameDiv {
    width: 26%;
  }

  .entryCostValue {
    width: 24%;
  }

  .qtyDiv {
    width: 10%;
  }

  .finalCostDiv {
    width: 20%;
  }

  .actionsDiv {
    width: 15%;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  svg:hover {
    transform: scale(1.15);
    transition: 500ms;
    cursor: pointer;
  }

  svg:not(:hover) {
    transition: 500ms;
  }
`;
