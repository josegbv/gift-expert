import React, { useEffect, useState } from 'react'
import { getGift } from '../../helpers/getGift';

export const useFetchGift = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImage = async()=>{
     const newImage = await getGift(category)
     setImages(newImage)
     setIsLoading(false)
    }

    useEffect(()=>{
        getImage()
    }, [])

  return {
    images: images,
    isLoading
  }
}
