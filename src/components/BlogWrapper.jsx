import { useAuth } from "./AuthProvider"
import BlogComponent from "./BlogComponent"
import { useState, useEffect} from "react"
import { fetch_data } from "../databse"

export default function BlogWrapper(){
    const [blogsData, setBlogsData] = useState([])
    const [currBlogId, setCurrBlogId] = useState("")


    console.log(blogsData)
    useEffect(() => {
            fetch_data()
            .then((res) => {
                setBlogsData(res)
            })
    }, [])

   const blogs = blogsData.map((blog) => {
    return <BlogComponent title = {blog.Title} body = {blog.Body} blogid= {blog.blogId} author = {blog.Author} date = {blog.createdOn} time = {blog.createdAt}></BlogComponent>
   })

    return(
        <>

           <div className="blogs-container">
                {blogs}
            </div> 
            
        </>
    )
}