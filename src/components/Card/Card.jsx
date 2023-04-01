import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents';
import Bookmarks from '../Bookmarks/Bookmarks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [clickedCardIds, setClickedCardIds] = useState([]);

  const handleCardTotalClick = (singleData) => {
    if (clickedCardIds.includes(singleData.id)) {
      toast('Button clicked already!');
    } else {
      const newCart = [...cart, singleData];
      setCart(newCart);
      setClickedCardIds([...clickedCardIds, singleData.id]);
      toast('Item added to cart!');
    }
  };

  const handleReadingTime = (singleData) => {
    const newCount = count + parseInt(singleData.reading_time);
    setCount(newCount);
  };

  useEffect(() => {
    fetch('card.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='md:grid grid-cols-3 gap-7 items-start'>
        <div className='col-span-2'>
          {data.map((singleData) => (
            <Contents
              handleCardTotalClick={handleCardTotalClick}
              handleReadingTime={handleReadingTime}
              singleData={singleData}
              key={singleData.id}
            />
          ))}
        </div>
        <Bookmarks cart={cart} count={count} />
      </div>
    </>
  );
};

export default Card;
