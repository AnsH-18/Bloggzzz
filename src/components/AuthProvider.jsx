import { createContext, useContext, useState } from "react"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useEffect } from "react"

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState("")



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if(user){
            setCurrentUser(user)
          }
          else{
            setCurrentUser(null)
        }
        })
       
        return unsubscribe
    }, []);

        
    async function signin(name, email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .catch((err) => {
            console.log(err)
        })
       
    }

    function login(email, password){
      
       return  signInWithEmailAndPassword(auth, email,password)
    }


    function signout(){
        return signOut(auth)
    }


    return(
        <AuthContext.Provider value={{useAuth, signin,login,signout, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}