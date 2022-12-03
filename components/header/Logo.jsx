import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"
import Group from '../../public/assets/images/group.png'


const LogoText = styled.h2`
    font-weight: 500;
    font-size: 25px;
    line-height: 119.5%;
    color: ${({ theme }) => theme.textColorActive};
    font-style: normal;
    z-index: 10;
`


const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem
`

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
    width: 207px;
    height: 90px;
`

const GreenLive = styled.span`
    position: absolute;
    right: 0;
    width: 76px;
    height: 28px;
    background: ${({ theme }) => theme.primaryGreenGradient};
    border-radius: 3px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    transform: matrix(1, 0, 0, -1, 0, 0);
`





const Logo = () => {
  return (
    <Link href='/'>
        <Container>
            <Image src={Group} width={'41.47px'} height={'47.92px'} alt='BlockAudit Live' />
            <TextWrapper>
                <LogoText>BlockAudit  LIVE</LogoText>
                <GreenLive />
            </TextWrapper>
        </Container>
    </Link>
  )
}

export default Logo