import React, { useEffect, useState } from 'react'
import axios from 'axios'

const French = () => {

    const [french, setFrench] = useState([])

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(`https://newsapi.org/v2/top-headlines?q=trump&apiKey=${process.env.REACT_APP_API_KEY}`,{
            cancelToken: source.token,
            headers: {
                "Accept": "application/json",
                'User-Agent': 'Mozilla/5.0'
            }
        })
            .then((response) => {
                setFrench(response.data.articles)
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    throw error;
                }
            });
        return () => {
            source.cancel();
        };
    }, [])

  return (
    <div className='post'>
    {french.map((post, index) => {
        return (
            <div className='post-cart' key={index}>
                <ul className='post-list'>
                    <li className='post-title'>{post.title}</li>
                </ul>
                <img className='post-image' src={post.urlToImage} alt="article" />
                <p className='post-description'>{post.content}</p>
                <span className='post-date'>{"Date: " + post.publishedAt.replace("T", " - Heure:").replace("Z", "")}</span><br />
                <div className='post-link'>
                    <a href={post.url} target="_blank" rel="noreferrer">Voir plus</a>
                </div>
            </div>
        )
    }
    )}
</div>
  )
}

export default French
