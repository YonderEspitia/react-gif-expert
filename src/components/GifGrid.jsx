import {useState, useEffect} from 'react';
//import { getGifs } from '../helpers/getGifs';
import { Gifitem } from './Gifitem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs( category );

   

    return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className='card-grid'>
            {
                images.map( ( images ) => (
                    <Gifitem 
                        key={ images.id }
                        {...images}
                    />
                ))

            }
        </div>
        
    </>
  )
}
