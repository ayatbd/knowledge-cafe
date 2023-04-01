import React from 'react';

const Bookmarks = (props) => {
    return (
        <div className=''>
            <h3 className='text-2xl bg-indigo-100 rounded text-center py-3'>Spent time on read : {props.count} min</h3>
            <div className='mt-7 bg-slate-100 p-8'>
                <h3 className='text-2xl text-center'>Bookmarked Blogs : {props.cart.length}</h3>
            </div>
        </div>
    );
};

export default Bookmarks;