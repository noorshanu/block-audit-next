import styled from "styled-components"

const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, fit-content(200px));
    gap: 2rem;
`

const State = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: 0 2rem;

    &:not(:last-child) {
        border-right: 2px solid #535353;
    }

    > p {
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme.textColor};
    }


    > h4 {
        color: ${({ theme }) => theme.textColorActive};
        font-weight: 700;
        font-size: 30px;
    }


    > h5 {
        color: ${({ theme }) => theme.textColorActive};
        font-weight: 700;
        font-size: 22px;
        margin-top: .3rem;
    }

    > button {
        background-color: ${({ theme }) => theme.red};
        padding: .4rem;
        color: ${({ theme }) => theme.textColorPrimary};
        display: flex;
        align-items: center;
        gap: .5rem;
        font-weight: 500;
        font-size: 18px;
    }
`

const Stats = () => {
  return (
    <StatsWrapper>
        <State>
            <p>Current Price (CAKE)</p>
            <h4>$4.38</h4>
        </State>
        <State>
            <p>24 Hour Change</p>
            <h4>$4.38</h4>
        </State>
        <State>
            <p>Market Cap</p>
            <h5>$638,463,664</h5>
        </State>
    </StatsWrapper>
  )
}

export default Stats