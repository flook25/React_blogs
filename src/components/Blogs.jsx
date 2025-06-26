import blogs from '../data/blogs'
import './Blogs.css'
import { Link } from 'react-router-dom'

export default function Blogs() {
    return(
        <div className='blogs-container'>
            <article>
                {blogs.map((item)=> (
                    <Link to={`/blogs/${item.id}`}>
                    <div className='card' key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content.substring(0,300)}</p>
                        <hr></hr>
                    </div>
                    </Link>

                    
                ))}
            </article>

        </div>
    )
}