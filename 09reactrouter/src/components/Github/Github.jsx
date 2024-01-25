import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vsraju1')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

    return (
        <div className="text-3xl bg-gray-600 text-white p-10 ">
        <h1><span className="text-orange-600">Github name</span> : {data.name}</h1>
        <p><span className="text-orange-600">Description</span> : {data.bio}</p>
        <p><span className="text-orange-600">Number of Public Repositories</span> : {data.public_repos}</p>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
     const response = await fetch('https://api.github.com/users/vsraju1')
    return response.json()
}