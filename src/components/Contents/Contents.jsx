import React from "react";

const Contents = (props) => {
  console.log(props.setCount);
  const { id, blog_picture, author_name, author_img, title, published_in, reading_time } =
    props?.singleData;

    const handleReadingTime () =>{
      console.log('hello')
    }
  return (
    <div className="mb-8">
      <div className="card card-compact w-100 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-96" src={blog_picture} alt="Shoes" />
        </figure>

        <div className="card-body space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
              <div>
                <h4>{author_name}</h4>
                <p>{published_in}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {reading_time} min read
             <span>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
             </span>
             </div>
          </div>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p onClick={handleReadingTime}  className="underline cursor-pointer hover:text-green-900 text-green-700" href="">Mark as read</p>
        </div>
      </div>
    </div>
     
  );
};

export default Contents;
