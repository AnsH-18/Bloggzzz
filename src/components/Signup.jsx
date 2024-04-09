import { useContext, useState } from "react"
import { auth } from "../firebase"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { Link } from "react-router-dom"
import {useNavigate } from "react-router-dom"
import { useAuth } from "./AuthProvider.jsx"
import { addUser, fetch_data } from "../databse.js"


export default function Signup() {
    const user = useAuth();
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        Name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("")

  

    function handleInput(e){
        const {name, value} = e.target
        setError("")
         setCredentials(prev => {{
            return {
                ...prev,
                [name] : value
            }
        }})
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(credentials.password === credentials.confirmPassword){
            try{
                setError("")
                await user.signin(credentials.Name,credentials.email, credentials.password)
                await addUser(credentials.Name, user.currentUser.uid)
                navigate("/login")
            }
            catch{
                setError("failed to sign in")
            }
        }
        else{
            setError("Password does not match")
        }
    }
  
    const style = {
        color: "#dbd8e3"
    }

    return(
        <div className="container">
             {error && alert(error)}
             <div className="internal-container">
                <div className="signup-container">
                    <div className="signup-heading">
                        <h3>Sign Up</h3> 
                    </div>
                    <div className="fields">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input 
                                name="email"
                                type="email" 
                                id = "email" 
                                required
                                onChange={handleInput}/>
                        </div>
                        
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                id = "password"
                                onChange={handleInput}/>
                        </div>
                        
                        <div className="confirm-password">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                name="confirmPassword"
                                type="password" 
                                id = "confirmPassword"
                                onChange={handleInput}/>
                        </div>
                        
                    </div>
                    <div className="submit-div">
                        <button  onClick={ handleSubmit}>Submit</button>
                    </div>
                </div>
                <div className="signup-to-login">
                    <h4>Already have an account?</h4>
                    <Link style={style} to = "/login">Log in</Link>
                </div>
             </div>
            
            
        </div>
    )
}