import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

// import axios first
import axios from 'axios';
const fetcher = (...args) => fetch("https://api.quotable.io/random").then((res) => res.json());


const Axios = () => {

    const { data, error } = useSWR(
        "https://api.quotable.io/random",
        fetcher
    );

    // first we get a string in fetch api 

    return (
        <div>
            {/* es6 optional chaining javascript system */}
            Fetch Data : {data?.content}
            hello swr
        </div>
    );
};

export default Axios;


// notice that our data is showing two times beacuse the project is an development mode
// remove react strict mode in index.js file