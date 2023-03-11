import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message); 
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <h2>Loading....</h2>
    if (error) return <h2>Error: {error}</h2>

    return (
        <>
            <h2>Super Heroes Traditional</h2>
            {
                data.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))
            }
        </>
    )
}

export default SuperHeroesPage