import { useEffect, useState } from "react"
import { myBlogsData } from "../databse"
import BlogComponent from "./BlogComponent"
import { useAuth } from "./AuthProvider"
import { deleteBlog } from "../databse"

export default function Profile(){
    const {currentUser} = useAuth()
    const [myBlogs, setMyBlogs]= useState([])
    const [updated, setUpdated] = useState(0)
    useEffect(() => {
        myBlogsData(currentUser.uid)
        .then((res) => setMyBlogs(res))
    },[updated])

    async function handleDelete(blogId){
        await deleteBlog(blogId)
        setUpdated(prev => prev + 1)
       
    }

    const blogs = myBlogs.map((blog) => {
        return <BlogComponent blogid = {blog.blogId} title = {blog.Title} body = {blog.Body} profile = {true} deleteBlog = {handleDelete}/>
    } )

    

    return(
            <div className="my-blogs">
                <h2>My Blogs</h2>
                {blogs}
            </div>

        
    )
}