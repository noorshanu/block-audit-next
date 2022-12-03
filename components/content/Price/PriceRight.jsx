import AreaChart from "./AreaChart"
import ArrowDown from '../../../public/assets/images/ArrowDown.svg'
import Back from '../../../public/assets/images/Back.svg'
import Image from "next/image"
import { useState } from "react"
import { TableCell } from "../chain-monitoring/Right"

const Data = [
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
    {
    hash: '0x5f284c5...',
    age: '10 sec',
    from: '0x5f284c5...',
    to: '0x5f284c5...',
    quantity: '422.461005...'
    },
]

const Table = () => {
    return (
        <table className="w-full mt-3 text-textColor">
                <thead className="text-textColor font-extralight text-sm">
                    <tr>
                    <th></th>
                    <th>Txn Hash</th>
                    <th>Age</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((data, index) => (
                        <tr 
                        key={index}
                        className='font-light text-sm'
                        >
                        <TableCell>{index + 1}.</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 text-textColorActive font-bold">
                            {data.hash}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-col w-full">
                                {data.age}
                            </div>
                        </TableCell>
                        <TableCell>{data.from}</TableCell>
                        <TableCell>{data.to}</TableCell>
                        <TableCell>
                            <p className="text-textColorActive font-medium">{data.quantity}</p>
                        </TableCell>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}

const AllTimePriceHistory = () => {
    return (
        <div className="p-4 rounded-[10px] border border-textColor">
            <div className="flex justify-between items-center">
                {/* <Title text='All Time Price History' includeIcon={false} /> */}
                <h4 className="text-lg font-semibold text-textColorActive">All Time Price History</h4>
                <div className="w-[248px] h-0.5 bg-textColor"></div>
            </div>
            <div className="grid grid-cols-2 text-textColor mt-1">
                <div className="flex flex-col">
                    <p className="text-sm font-medium">High</p>
                    <h6 className="text-primaryGreen font-bold text-2xl">$5.65</h6>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-medium">Low</p>
                    <h6 className="text-primaryRed font-bold text-2xl">$5.65</h6>
                </div>
            </div>
        </div>
    )
}

const TradingVolume = () => {
    return (
        <div className="p-4 rounded-[10px] border border-textColor text-textColorActive">
            <div className="flex items-center justify-between gap-4">
            <div>
                <h4 className="text-lg font-semibold">Trading Volume <span className="font-light">[24h]</span></h4>
                <h3 className="text-2xl font-bold">$52,142,886</h3>
            </div>
            </div>
        </div>
    )
}

const Entity = ({ handleIsOpen }) => {
    return (
        <div className="bg-black/90 p-4 rounded-[10px]  flex flex-col gap-2 text-textColorActive">
            <h6 className="text-sm font-semibold">Recent Whale Transactions</h6>
            <p className="text-xs text-textColor">Transactions made by “Whale” Accounts.</p>
            <div className="flex items-center gap-2 justify-between">
                <p className="font-bold text-sx">View All</p>
                <span className="flex-1 h-0.5 rounded-[10px] bg-textColorActive"></span>
                <Image onClick={handleIsOpen} src={ArrowDown} alt='Expand' />
            </div>
        </div>
    )
}

const EntitiesWrapper = ({children}) => {
    return (
        <div className="grid gap-4 grid-cols-2 p-4 border border-textColor rounded-[10px] flex-1 overflow-y-auto">
            {children}
        </div>
    )
}

const PriceRight = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div 
    style={{ fontFamily: 'Poppins'}}
    className='w-[518px] flex flex-col gap-4 justify-between'>
    <AllTimePriceHistory />
    <TradingVolume />
    {isOpen 
    ? <EntitiesWrapper>
        <Entity handleIsOpen={handleIsOpen} />
        <Entity handleIsOpen={handleIsOpen} />
        <Entity handleIsOpen={handleIsOpen} />
        <Entity handleIsOpen={handleIsOpen} />
    </EntitiesWrapper>
    : <div className="p-4 rounded-[10px] bg-black/90 border border-textColor overflow-y-auto tableWrapper">
    <div className="mb-2 flex gap-5 items-center">
        <Image onClick={handleIsOpen} src={Back} alt='Back' />
        <h6 className="text-textColorActive font-semibold text-sm">Recent Whale Transactions</h6>
    </div>
    <Table />
    </div>
    }
    </div>
  )
}

export default PriceRight