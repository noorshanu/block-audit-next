import LinksWrapper from "../../LinksWrapper"
import Title from "../../Title"
import Copy from '../../../public/assets/images/Copy.svg'
import BSCScan from '../../../public/assets/images/BSCScan.svg'
import Image from "next/image"


const TokenAddress = () => {
    return (
        <div 
        className="p-4 rounded-[10px] border border-textColor text-textColorActive flex flex-col gap-1">
            <Title text={'Token Address'} />
            <LinksWrapper text='0x0e09fa....e81ce82' images={[{ src: Copy, alt: 'Copy'}]} />
            <p className="font-light text-xs md:text-sm">Verification Details - </p>
            <div className="flex gap-2 items-center p-px px-4 rounded-[16px] bg-white text-black w-fit">
              <Image src={BSCScan} alt='BSCScan' />
              <p className="text-xm font-medium">Bsc Scan</p>
            </div>
        </div>
    )
}


const GasFree = () => {
  return (
    <div className="border border-textColor rounded-[10px] p-4 text-textColorActive">
      <Title text='Gas Free' />
      <div className="flex flex-col">
        <p className="text-sm text-textColor font-medium">Current</p>
        <h6 className="text-lg font-medium">358,522,618 Gwei</h6>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-textColor font-medium">Current</p>
        <h6 className="text-lg font-medium">358,522,618 Gwei</h6>
      </div>
    </div>
  )
}


const CustomAlert = () => {
  return (
    <div className="p-4 rounded-[10px] border border-textColor flex flex-col gap-2">
      <Title text='Get Custom Alert.' />
      <p className="font-light text-xs text-textColor -mt-2">
      Get alerts for significant events for this project Date and time for LP Unlocks, Security Alerts etc.
      </p>
      <input 
      className="rounded-[10px] border border-textColor bg-primary text-textColor p-px px-2 outline-none"
      placeholder="Enter email"
      type="email" 
      />

      <button
      className="font-light text-sm text-textColorActive p-1 px-3 rounded-[10px] w-fit"
      style={{
        background: 'linear-gradient(180deg, #740000 0%, #FF1616 100%)'
      }}
      >Submit</button>
    </div>
  )
}
const Left = () => {
  return (
    <div 
    style={{ fontFamily: 'Poppins'}}
    className="flex flex-col gap-2 justify-between w-[327px]">
      <TokenAddress />
      <GasFree />
      <CustomAlert />
    </div>
  )
}

export default Left