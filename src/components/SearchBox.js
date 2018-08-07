import React from 'react';

const SearchBox = ({ searchChange}) => {
    return (
    <div className='pa2'>
    <h3 className='f4 ba b--green '>Write Your name ^_^ and see your Robot  and your Team . </h3>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='' 
          placeholder='' 
          onChange={searchChange} 
         />
     </div>
    )
}

export default SearchBox; 