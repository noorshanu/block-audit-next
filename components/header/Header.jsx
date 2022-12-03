import styled from "styled-components"
import Logo from "./Logo"
import NavBar from "./navbar/NavBar"

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1700px;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

const Header = () => {
  return (
    <header>
        <Container>
            <Logo />
            <NavBar />
        </Container>
    </header>
  )
}

export default Header