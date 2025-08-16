import React, { useEffect, useState } from 'react'

const usenewsapp = (url, apiKey) => { // Custom hook starts with "use"
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => { // 1 UseEffect hook 
        const featchData = async () => { // 2 Function ( featch )
            try {
                if (!apiKey) {
                    throw new Error('API key is required for this endpoint')
                }
                const response = await fetch(url, {
                    headers: {
                        'X-Api-Key': apiKey
                    }
                }); // 3 featch url
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json() // 4 Extract Data
                setdata(result);
            } catch (error) {
                seterror(error)
            } finally {
                setloading(false);
            }
        };

        featchData();

    }, [url, apiKey]);
    return { data, loading, error }
}

export default usenewsapp;