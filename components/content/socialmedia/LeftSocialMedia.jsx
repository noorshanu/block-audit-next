import Title from "../../Title"
import Discord from '../../../public/assets/images/DiscordWhite.svg'
import Telegram from '../../../public/assets/images/TelegramWhite.svg'
import Github from '../../../public/assets/images/GithubWhite.svg'
import SocialIcon from '../../../public/assets/images/SocialIconWhite.svg'
import Twitter from '../../../public/assets/images/TwitterWhite.svg'
import Mention from '../../../public/assets/images/Mention.svg'
import Followers from '../../../public/assets/images/Followers.svg'
import Following from '../../../public/assets/images/Following.svg'
import Tweet from '../../../public/assets/images/Tweet.svg'
import Positive from '../../../public/assets/images/Positive.svg'
import Negative from '../../../public/assets/images/Negative.svg'
import Stable from '../../../public/assets/images/Stable.svg'
import SocialMediaData from '../../../data/SocialMediaData.json'
import TwitterData from '../../../data/TwitterData.json'
import Image from "next/image"
import Link from "next/link"


const Top = () => {
    return (
        <div className="p-4 rounded-[10px] border border-textColor">
            <Title includeIcon={false} text='Social Links' />
            <div className="flex items-center gap-4 mt-3">
            <Link href={SocialMediaData.discord}>
                <Image src={Discord} alt='Discord' width={29} />
            </Link>
            <Link href={SocialMediaData.twitter}>
                <Image src={Twitter} alt='Twitter' width={25} />
            </Link>
            <Link href={SocialMediaData.telegram}>
                <Image src={Telegram} alt='Telegram' width={25} />
            </Link>
            <Link href={SocialMediaData.socialIcon}>
                <Image src={SocialIcon} alt='SocialIcon' width={25} />
            </Link>
            <Link href={SocialMediaData.github}>
                <Image src={Github} alt='Github' width={25} />
            </Link>
            </div>
        </div>
    )
}

const Bottom = () => {
    return (
        <div className="border-special rounded-[10px] p-[3px] flex-1 text-textColorActive">
            <div className="flex bg-[#242424] rounded-[10px] p-4 flex-col gap-2 h-full w-full">
                <Title text='Related Terms List' />
                <p className="text-xs font-extralight">List of words most used on Twitter by the community regarding the project in the past <span className="font-bold">24 hours</span> according to their <span className="font-bold">volume.</span></p>
                <div className="flex flex-1 justify-between flex-col">
                {Array(8).fill('quack').map((word, index) => (
                    <p style={{ fontSize:`${46 / (index + 1)}px`}} key={index} className='flex gap-4 items-center'><span>{index + 1}</span>{word}</p>
                ))}
                </div>
            </div>
        </div>
    )
}

const TwitterOverviewEntity = ({ category, total, value, icon}) => {
    return (
        <div className="border rounded-[10px] border-textColor p-2 flex gap-4 justify-between">
            <div className="flex flex-col gap-1 items-start">
                <p className="text-lg font-medium">{category}</p>
                <p className="text-sm font-medium">Total</p>
                <p className="font-medium">{total}</p>
            </div>
            <div className="flex flex-col gap-1 items-end">
                <Image src={icon} alt={category} />
                <p className="text-sm font-medium">New <span className="font-thin"> [24h]</span></p>
                <span
                className="p-0.5 w-16 px-2 flex justify-between"
                style={{ backgroundColor: value > 0 ? '#00B51D' : value === 0 ? '#6C6C6C' : '#FF1616'}}
                >
                <Image src={value > 0 ? Positive : value === 0 ? Stable : Negative} alt={'Stat'} />
                <p>{value}</p>
                </span>
            </div>
        </div>
    )
}


const Right = () => {
    return (
        <div className="border-special rounded-[10px] p-4 flex-1 text-textColorActive h-full w-[327px] flex flex-col">
            <div className="flex items-center justify-between">
                <Title includeIcon={false} text='Twitter Overview' />
                <Image src={Twitter} alt='Twitter overview' />
            </div>
           <div className="flex flex-col flex-1 gap-4 mt-2">
           <TwitterOverviewEntity category={'Followers'} total={TwitterData.followers.total} value={TwitterData.followers.new} icon={Followers} />
            <TwitterOverviewEntity category={'Following'} total={TwitterData.following.total} value={TwitterData.following.new} icon={Following} />
            <TwitterOverviewEntity category={'Tweets'} total={TwitterData.tweets.total} value={TwitterData.tweets.new} icon={Tweet} />
            <TwitterOverviewEntity category={'Mentions'} total={TwitterData.mentions.total} value={TwitterData.mentions.new} icon={Mention} />
           </div>
        </div>
    )
}


const LeftSocialMedia = () => {
  return (
    <div 
    style={{ fontFamily: 'Poppins' }}
    className="flex gap-4">
        <div className="w-[327px] flex flex-col gap-4">
            <Top />
            <Bottom />
        </div>
        <Right />
    </div>
  )
}

export default LeftSocialMedia