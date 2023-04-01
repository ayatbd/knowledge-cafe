import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents'
import Bookmarks from '../Bookmarks/Bookmarks'

const Card = () => {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    // const handleButtonClick () => {
    //     count = count+1;
    // }
    
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='grid grid-cols-3 gap-7 items-start'>
            <div className='col-span-2'>
                {
                    data.map((singleData)=><Contents singleData={singleData} setCount={setCount}></Contents>)
                }
            </div>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Card;