import styled from "styled-components"

const Button =(props)=>{
    return(
        <div>
            
            <Buttons>
                <button className={`buttons ${props.display}`}>{props.text}</button>
            </Buttons>

        </div>
    );
};
export default Button;

const Buttons = styled.div`

    .buttonOne{
        width: 135px;
        height: 42px;
        border-radius: 10px;
        border: transparent;
        background-color: #40196d;
        color: white;
        font-size: 15px;
        font-weight: 700;
        text-align: center;

        @media (max-width: 1280px) {
            width: 115px;
            height: 40px;
            font-size: 14px;
        }

        @media (max-width: 990px) {
            display: none;
        }

    }

    .buttonTwo{
        width: 135px;
        height: 42px;
        border-radius: 10px;
        border: transparent;
        background-color: #40196d;
        color: white;
        font-size: 14px;
        font-weight: 550;
        text-align: center;

        @media (max-width: 765px) {
            width: 115px;
            height: 40px;
        }

    }

    .buttonThree{
        width: 135px;
        height: 42px;
        border-radius: 10px;
        border: transparent;
        background-color: #eff1ff;
        color: black;
        font-size: 14px;
        font-weight: 500;
        text-align: center;

        @media (max-width: 765px) {
            width: 115px;
            height: 40px;
        }

    }

    .buttonFour{
        width: 100px;
        height: 40px;
        border-radius: 10px;
        border: transparent;
        background-color: #40196d;
        color: white;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
    }

`