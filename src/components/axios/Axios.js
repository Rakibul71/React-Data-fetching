import React, { useEffect, useState } from 'react';

// import axios first
import axios from 'axios';


const Axios = () => {

    // first we need to keep data in  useState 
    const [fetchData, setFetchData] = useState(null)
    //fetch api is one kind of side effect so we should use useEffect
    // inside useEffect we need to use callBack function
    useEffect(() => {
        // we didn't use asynce await directly inside useEffect
        // we need to define assync function
        const fetchData = async () => {
            const res = await axios.get('https://api.quotable.io/random')
            // console.log(data)
            // we get a data as a res.data
            setFetchData(res.data)
        }
        fetchData()
    }, [])


    // first we get a string in fetch api 

    return (
        <div>
            {/* es6 optional chaining javascript system */}
            Fetch Data : {fetchData?.content}
        </div>
    );
};

export default Axios;


// notice that our data is showing two times beacuse the project is an development mode
// remove react strict mode in index.js file