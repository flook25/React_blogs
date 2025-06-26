import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import blogs from "../data/blogs"
import './Details.css'

export default function Details() {

    const {id} = useParams()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
            //get data article
            const result = blogs.find((item)=>item.id === parseInt(id))
            setTitle(result.title)
            setImage(result.image_url)
            setContent(result.content)
            setAuthor(result.author)
    }, [])
    return (
       <div className="container">
        <h2 className="title">Article : {title}</h2>
        <img src={image} alt={title} />
        <div className="blog-detail">
            <strong>Author : {author}</strong>
            <p>{content}</p>
        </div>
       </div>
    )
}