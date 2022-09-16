import React, { useEffect, useState } from 'react'
import { getGift } from '../../helpers/getGift'
import { useFetchGift } from '../hooks/useFetchGift';
import { GiftItem } from './GifItem'

export const GiftGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGift( category );

  return (
    <>
        <h3> {category } </h3>
        {
          isLoading && ( <h2>Loading...</h2> )
        }
        <div className="card-grid"> 
            {
              images.map( images =>( 
              <GiftItem key={images.id} {...images} /> ) )
            }
           
        </div>
    </>
  )
}
