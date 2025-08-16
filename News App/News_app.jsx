import React from 'react'
import usenewsapp from './UseNewsApp'

const News_app = () => {

    const YOUR_API_KEY = 'f411dffa92f5e0a3629504deee6b974e'

    const { data, loading, error } = usenewsapp('https://api.agify.io?name=michael', YOUR_API_KEY) // To Get The Custom Hook

    console.log(data);

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <div>
                <h4>Fetched Data:</h4>
                <ul>
                    {
                        data.map((item, index) => (
                            <li key={index}>
                                {item.quote}
                                <strong> --
                                    {item.author}
                                </strong>
                            </li>
                        ))
                    }
                </ul>
                {/* <div onClick={}>Change</div> */}
            </div>
        </div>
    )
}

export default News_app;