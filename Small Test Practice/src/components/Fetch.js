import React, {useEffect, useState} from "react";

const Fetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        function fetchData (){
            return fetch('https://jsonplaceholder.typicode.com/posts')
                   .then((response) => response.json())
                   .then((data) => setData(data))
        }
        fetchData()
    }, []);
    return(
        <div>
            <ul>
            {data.map((item) => {
                return <li key={item.id}>
                    {item.title}
                </li>
            })}
            </ul>
        </div>
    )
}

export default Fetch;