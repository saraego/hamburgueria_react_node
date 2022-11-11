import styled from "styled-components";

export const Image = styled.img`
    margin-left: 50px;
    margin-bottom: 10px;
`

export const Ul = styled.ul`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    button{
        background-color: transparent;
        border: none;
        cursor: pointer; 
    }

    p{
        font-weight: 100;
        font-size: 18px;
        letter-spacing: -0.408px;
        color: #FFF;
    }
`

export const LabelInput = styled.label`
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.408px;
    color: #FFF;
`

export const Li = styled.li`
margin-top: 10px;
    width: 342px;
    height: 101px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 26px;
    }
`