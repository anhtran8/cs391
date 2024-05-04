import {NavLink} from "react-router-dom";
import styled from "styled-components";
import giphy from "../../public/giphy.gif"


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lemonchiffon ;
    font-family: "Skia";
    min-height: 100%;
    margin: 0;
    padding-bottom: 20px;
`;

const HeaderText = styled.h1 `
    text-align: center;
    font-size: 2.5em;
    line-height: 0.6;
    font-family: "Skia";
`;

const StyledNav = styled.nav `
    a {
    margin-top: 30px;
    font-weight: bold;
    &:hover{
        text-decoration: underline;
    }
        }
`;

const StyledLink = styled(NavLink)`
    margin-right: 30px; 
    text-decoration: none;
    color: black;
    font-size: 1.2em; 
`;

const StyledImg = styled.img`
    width: 150px;
`;

function Header() {
    return (
        <StyledHeader>
            <HeaderText>
                <StyledLink to='/'>My Portfolio</StyledLink>
            </HeaderText>
            <StyledImg src={giphy} alt="a gif"/>
            <StyledNav>
                <StyledLink to='/'>
                    About Me
                </StyledLink>
                <StyledLink to='/projects'>
                    Projects
                </StyledLink>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;