import { useState } from 'react'
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowRight } from "react-icons/md";

const SideBar =({isOpen, onClose})=>{
    return(
        <div>

            <SideWrapper className={isOpen ? "open" : ""}>

                <div className='headerDiv'>
                        <Logo/>
                        <Close onClick = {onClose}/>           
                </div>

                <div className='buttonDiv'>

                        <Button text = "Join Kuda" display = "buttonTwo"/>
                        <Button text = "Sign In" display = "buttonThree"/>
                        
                </div>

                <div className='linkDiv'>

                    <section><p>Personal</p><ArrowRight/></section>
                    <section><p>Business</p><ArrowRight/></section>
                    <section><p>Company</p><ArrowRight/></section>
                    <section><p>Developer</p></section>
                    <section><p>Contact Us</p></section>
                    <LastSection><p>Help</p><ArrowRight/></LastSection>

                </div>

            </SideWrapper>

        </div>
    );
};
export default SideBar;

const Close = styled(IoClose)`
    font-size: 25px;
    color: #40196d;
`

const ArrowRight = styled(MdOutlineArrowRight)`
    font-size: 22px;
    color: #40196d;
`

const SideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    position: fixed;
    top: 0;
    right: -100%;

    width: 100%;
    height: 100vh;
    background: white;

    transition: 0.5s ease-in-out;
    z-index: 20000;
    
    &.open {
        right: 0;
    }

    @media (min-width: 995px) {
        display: none;
    }

    .headerDiv{
        width: inherit;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .buttonDiv{
        height: fit-content;
        width: 285px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20%;

        @media (max-width: 765px) {
        width: 245px;
        height: fit-content;
        }

    }

    .linkDiv{
        display: flex;
        flex-direction: column;
        width: inherit;
        height: fit-content;

        section{
            height: 65px;
            border-bottom: 0.1px #e0dbdb solid;
            box-sizing: border-box;
            margin-left: 20px;
            margin-right: 38px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                font-size: 16px;
                font-weight: 800;
                color: #40196d;
            }

        }
    }
`

const LastSection = styled.div`
    height: 65px;
    box-sizing: border-box;
    margin-left: 20px;
    margin-right: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        
        p{
            font-size: 16px;
            font-weight: 800;
            color: #40196d;
        }

`