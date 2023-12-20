import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [dataJson, setDataJson] = useState(null)

  useEffect(()=>{
      const fetchDataJson = async () => {
        try {
          const response = await axios.get("/data_content/data.json")
          setDataJson(response.data)
        } catch (error) {
          console.error(error);
        }
      }

      fetchDataJson()
  }, [])
  
  console.log(dataJson);

  return (
    <>
      <h1 className='text-red-700 font-semibold bg-black block px-5'>Hello World</h1>
    </>
  )
}

export default App
