import styled from "styled-components"
import Image from "next/image"
import Info from '../../../public/assets/images/Info.svg'
import { useState } from "react"


const Alert = styled.div`
    padding: .8rem 1.5rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.textColorActive };
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h5 {
        font-weight: 300;
        font-size: 20px;
        line-height: 90%;
    }

    button, input {
        font-weight: 300;
        font-size: 14px;
        line-height: 119.5%;
        outline: none;
        padding: .2rem .5rem;
        border-radius: 7px;
    }

    button {
        background: ${({ theme }) => theme.red};
        font-weight: 300;
        font-size: 14px;
        line-height: 119.5%;
        border: none;
        width: fit-content;
        color: inherit;
    }

    input {
        background: #404040;
        color: ${({ theme }) => theme.textColor};
    }
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: space-between;
`

const AlertWrapper = () => {
    const [email, setEmail] = useState('')
  return (
    <Alert>
        <TitleWrapper>
            <h5>
                Get Alerts on Your Email.
            </h5>
            <Image src={Info} alt='Alert Infos' />
        </TitleWrapper>
        <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            required
            placeholder="Enter Email"
        />
        <button>
            Submit
        </button>
    </Alert>
  )
}

export default AlertWrapper