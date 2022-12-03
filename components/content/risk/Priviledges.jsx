import Info from '../../../public/assets/images/Info.svg'
import Image from 'next/image'


const PriviledgesData = [
  {
    primaryText: 'Buy Tax',
    secondaryText: 'Tax users have to pay for every purchase',
    value: '15.00%',
  },
  {
    primaryText: 'Sell Tax',
    secondaryText: 'Tax users have to pay for every sale',
    value: '15.00%',
  },
  {
    primaryText: 'Editable Tax',
    secondaryText: 'Can the owner change tax?',
    value: 'Yes',
    red: true
  },
  {
    primaryText: 'Blacklist',
    secondaryText: 'Can users be blacklisted by owner?',
    value: 'yes',
    red: true
  },
  {
    primaryText: 'Whitelist',
    secondaryText: 'Can users be whitelisted by owner?',
    value: 'Yes',
    green: true 
  },
  {
    primaryText: 'Transfer Pausable',
    secondaryText: 'Can owner pause transactions?',
    value: 'Yes',
    red: true
  },
  {
    primaryText: 'Trading Enabled',
    secondaryText: 'Is tranding enabled right now?',
    value: 'Yes',
    green: true
  },
]

const Priviledges = () => {
  return (
    <div className='p-4 rounded-[10px] bg-[#111111] text-textColorActive w-[420px]'>
      <div className='flex gap-2 items-center'>
        <h4 className='text-[22px] font-bold leading-[119.5%]'>Ownership Priviledges</h4>
        <Image src={Info} alt={'More Infos'} width={20} />
      </div>
      <p className='my-2 mb-4 font-thin text-textColor'>Special priviledges enjoyed by the Owner’s Address as defined on the smart contract. </p>
      <div className='flex flex-col gap-2'>
        {PriviledgesData.map(priviledge => (
          <div key={Math.random()} className='flex gap-4 justify-between'>
            <div className='flex flex-col leading-[150%]'>
              <div className='flex items-center gap-2'>
                <h6 className='text-lg font-thin capitalize'>{priviledge.primaryText}</h6>
                <Image src={Info} alt="More" width={15} />
              </div>
              <p className='text-textColor font-thin text-xs'>{priviledge.secondaryText}</p>
            </div>
            <p 
            style={{ 
              padding: priviledge.green || priviledge.red ? '2px 10px' : '',
              backgroundColor: priviledge.red ? '#FF1616' : priviledge.green ? '#00B51D' : ''
              }} className='font-medium capitalize h-fit rounded-[3px]'>{priviledge.value}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Priviledges