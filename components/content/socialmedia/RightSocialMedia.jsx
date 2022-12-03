import Image from 'next/image'
import UserAvatar from '../../../public/assets/images/UserAvatar.svg'
const Tweet = ({ followers}) => {
    return (
        <div className="border border-textColorActive p-2 rounded-[10px] min-w-[222px] flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Image src={UserAvatar} alt='User' width={30} />
                <div className='flex flex-col'>
                    <p className='font-semibold text-[10px]'>PancakeSwap #BSC</p>
                    <div className='flex justify-between items-center gap-10 w-full'>
                    <p className='text-[8px] font-thin text-textColor'>@pancakeswap</p>
                    {followers && <p className='text-[8px] font-thin text-textColor'><span className='font-semibold'>255k </span>followers</p>}
                    </div>
                </div>
            </div>
            <p className='font-light text-[8px]'>6,928,951 $CAKE just burned - that’s $26M! Trading fees (Swap and Perpetual): 277k CAKE ($1M) +69% Prediction: 62k (...more)</p>
            <div className='flex items-center justify-between gap-4 font-light text-[8px] text-textColor'>
                <p>Thu, 10 Nov 2022</p>
                <p>2:33 PM</p>
            </div>
        </div>
    )
}


const TweetList = ({ tweet, followers = false}) => {
    return (
        <div className="bg-black/90 rounded-[10px] max-w-full text-textColorActive p-4 hover:bg-black/40">
            <h5 className="font-light mb-3">Recent Tweets By <span className='font-bold'>{tweet}</span></h5>
            <div className='flex gap-2 max-w-full overflow-x-auto'>
            <Tweet followers={followers} />
            <Tweet followers={followers} />
            <Tweet followers={followers} />
            <Tweet followers={followers} />
            </div>
        </div>
    )
}


const RightSocialMedia = () => {
  return (
    <div 
    style={{ fontFamily: 'Poppins'}}
    className="rounded-[10px] bg-[#A4A4A4] p-4 max-w-[622px] flex flex-col gap-4 overflow-y-auto">
        <TweetList tweet='@PancakeSwap' />
        <TweetList followers tweet='Influencers' />
        <TweetList tweet='The Community' />
    </div>
  )
}

export default RightSocialMedia