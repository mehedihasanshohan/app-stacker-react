import { useEffect, useState } from "react"

const useApps = () => {

 const [apps, setApps] = useState([])
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)

 useEffect( ()=> {
    setLoading(true)
    fetch('../appsData.json')
     .then(res => res.json())
     .then(data => setApps(data))
     .catch(err => setError(err))
     .finally(() => setLoading(false))
 }, []);

 return{apps, error, loading};

}

export default useApps