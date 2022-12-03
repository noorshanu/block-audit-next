import Head from 'next/head'
import Image from 'next/image'
import Left from '../components/content/chain-monitoring/Left'
import Right from '../components/content/chain-monitoring/Right'
import Introduction from '../components/content/overview/Introduction'
import Overview from '../components/content/overview/Overview'
import TokenDetails from '../components/content/overview/TokenDetails'
import PriceChart from '../components/content/Price/PriceChart'
import PriceRight from '../components/content/Price/PriceRight'
import Priviledges from '../components/content/risk/Priviledges'
import RiskLast from '../components/content/risk/RiskLast'
import RiskMedium from '../components/content/risk/RiskMedium'
import LeftSocialMedia from '../components/content/socialmedia/LeftSocialMedia'
import RightSocialMedia from '../components/content/socialmedia/RightSocialMedia'


export default function Home() {

  return (
    <>
      <Overview />
      <Introduction />
      <TokenDetails />
      {/* <Priviledges />
      <RiskMedium />
      <RiskLast /> */}
      {/* <Left />
      <Right /> */}
      {/* <LeftSocialMedia />
      <RightSocialMedia /> */}
      {/* <PriceChart />
      <PriceRight /> */}
    </>
  )
}
