import Image from "next/image"
import styled from "styled-components"
import Share from '../../../public/assets/images/Share.svg'
const WebsiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-end;


    > h4 {
        font-weight: 500;
        font-size: 15px;  
        color: ${({ theme }) => theme.textColor}  
    }

    p {
        font-weight: 500;
        font-size: 12px;
        color: #262626;
        margin-left: .1rem;
    }
`

const LinkWrapper = styled.div`
    background: #D9D9D9;
    border-radius: 20px;
    padding: .3rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 129px;
    height: 19px;
`

const Website = () => {
  return (
    <WebsiteWrapper>
        <h4>Website</h4>
        <LinkWrapper>
            <p>pancakeswap...</p>
            <Image src={Share} alt={'Share'} />
        </LinkWrapper>
    </WebsiteWrapper>
  )
}

export default Website