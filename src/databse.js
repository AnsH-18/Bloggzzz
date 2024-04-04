import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import {nanoid} from "nanoid"
import dayjs from "dayjs"


 export const fetch_data = async () => {
    const blogs = []
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    querySnapshot.forEach((doc) => {
      blogs.push(doc.data())
    });
    return blogs
}

export const addUser = async (name, currUserId) => {
    await addDoc(collection(db,"Users") , {name: name,
                                            blogs_written: 0,
                                            id: currUserId})
        .then(() => console.log("success"))
}

export const addBlog = async (blog,content,userId, userName) => {
    const blogId= nanoid()
    const today = dayjs()
    const formattedDate = today.format("DD/MM/YYYY")
    const time = dayjs().format("HH:mm:ss")
    await addDoc(collection(db, "Blogs"), 
    {AuthorId: userId,
    Author: userName,
    Title: blog, 
    Body: content, 
    blogId: blogId,
    createdOn: formattedDate,
    createdAt: time})
        .then(() => console.log("blog added"))
        .catch((error) => console.log(error))

}

export const getCurrBlog = async(id) => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    let  mblog = {}
    console.log("id :" , id)
    querySnapshot.forEach((blog) => {
      if(blog.data().blogId === id){
        mblog = blog.data()
      }
    })
    return mblog
}

export const deleteBlog = async(blogid) => {
  try{
      const querySnapshot = await getDocs(collection(db, "Blogs"));
      let docId = ""
        querySnapshot.forEach((doc) => {
        if(doc.data().blogId === blogid){
          docId = doc.id
        }
        });
        await deleteDoc(doc(db, "Blogs", docId ));
        console.log("successfully deleted")
      } catch(error){
        console.log("error deleting blog", error)
      }
}

export const myBlogsData = async(userId) => {
   let blogsData = []
   const blog = await fetch_data()
    blog.forEach((blog) => {
      blog.AuthorId === userId && blogsData.push(blog)
    })
    return blogsData
}