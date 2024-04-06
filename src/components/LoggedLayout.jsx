import { Outlet} from "react-router-dom"
import Header from "./Header.jsx"
import { createContext,useContext, useState } from "react"

const Context = createContext()

export function useUserContext(){
    return useContext(Context)
}

export default function Loggedlayout(){
    const [currBlogId, setCurrBlogId] = useState("not set")



    return(
        <div className="logged-layout">
             <Context.Provider value={{currBlogId, setCurrBlogId}}>
                <Header/>
                <Outlet/>   
            </Context.Provider>
        </div>
       
    )
        
}