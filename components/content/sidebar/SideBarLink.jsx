import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


const SideBarLink = styled.div`
    display: flex;
    padding: 0 .5rem;
    gap: 1.5rem;
    align-items: center;


    > p {
        font-weight: ${props => props.active ? 500 : 200 };
        font-size: ${props => props.active ? '22px' : '18px' };
        color: ${props => props.active ? props.theme.textColorActive : props.theme.textColor };
        line-height: 95.5%;
    }
`

const SideBarLinkWrapper = ({ text, icon, link, width, height, active }) => {
  return (
    <SideBarLink active={active}>
        <Image src={icon} alt={text} width={width} height={height}  />
        <p>
            <Link href={link}>
                {text}
            </Link>
        </p>
    </SideBarLink>
  )
}

export default SideBarLinkWrapper