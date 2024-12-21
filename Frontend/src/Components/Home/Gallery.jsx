import React from 'react'
import houseGallery from '../../assets/image/home/houseGallery.png'

const Gallery = () => {
  return (
    <div className='pt-12'>
        <div className='flex'>
           <img src={houseGallery} />
        </div>
    </div>
  )
}

export default Gallery