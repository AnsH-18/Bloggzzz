import { useState } from "react"
import { addBlog } from "../databse"
import { useAuth } from "./AuthProvider"
import JoditEditor from "jodit-react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Create(){
    const navigate = useNavigate()
    const user = useAuth()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [blogData, setBlogData] = useState({title: "", body: ""})

    console.log(content)

    function handleInput(e){
        const {name, value} = e.target

        setBlogData((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

   async function handleSubmit(){
        try{
            await addBlog(blogData.title,content,user.currentUser.uid, user.currentUser.email )
            navigate(`/${user.currentUser.uid}/blogs`)
        }
        catch(err){
            console.log(err)
        }
   }

    return (
        <>
            <div className="blogu-container">
                <div className="heading">
                    <p>What's In Your Mind ??</p>
                </div>
                <div className="title-input-container">
                    <label htmlFor="title">Title</label>
                    <input onChange={handleInput} type="text" id="title" name="title"></input>
                </div>
               <div className="blog-body-input-container">
                    <label htmlFor="blog-body">Blog</label>
                    <JoditEditor
                        config={{minHeight : 400}}
                        className="editor"
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />
               </div>
                <div className="submit-blog-container">
                    <button onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </>
    )
}