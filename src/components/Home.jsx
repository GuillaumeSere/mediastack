import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [media, setMedia] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(`https://newsapi.org/v2/everything?q=tesla&apiKey=${process.env.REACT_APP_API_KEY}`, {
            cancelToken: source.token,
            headers: {
                "Accept": "application/json",
                'User-Agent': 'Mozilla/5.0'
            }
        })
            .then((response) => {
                setMedia(response.data.articles)
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

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const paginatedPosts = media.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

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
            <div className='pagination'>
                {[...Array(Math.ceil(media.length / postsPerPage))].map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)} className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Home
