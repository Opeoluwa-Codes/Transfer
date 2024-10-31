import { useState } from 'react'
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "../Components/Logo"
import Button from "../Components/Button"

const Footer =()=>{
    return(
        <div>

            <FooterWrapper>

                <div>
                    <Logo/>
                </div>

                <div>
                    <Button text = "Get the App" display = "buttonFour"/>
                </div>

            </FooterWrapper>

        </div>
    );
};
export default Footer;

const FooterWrapper = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 80px;
        z-index: 10000;
        background-color: #eff1ff
    }
    
`