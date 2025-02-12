import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Busines = () => {

    const [busines, setBusines] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setBusines(response.data.articles)
            })
    }, [])

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const paginatedPosts = busines.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

    return (
        <div className='post'>
            {paginatedPosts.map((post, index) => {
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
            <div className="pagination-box">
                <div className='pagination'>
                    {[...Array(Math.ceil(busines.length / postsPerPage))].map((_, index) => (
                        <button key={index} onClick={() => handlePageChange(index + 1)} className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Busines
