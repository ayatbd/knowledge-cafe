import React from 'react';
import Contents from '../Contents/Contents'
import Bookmarks from '../Bookmarks/Bookmarks'

const Blogs = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <Contents></Contents>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Blogs;