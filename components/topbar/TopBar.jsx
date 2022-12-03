import styled from "styled-components"
import Links from "./links/Links"
import Stats from "./Stats"
import User from "./User"

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1700px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primaryGradient};
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;
    height: 113px;
    padding: .8rem;
    font-family: 'Poppins', sans-serif;
`

const TopBar = () => {
  return (
    <Container>
        <User />
        <Stats />
        <Links />
    </Container>
  )
}

export default TopBar