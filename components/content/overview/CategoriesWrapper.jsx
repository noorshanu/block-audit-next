import Image from "next/image"
import Info from '../../../public/assets/images/Info.svg'
import styled from "styled-components"

const Categories = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.textColorActive };
    border-radius: 10px;
    color: ${({ theme }) => theme.textColorActive};

    h5 {
        font-weight: 300;
        font-size: 20px;
        line-height: 90%;
    }


    p {
        font-weight: 500;
        font-size: 18px;
        line-height: 119.5%;
        padding: .2rem .4rem;
        border: 1px solid ${({ theme }) => theme.textColorActive };
    }
`

const TitleWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`

const CategoriesList = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`

const CategoriesWrapper = () => {
  return (
    <Categories>
        <TitleWrapper>
            <h5>Categories</h5>
            <Image src={Info} alt='Categories Infos' />
        </TitleWrapper>
        <CategoriesList>
            <p>Dex</p>
            <p>DeFi</p>
            <p>NFTs</p>
        </CategoriesList>
    </Categories>
  )
}

export default CategoriesWrapper