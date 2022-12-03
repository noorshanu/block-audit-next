import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
import Image from 'next/image';
import Zoom from '../../../public/assets/images/Zoom.svg'
import Time from '../../../public/assets/images/Time.svg'
import Line from '../../../public/assets/images/Line.svg'
import Settings from '../../../public/assets/images/Settings.svg'
import TreeDots from '../../../public/assets/images/TreeDots.svg'
import Camera from '../../../public/assets/images/Camera.svg'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
        grid: {
          offset: true
        }
    }
}
};

const labels = ['Nov', '2', '7', '10', '14', '17', '20', '24', '27', ' '];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#006B11',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#FF1616',
    },
  ],
};

export default function PriceChart() {
  return (
    <div 
    style={{ fontFamily: 'Poppins'}}
    className='rounded-[10px] w-[60%] flex flex-col gap-4 p-4 bg-black/90 '>
    <div className='flex gap-6 items-center'>
      <h4 className='text-textColorActive text-lg font-medium' >PancakeSwap</h4>
      <div className='p-2 px-4 border rounded-[10px] border-textColor text-textColor flex-1 flex items-center justify-between max-w-[500px]'>
      <div className='flex items-center gap-4'>
        <Image src={Time} alt='Time' width={18} />
        <Image src={Line} alt='Line' width={18} />
        <Image src={Settings} alt='Settings' width={18} />
      </div>
      <div className='flex flex-1 justify-center items-center gap-2'>
        <span className='value text-sm font-semibold text-textColorActive'>3.9456</span>
        <span className='text-xs'>+0.204</span>
        <span className='text-xs'>+0.204</span>
      </div>
      <div className='flex items-center gap-4'>
        <Image src={Zoom} alt='Zoom' width={18} />
        <Image src={TreeDots} alt='More' width={18} />
        <Image src={Camera} alt='Camera' width={18} />
      </div>
      </div>
    </div>
      <Bar className='flex-1' options={options} data={data} />
    </div>
  )
}
