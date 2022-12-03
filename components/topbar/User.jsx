import Image from 'next/image'
import styled from 'styled-components'
import UserAvatar from '../../public/assets/images/UserAvatar.svg'
import Copy from '../../public/assets/images/Copy.svg'
import Subtract from '../../public/assets/images/Subtract.svg'

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-left: 1.3rem;
`

const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`


const Username = styled.h2`
    font-weight: 700;
    font-size: 30px;
    line-height: 119.5%;
    color: ${({ theme }) => theme.textColorActive};
`

const LinkWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    color: ${({ theme }) => theme.textColor}; 
    font-size: 12px;
    font-weight: 300;
`



const User = () => {
  return (
    <UserWrapper>
        <Image src={UserAvatar} alt={'Username'} />
        <InfosWrapper>
            <Username>PancakeSwap</Username>
            <LinkWrapper>
                <Image src={Subtract} alt='Subtract'  />
                <p>0x0e09f....abb73b</p>
                <Image src={Copy} alt='Copy' />
            </LinkWrapper>
        </InfosWrapper>
    </UserWrapper>
  )
}

export default User