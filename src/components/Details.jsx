import { useParams } from "react-router-dom"
import { useEffect } from "react"
import blogs from "../data/blogs"

export default function Details() {

    const {id} = useParams()
    useEffect(() => {
            //get data article
            const result = blogs.find((item)=>item.id === parseInt(id))
            console.log(result)
    }, [])
    return (
        <>
        <h2 >Detail of Article: {id}</h2>
        </>
    )
}