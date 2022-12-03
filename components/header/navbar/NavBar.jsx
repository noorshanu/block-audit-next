import Link from "next/link";
import styled from "styled-components";
import NavLink from "./navLink";

const navLinksData = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Audits',
        link: '/'
    }, 
    {
        text: 'Services',
        link: '/'
    }, 
    {
        text: 'Contact',
        link: '/'
    }
]

const Nav = styled.nav`
    gap: 3rem;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding-left: 4.5rem;
`


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

`

const NavButton = styled.div`
    border: 2px solid ${({ theme }) => theme.textColorActive};
    color: ${({ theme }) => theme.textColorActive};
    backdrop-filter: blur(5.5px);
    border-radius: 15px;
    font-weight: 300;
    font-size: 20px;
    line-height: 119.5%;
    padding: .5rem 1rem;
`

const NavBar = () => {
  return (
    <Nav>
        <Wrapper>
            {navLinksData.map(({ text, link }) => (
                <NavLink key={text} text={text} link={link} />
            ))}
        </Wrapper>
        <Wrapper>
                <NavButton>Request A KYC</NavButton>
                <NavButton>Request An Audit</NavButton>
        </Wrapper>
    </Nav>
  )
}

export default NavBar