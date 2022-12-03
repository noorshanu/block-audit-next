import Image from "next/image"
import Info from '../../../public/assets/images/Info.svg'
import ThumbsUp from '../../../public/assets/images/ThumbsUp.svg'
import Copy from '../../../public/assets/images/Copy.svg'
import TreeDotes from '../../../public/assets/images/TreeDots.png'
import LinksWrapper from "../../LinksWrapper"
const HighlightsData = [
    'Project is Relatively Decentralized',
    'Large Market Cap (top 25%)',
    'Long-running Project'
]


const Introduction = () => {
  return (
    <div className="flex flex-col gap-6 h-full max-w-[520px]">
        <div className="bg-[#2D2D2D] p-6 rounded-[10px] border border-gray-100 text-textColorActive">
            <h4 className="text-[22px] leading-[119%] font-bold capitalize mb-2">Introduction to the project</h4>
            <p className="text-[15px] font-light"><span className="font-bold">PancakeSwap</span> is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain. PancakeSwap uses an automated market maker (AMM) model where users trade against <span className="underline font-bold">(Read More)</span></p>

            <div className="flex gap-2 items-center my-4">
                <h5 className="text-lg font-semibold">Highlights</h5>
                <Image src={Info} alt='More Infos' />
            </div>
            <div className="flex-col flex gap-2">
            {HighlightsData.map((highlight, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <div className="p-1 bg-[#535353] grid items-center rounded-[3px]">
                        <Image src={ThumbsUp} alt={highlight} />
                    </div>
                    <p className="text-[15px] leading-[22.5%] font-light">{highlight}</p>
                </div>
            ))}
            </div>
        </div>
        <div className="bg-[#2D2D2D] p-6 rounded-[10px] border border-gray-100 text-textColorActive">
            <h4 className="text-[22px] leading-[119%] font-bold capitalize mb-2">Additional Info</h4>
            <div className="flex flex-col gap-2 leading-[150%]">
                <div className="flex justify-between items-center text-textColor ">
                    <p className="text-[18px] font-thin ">Audit Onboarding Date</p>
                    <p className="text-[16px] font-medium text-textColorActive ">12 October 2022</p>
                </div>
                <div className="flex justify-between items-center text-textColor ">
                    <p className="text-[18px] font-thin ">Audits</p>
                    <p className="text-[16px] font-medium text-textColorActive underline ">1 Available</p>
                </div>
                <div className="flex justify-between items-center text-textColor ">
                    <p className="text-[18px] font-thin ">Contracts</p>
                    <LinksWrapper text='0x0e09fabb...' images={[{ src: Copy, alt: 'Copy'}, { src: TreeDotes, alt: 'More'}]} />
                </div>
                <div className="flex justify-between items-center text-textColor ">
                    <p className="text-[18px] font-thin ">Website</p>
                    <LinksWrapper text='pancakeswap.fi...' images={[{ src: Copy, alt: 'Copy'}]} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction
