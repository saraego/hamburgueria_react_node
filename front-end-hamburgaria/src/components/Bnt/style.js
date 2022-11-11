import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin: 70px 0 40px 0;
    background:  ${props => props.notIsRed ? "rgba(255, 255, 255, 0.14);" : "#D93856"};
    

    font-weight: 900;
    font-size: 19px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.4;
    }
`