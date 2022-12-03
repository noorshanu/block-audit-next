import Image from 'next/image'
import Binance from '../../../public/assets/images/Binance.svg'
import Info from '../../../public/assets/images/Info.svg'
import Copy from '../../../public/assets/images/Copy.svg'
import LinksWrapper from '../../LinksWrapper'


const DetailsData = [
    { key: 'Token Name', value: 'PancakeSwap Token'},
    { key: 'Symbol', value: 'CAKE' },
    { key: 'Chain', value: 'BSC Mainnet', image: { src: Binance, alt: 'Binance'} },
    { key: 'Token Lunch Date', value: '1 September 2020' },
    { key: 'Total Supply', value: '952668799.7510512' },
    { key: 'Token Burn', value: '64.25%', redBorder: true  },
    { key: 'Next Unlock Date', value: '31 October 2022' },
    { key: 'Owner Address', link: '0x73feaa1ee3...'},
    { key: 'Creator Address', link: '0x73feaa1ee3...'},
]

const DetailEntity = ({ detail }) => {
    return (
        <div className='flex items-center justify-between gap-2 text-textColor'>
            <div className='flex gap-2 items-center'>
                <p className='text-lg font-light leading-[27px]'>{detail.key}</p>
                <Image src={Info} alt={detail.key} width={17} />
            </div>
            {!detail?.link && <div className='flex items-center gap-2'>
                {detail?.image && <Image src={detail.image.src} alt={detail.image.alt} />}
                <p style={detail?.redBorder && { border: '1px solid red', padding: '2px 5px'}} className='font-medium text-[16px] leading-[24px]'>{detail.value}</p>
            </div>}

            {detail?.link && <LinksWrapper text={detail.key} images={[{ src: Copy , alt: 'Copy'}]} />}
        </div>
    )
}

const TokenDetails = () => {
  return (
    <div className='p-6 rounded-[10px] border border-textColorActive text-textColorActive bg-[#111111] flex-1'>
        <div className='flex gap-2 items-center mb-4'>
        <h4 className='font-bold text-xl text-textColorActive'>Token Details</h4>
        <Image src={Info} alt='More' width={20} />
        </div>
        <div className='flex flex-col gap-5'>
            {DetailsData.map(detail => (<DetailEntity key={Math.random()} detail={detail} />))}
        </div>
    </div>
  )
}

export default TokenDetails