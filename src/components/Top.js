import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
   
    useEffect(()=>{
         
       const fetchdata=async()=>{
        const response=await fetch("https://api.coinlore.net/api/tickers/");
        const data=await response.json();
        setCryptoArr(data.data); 
        
       };
       fetchdata();

    },[])
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
              {  cryptoArr.map((data)=>{
                <div className='coin-container' key={data.id}>
                    <p className='rank-para'> {data.rank}</p>
                    <h3 className='coin-symbol'>{data.symbol}</h3>
                    <p className='price-para'>{data.price_usd}</p>
                </div>
})}
            </div>
        </div>
    )
}

export default Top