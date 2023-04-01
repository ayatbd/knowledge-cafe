import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents'
import Bookmarks from '../Bookmarks/Bookmarks'

const Card = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const handleReadingTime = (singleData) => {
        count = count + parseInt(singleData.reading_time)
        setData()
        console.log(setCount(count));
      };
    
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='grid grid-cols-3 gap-7 items-start'>
            <div className='col-span-2'>
                {
                    data.map((singleData)=><Contents handleReadingTime={handleReadingTime} singleData={singleData} setCount={setCount}></Contents>)
                }
            </div>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Card;