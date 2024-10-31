import styled from "styled-components"
import { BiLogoKickstarter } from "react-icons/bi";

const Logo =(props)=>{
    return(
        <div>
                <Icon>

                    <NavLogo />

                    <p>Kuda.</p>

                </Icon>
        </div>
    );
};
export default Logo;

const Icon = styled.div`
    width: fit-content;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px black solid; */

    p{
        font-size: 25px;
        font-weight: 800;
        color: #40196d;

        @media (max-width: 1280px) {
            font-size: 20px;
        }

    }

`

const NavLogo = styled(BiLogoKickstarter)`
    font-size: 25px;
    color: #40196d;

    @media (max-width: 1280px) {
        font-size: 20px;
    }

`