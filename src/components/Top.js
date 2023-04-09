import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
   
    useEffect(()=>{
         
       const fetchdata=async()=>{
        const response=await fetch("https://api.coinlore.net/api/tickers/?limit=10");
        const data1=await response.json();
        setCryptoArr(data1.data); 
        
       };
       fetchdata();

    },[])
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
              {  cryptoArr.map((data1)=>{
               return(
                <div className='coin-container' key={data1.id}>
                    <p className='rank-para'> Rank{data1.rank}</p>
                    <h3 className='coin-symbol'>Symbol:{data1.symbol}</h3>
                    <p className='price-para'>Price:{data1.price_usd}</p>
                </div>
               );
})}
            </div>
        </div>
    )
}

export default Top