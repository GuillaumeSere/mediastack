import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Busines = () => {

    const [busines, setBusines] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setBusines(response.data.articles)
            })
    }, [])

    return (
        <div className='post'>
            {busines.map((post, index) => {
                return (
                    <div className='post-cart' key={index}>
                        <ul className='post-list'>
                            <li className='post-title'>{post.title}</li>
                        </ul>
                        <img className='post-image' src={post.urlToImage} alt="article" />
                        <p className='post-description'>{post.content}</p>
                        <span className='post-date'>{post.publishedAt}</span><br />
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

export default Busines
