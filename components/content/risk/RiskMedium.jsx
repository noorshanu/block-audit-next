import Info from '../../../public/assets/images/Info.svg'
import Image from 'next/image'


const Risk = ({ good }) => {
    return (
        <div 
        style={{ boxShadow: 'inset 6px 6px 14px rgba(0, 0, 0, 0.4)'}}
        className="p-4 rounded-[10px] bg-white flex items-center gap-1">
        <span 
        className={"w-[40px] h-[29px] rounded-md" + ` ${good ? 'bg-primaryGreen' : 'bg-primaryRed'}`}></span>
        <p className="font-light text-sm"><span className="font-semibold">- {good ? 'Good' : 'Bad'}</span> for Users</p>
        </div>
    )
}

const RiskMedium = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className='grid grid-cols-2 gap-4'>
            <Risk good />
            <Risk />
        </div>
        <div className="p-4 rounded-[10px] border border-primaryRed bg-[#414141]">
            <div className="flex justify-between text-textColorActive">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                        <h4 className="text-lg font-medium">Anti Whale Function Present</h4>
                        <Image src={Info} alt='More' width={16} />
                    </div>
                    <p className='text-textColor font-light text-[10px]'>
                    Does the smart contract have a function present that restricts users to buy/sell above a certain quantity of tokens?
                    </p>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default RiskMedium