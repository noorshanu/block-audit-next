import styled from 'styled-components';
import Link from 'next/link'

const NavBarItem = styled.p`
    color: ${({ theme }) => theme.textColorActive};
    font-weight: 400;
    font-size: 20px;
    text-transform: capitalize;
`

const NavLink = ({ text, link }) => {
  return (
    <Link href={link}>
        <NavBarItem>
            {text}
        </NavBarItem>
    </Link>
  )
}

export default NavLink