import styled from "styled-components"
import AlertWrapper from "./AlertWrapper"
import CategoriesWrapper from "./CategoriesWrapper"
import ImagesWrapper from "./ImagesWrapper"
import ScoreWrapper from "./ScoreWrapper"

const OverviewWrapper = styled.div`
    color: ${({ theme }) => theme.textColorActive};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
`

const Overview = () => {
  return (
    <OverviewWrapper>
        <ImagesWrapper />
        <ScoreWrapper />
        <CategoriesWrapper />
        <AlertWrapper />
    </OverviewWrapper>
  )
}

export default Overview