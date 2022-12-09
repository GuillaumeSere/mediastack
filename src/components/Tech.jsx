import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tech = () => {

    const [tech, setTech] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setTech(response.data.articles)
            })
    }, [])

    return (
        <div className='post'>
            {tech.map((post, index) => {
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

export default Tech
