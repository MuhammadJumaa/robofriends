import React from 'react'
import Card from './Card';

const CardList= ({robots}) => {
    if(true){
        throw new Error('Nooooooooooo')
    }
    return (
    <div className='tc'>
        {
         robots.map((user,i) => {
        if(i===0){
         return    <div className='tc' key={i}> <Card key={i}  data={ robots[i] } /> </div>
        }else
        return <Card key={i} data={ robots[i] } />
        
    })
        } 
    </div>
    )
}
export default CardList;