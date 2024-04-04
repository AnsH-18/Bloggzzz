import { useEffect, useState } from "react"
import { useUserContext } from "./LoggedLayout"
import { getCurrBlog } from "../databse"
import { useAuth } from "./AuthProvider"
import { deleteBlog } from "../databse"

export  function SoloBlog(props){
    const {currentUser}= useAuth()
    const user = useUserContext()
    const [currBlog, setCurrBlog] = useState({})

    useEffect( () => {
        getCurrBlog(user.currBlogId)
        .then((res) => setCurrBlog(res))
    },[])

    

    return(
        <>
            <div className="solo-blog">
                <div className="solo-blog-title">
                    <h3>{currBlog.Title}</h3>
                </div>
                <div className="solo-blog-details">
                    <p>{currBlog.createdOn}</p>
                    <p>{currBlog.Author}</p>
                </div>
                <div className="solo-blog-body">
                    <p dangerouslySetInnerHTML={{__html: currBlog.Body}}></p>
                </div>
            </div>
            
            
        </>
    )
}