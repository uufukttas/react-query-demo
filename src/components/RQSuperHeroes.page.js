import axios from "axios"
import { useQuery } from "react-query"

const getHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
};

const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error } = useQuery('getHeroes', getHeroes)

    console.log(data);

    if (isLoading) return <h2>Loading....</h2>

    if (isError) return <h2>Error: {error.message} </h2>

    return (
        <>
            <h2>RQ Super Heroes Traditional</h2>
            {
                data.data.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))
            }
        </>
    )
}

export default RQSuperHeroesPage