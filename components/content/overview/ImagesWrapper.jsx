import Image from "next/image"
import styled from "styled-components"
import BlockAuditContract from '../../../public/assets/images/BlackAuditContract.svg'
import BlockAuditKYC from '../../../public/assets/images/BlackAuditKYC.svg'
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`


const ImagesWrapper = () => {
  return (
    <Wrapper>
      <Image src={BlockAuditKYC} alt='Block Audit KYC'  />
      <Image style={{ marginTop:'20px'}} src={BlockAuditContract} alt='Block Audit Contract' />
    </Wrapper>
  )
}

export default ImagesWrapper