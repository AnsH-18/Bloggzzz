import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"

export default function Login(){
    const navigate = useNavigate()
    const user = useAuth()
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
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
        console.log("login")
        try{
            setError("")
            await user.login(credentials.email, credentials.password)
            navigate(`/${user.currentUser.uid}`)
        }
        catch{
            setError("Failed to login")
        }
    }

    const style = {
        color: "#dbd8e3"
    }

    return(
            <div className="container">
                 {error && alert(error)}
                 <div className="signup-container">
                    <div className="signup-heading">
                        <h3>Log In</h3>
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
                        
                        
                    </div>
                    <div className="submit-div">
                        <button  onClick={handleSubmit}>Submit</button>
                    </div>
                 </div>
               
                <div className="signup-to-login">
                    <h4>Don't have an account</h4>
                    <Link style={style} to= "/signup">Sign up</Link>
                </div>
            </div>
        )
}