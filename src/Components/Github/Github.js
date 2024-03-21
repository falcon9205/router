import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const data = useLoaderData()
    const [data,setdata] = useState([]);
    useEffect(()=>{
      fetch('https://api.github.com/users/falcon9205')
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setdata(data)
      })
    },[])
   

  return (
    <div>
       <h1 className='text-center bg-black text-green-500 p-5 text-4xl'>Github information</h1>
       <div className='flex space-x-4 text-green-500 bg-black'>
      
       <img src={data.avatar_url} alt=""/>
       <h2>Followers : {data.followers} |</h2>
       <h2>Followings : {data.following} |</h2>
       <h2>Bio : {data.bio} |</h2>
       <h2>Join : {data.created_at}</h2>
       </div>
      
    </div>
  )
}

export default Github

// export const gitapi=async()=>{
//     const res =await fetch('https://api.github.com/users/falcon9205')
//     return res.json();
// }
