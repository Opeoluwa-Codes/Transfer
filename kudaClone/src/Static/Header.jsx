import { useState } from 'react'
import { useEffect } from 'react';
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiWorld } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import SideBar from '../Components/SideBar';


const Header =()=>{

    const[toggle, setToggle] = useState(false)

    const ClickBurger = () =>{
        setToggle(!toggle)
    }

    return(
        <div>

            <NavWrapper>

                <div className='navLeft'>

                    <Logo/>

                    <div className='links'>

                        <section><p>Personal</p> <ArrowDown/></section>
                        <section><p>Business</p> <ArrowDown/></section>
                        <section><p>Company</p> <ArrowDown/></section>
                        <section><p>Help</p> <ArrowDown/></section>

                    </div>

                </div>

                <div className='navRight'>

                        <p>Sign In</p>
                        <Button display = "buttonOne" text =  "Join Kuda"/>
                        
                        <div className='globeIcon'>
                            <Globe/> 
                        </div>
                        
                        <div className='burgerMenu'>
                            <HamburgerMenu style = {{cursor: "pointer"}} onClick={()=> ClickBurger()}/>    
                        </div>
                        
                </div>

            </NavWrapper>

            <SideBar isOpen = {toggle} onClose = {()=> setToggle(false)}/>

        </div>
    );
};
export default Header;

const NavWrapper = styled.div`

    width: 100%;
    height: 66px;
    box-sizing: border-box;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px 5px #eff1ff;
    background-color: white;
    position: fixed;
    top: 0px;
    z-index: 10000;
    /* border: 1px black solid; */

    @media (max-width: 1280px) {
        height: 58px;
    }

    @media (max-width: 1025px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (max-width: 765px) {
        padding-left: 25px;
        padding-right: 25px;
    }

    .navLeft{
        width: 600px;
        height: inherit;
        /* border: 1px black solid; */
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1280px) {
            width: 540px;
        }

        .links{
            width: 400px;
            height: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* border: 1px black solid; */

            @media (max-width: 990px) {
                display: none;
            }

            section{
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 14px;
                    font-weight: 700;
                    color: #40196d;
                }

            }

        }

    }

    .navRight{
        width: 284px;
        height: inherit;
        /* border: 1px black solid; */
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1280px) {
            width: 255px;
        }

        @media (max-width: 990px) {
            justify-content: end;
            gap: 18px;
        }
        
        .burgerMenu{
            display: none;

            @media (max-width: 990px) {
                display: flex;
            }

        }

        p{
            font-size: 14px;
            font-weight: 700;
            color: #40196d;

            @media (max-width: 990px) {
                display: none;
            }

        }


        .globeIcon{
            background-color: #bbeffa;
            border-radius: 100%;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
`

const ArrowDown = styled(IoMdArrowDropdown)`
    font-size: 18px;
    color: #40196d;

    @media (max-width: 1280px) {
        font-size: 15px;
    }

`

const Globe = styled(GiWorld)`
    font-size: 15px;
    color: green;
`

const HamburgerMenu = styled(RxHamburgerMenu)`
    font-size: 20px;
    color: #40196d;
`