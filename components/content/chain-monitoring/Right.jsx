import Title from "../../Title"
import TableImage from '../../../public/assets/images/TableImage.svg'
import WalletAge1 from '../../../public/assets/images/WalletAge1.svg'
import Image from "next/image"
const TopTokenHeadersData = [
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: true
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: false
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: true
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: false
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: true
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: false
    },
    {
    address: 'PancakeSwap',
    holdingSupply: 65.2,
    holding: 995094957,
    holdingBalance: 0,
    totalBalance: 0,
    hasIcon: false
    },
]

export const TableCell = ({ children }) => {
    return (
        <td>
            <div className="flex justify-center w-full items-center p-2">{children}</div>
        </td>
    )
}

const WalletAgeDistributionEntity = ({ icon, primaryText, secondaryText }) => {
    return (
        <div className="flex gap-2">
            <span className="p-3 rounded-[10px] bg-textColor flex justify-center items-center">
                <Image src={icon} alt={secondaryText} width={24} />
            </span>
            <div className="flex flex-col">
                <p className="text-sm text-textColor">{secondaryText}</p>
                <h6 className="text-lg font-bold">{primaryText}</h6>
            </div>
        </div>
    )
}

const WalletAgeDistributionStat = ({ text, value}) => {
    return (
        <div className="flex items-center gap-6 text-xs text-textColor">
            <p className="text-right w-[100px]">{text}</p>
            <div className="flex-1 flex gap-3 items-center">
            <div 
            style={{ width: `${value}%`}}
            className="h-1 rounded-xl bg-textColorActive"></div>
            <p>{value}%</p>
            </div>
        </div>
    )
}

const WalletAgeDistribution = () => {
    return (
        <div className="bg-black/70 p-4 rounded-[10px] flex justify-between gap-8 text-textColorActive">
            <div className="flex flex-col">
                <Title text='Wallet Age Distribution' />
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
                    <WalletAgeDistributionEntity icon={WalletAge1} secondaryText='Average Wallet Age' primaryText='1 yr 1 mos' />
                    <WalletAgeDistributionEntity icon={WalletAge1} secondaryText='Average Wallet Age' primaryText='1 yr 1 mos' />
                    <WalletAgeDistributionEntity icon={WalletAge1} secondaryText='Average Wallet Age' primaryText='1 yr 1 mos' />
                    <WalletAgeDistributionEntity icon={WalletAge1} secondaryText='Average Wallet Age' primaryText='1 yr 1 mos' />
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
                <WalletAgeDistributionStat text='Above 1 yr' value={67} />
                <WalletAgeDistributionStat text='6 mo - 1 yr' value={24} />
                <WalletAgeDistributionStat text='3 mo - 6 mo' value={5} />
                <WalletAgeDistributionStat text='1 mo - 3 mo' value={3} />
                <WalletAgeDistributionStat text='7 d - 1 mo' value={1} />
                <WalletAgeDistributionStat text='7 d or less' value={0} />
            </div>
        </div>
    )
} 



const TopTokenHeaders = () => {
    return (
        <div className="bg-black/90 text-textColorActive p-4 rounded-[10px] w-full max-h-[60%] overflow-auto">
            <Title text='Top Token Headers' />
            <table className="w-full mt-3">
                <thead className="text-textColor font-extralight text-sm">
                    <tr>
                    <th>#</th>
                    <th>Wallet Address</th>
                    <th>Holding/Supply</th>
                    <th>Holding Balance</th>
                    <th>Holding</th>
                    <th>TotalBalance</th>
                    </tr>
                </thead>
                <tbody>
                    {TopTokenHeadersData.map((data, index) => (
                        <tr 
                        key={index}
                        className='font-light text-lg'
                        >
                        <TableCell>{index + 1}.</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                            {data.hasIcon && <Image src={TableImage} className='lg:-ml-8' alt='Image' />}
                            {data.address}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-col w-full">
                                {data.holdingSupply.toFixed(2)}%
                                <div className="relative bg-primary p-[2px] rounded-sm w-full">
                                    <span 
                                    style={{ width: `${data.holdingSupply}%`}}
                                    className="absolute left-0 top-0 bottom-0 bg-textColorActive rounded-xl"></span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>${data.holding}</TableCell>
                        <TableCell>{data.holdingBalance.toFixed(2)}%</TableCell>
                        <TableCell>${data.totalBalance.toFixed(2)}</TableCell>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
const Right = () => {
  return (
    <div 
    style={{
        fontFamily: 'Poppins'
    }}
    className='flex flex-1 flex-col gap-4 p-4 bg-textColor rounded-[10px]'>
    <TopTokenHeaders />
    <WalletAgeDistribution />
    </div>
  )
}

export default Right