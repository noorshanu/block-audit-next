import Image from 'next/image'
import React from 'react'

const LinksWrapper = ({ text, images}) => {
  return (
    <div className="bg-slate-100 rounded-[10px] flex items-center justify-center h-[19px] w-[129px] text-[#262626] text-[10px] gap-2">
        <p>{text}</p>
        {images.map(image => (<Image key={Math.random()} src={image.src} alt={image.alt} />))}
    </div>
  )
}

export default LinksWrapper