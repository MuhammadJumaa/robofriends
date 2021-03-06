import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
const Card = (data) =>{
    const  data1 =data.data;
    return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    	<LazyLoad height={300}>
        <img src={`https://robohash.org/${data1.name}?200x200`} alt='{data1.name}' />
        </LazyLoad>
        <div>
            <h2>{data1.name}</h2>
        <p>{data1.Title}</p>
        </div>
    </div>   );
}
export default Card;