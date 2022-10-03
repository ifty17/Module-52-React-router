import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h3>A lot of FB post are here </h3>
        </div>
    );
};

export default Posts;