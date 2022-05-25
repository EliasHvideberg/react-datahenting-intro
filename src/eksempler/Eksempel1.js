import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function GetJoke() {
    const {data, error} = useSWR("https://api.chucknorris.io/jokes/random", fetcher);
    console.log(data);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>{data.value}</div>
  }

export function Eksempel1() {
    return (
        <>
        <h1>Eksempel 1</h1>
        <GetJoke />
        </>
    );
}
