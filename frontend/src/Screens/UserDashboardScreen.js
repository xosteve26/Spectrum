import React, { useEffect, useState } from 'react'
import ScansTable from '../components/ScansTable'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const UserDashboardScreen = () => {
  const [data, setData] = useState(null)


  useEffect(() => {
    async function fetchData() {
      console.log(sessionStorage.getItem('token'))

      const headers={
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }

      const response = await axios.get(`http://localhost:8000/users/get-songs`, {headers})
      console.log("res from table", response)
      const data = response.data
      console.log(data)
      setData(data)

    }
    if(!sessionStorage.getItem('token')){
      window.location.href = '/'
      return
    }
    if(data===null){
      fetchData()
    }
    
  }, [data])


  return (
    <section className='mt-24 md:mt-24 lg:mt-24 xl:mt-0 flex flex-col h-screen bg-gradient-to-b from-black to-gray-900  '>

          {data && data.length>0 && <ScansTable data={data}/>}
          {data && data.length===0 && <div className="text-center text-white text-3xl">No saved songs yet</div>}
    </section>
    
  )
}

export default UserDashboardScreen