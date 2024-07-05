import React, { useState, useTransition } from 'react'
import '../App.css'
import { FaStar } from 'react-icons/fa'
import '../App.css'

const Star = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleStarClick = (index)=>{
        console.log(index)
        setRating(index);
    }
    const handleMouseEnter = (index)=>{
        setHover(index)
    }
    const handleMouseLeave = ()=>{
        setHover(rating)
    }

  return (
    <div>
      <h1 className='heading'>Star Rating App</h1>
      <div className='button'>
        {
            [...Array(noOfStars)].map((_, index)=>{
                index+=1;
                return <FaStar  
                    key={index}
                    onClick={()=>handleStarClick(index)}
                    onMouseMove={()=> handleMouseEnter(index)}
                    onMouseLeave={()=> handleMouseLeave(index)}
                    size={40}
                    className={index <= (hover | rating) ? 'active' : 'inactive'}
                />

            })
        }
        </div>
    </div>
  )
}

export default Star
