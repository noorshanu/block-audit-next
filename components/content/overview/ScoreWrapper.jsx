import Image from "next/image"
import styled from "styled-components"
import Info from '../../../public/assets/images/Info.svg'
import ScoreImage from '../../../public/assets/images/Score.png'


const Score = styled.div`
    padding: .8rem 1.5rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.textContent};
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
`


const AuditScoreTextWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    color: ${({ theme }) => theme.textColorActive};


    > div {
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }


    > div h4 {
        font-weight: 600;
        font-size: 30px;
        line-height: 90%;
    }

    > div p {
        font-weight: 300;
    font-size: 16px;
    line-height: 119.5%;
    }
`

const ScoreValueWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;


    > h5 {
        position: absolute;
        font-weight: 600;
        font-size: 35px;
        line-height: 90%;
    }

`

const ScoreWrapper = () => {
  return (
    <Score>
        <AuditScoreTextWrapper>
            <div>
                <h4>Audit <br /> Score</h4>
                <p>Out of 100</p>
            </div>
            <Image src={Info} alt='Info' />
        </AuditScoreTextWrapper>
        <ScoreValueWrapper>
            <h5>84</h5>
            <Image src={ScoreImage} alt={'Score Chart'} />
        </ScoreValueWrapper>
    </Score>
  )
}

export default ScoreWrapper