import styled from "styled-components";
import { useRouter } from "next/router";
import Overview from '../../../public/assets/images/Overview.svg'
import Risk from '../../../public/assets/images/Risk.svg'
import SocialAnalysis from '../../../public/assets/images/SocialAnalysis.svg'
import Report from '../../../public/assets/images/Report.svg'
import Price from '../../../public/assets/images/Money.svg'
import Monitoring from '../../../public/assets/images/Monitoring.svg'
import SideBarLinkWrapper from "./SideBarLink";


const SideBarLinksData = [
    {
        text: 'Overview',
        icon: Overview,
        link: '/overview',
        width: 19,
        height: 20
    },
    {
        text: 'Risk Analysis',
        icon: Risk,
        link: '/risk-analysis',
        width: 22,
        height: 19
    },
    {
        text: 'Social Media Analysis',
        icon: SocialAnalysis,
        link: '/social-media-analysis',
        width: 23,
        height: 22
    },
    {
        text: 'Audit Report',
        icon: Report,
        link: '/audit-report',
        width: 21,
        height: 26
    },
    {
        text: 'Price Analysis',
        icon: Price,
        link: '/price-analysis',
        width: 26,
        height: 24
    },
    {
        text: 'On Chain Monitoring',
        icon: Monitoring,
        link: '/on-chain-monitoring',
        width: 23,
        height: 23
    },
]

const SideBar = styled.aside`
    width: 248px;
    background: ${({ theme }) => theme.primaryGradient};
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 1.6rem 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`


const Separator = styled.div`
    height: 1px;
    width: 112px;
    background: ${({ theme }) => theme.primary};
    border-radius: 20px;
    margin: 0 auto;
`

const SideBarWrapper = () => {
    const router = useRouter();
  return (
    <SideBar>
        {SideBarLinksData.map(({ link, text, icon, width, height}, index) => (
            <>
                <SideBarLinkWrapper 
                active={router.asPath.includes(link)}  
                key={link} 
                link={link} 
                text={text} 
                icon={icon} 
                width={width} 
                height={height} 
                />

                {index < SideBarLinksData.length - 1  && <Separator />}
            </>
        ))}
    </SideBar>
  )
}

export default SideBarWrapper



