import React, { useState } from 'react'

function Shows(props) {
    const {data_show}  = props;
    return data_show.map((item)=>{
      return (
        // getting Show Details from API and set it in proper manners in div
   <a href={item?.show?.url}>{
    <div className='outerDiv'>
          {
            (item.show.image)? <img src={item?.show?.image?.medium } alt='no img found'/> 
          : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' alt='no img found'/>
          }
          <div className='infoDiv'>
              <p className='infoPara'>Show Name: {item?.show?.name}</p>
              {
                (item.show.language)?   <p className='infoPara' >Language: {item?.show?.language}</p> :
              <p className='infoPara' >Language: NA</p>
              }
              {
                (item.show.rating.average)? <p className='infoPara'>Rating: {item?.show?.rating?.average} ⭐</p> :
              <p className='infoPara'>Rating: NA ⭐</p>
              }
              
          </div>
      </div>
  }</a> 
  )
})
}

export default Shows