import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useUserContext } from "./LoggedLayout";
import { deleteBlog } from "../databse";
import dayjs from "dayjs";
import { useEffect, useState } from "react";


export default function BlogComponent(props){
    const user = useUserContext()
    const {currentUser} = useAuth()

    const style = {
        textDecoration : "none",
    }
    console.log(props.body)

    return(
        <div className="blog">
        <Link style={style} className="LinkComp" to = {`/${currentUser.uid}/blogs/${props.blogid}`} onClick={() => {user.setCurrBlogId(props.blogid)}}>
        
        <div className="blog-in-home">
            <div className="title-container">
                <p className="blog-title">{props.title}</p>
                
            </div>
            <div className="blog-details-container">
                    <p className="blog-creation-date">{props.date}</p>
                    <p className="blog-author">{props.author}</p>
            </div>
            <div className="body-container">
                <p dangerouslySetInnerHTML = {{__html: props.body}}/>
            </div>
            <div className="read-more">
                <button>Read More</button>
            </div>
            
        </div>
        </Link>
       
        <div className="delete-blog">
                {props.profile && <button onClick={() => props.deleteBlog(props.blogid)}>
                    X
                 </button>}
            </div>
        </div>
        
    )
}

