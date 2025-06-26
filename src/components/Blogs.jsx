import { useState } from 'react'
import blogs from '../data/blogs'
import './Blogs.css'
import { Link } from 'react-router-dom'

export default function Blogs() {
    const [search, setSearch] = useState('')

    // Filter blogs based on search input
    const filteredBlogs = blogs.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='blogs-container'>
            <div className='search-container'>
                <input
                    type="text"
                    className='search-input'
                    placeholder='Search for articles...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='search-button'>Search</button> {/* Added search button */}
            </div>
            <article>
                {filteredBlogs.length > 0 ? ( // Display filtered blogs or a message
                    filteredBlogs.map((item) => (
                        <Link to={`/blogs/${item.id}`} key={item.id} className="card-link"> {/* Added card-link for consistent styling */}
                            <div className='card'>
                                <h2>{item.title}</h2>
                                <p>{item.content.substring(0, 300)}...</p> {/* Added ellipsis */}
                                <hr></hr>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="no-results">No blogs found matching your search.</p>
                )}
            </article>
        </div>
    )
}