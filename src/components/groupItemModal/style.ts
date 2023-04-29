import styled from "styled-components";

export const StyledGroupItem = styled.li`

background-color: var(--gray-1);
border-radius:10px;
display: flex;
align-items: center;
height: 90px;

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
`