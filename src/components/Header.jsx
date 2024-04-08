import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { ReactBurgerMenu } from "react-burger-menu";
import { useState } from "react";

export default function Header(props) {
  const navigate = useNavigate()
  const user = useAuth();
  const style = {
    textDecoration: "none",
    color: "#dbd8e3"
  };


  async function signOut(){
    console.log("so")
    await user.signout()
    navigate("/")
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div id="nav">
            <div className="logo">
              <p>Bloggzz</p>
            </div>
            <div className="link-item-container">
              <ul>
                <>  
                  <li>
                    <Link to="blogs" style={style}>Blogs</Link>
                  </li>
                  <li>
                    <Link to="createblog" style={style}>Create Blog</Link>
                  </li>
                  <li>
                    <Link to= "profile" style={style}>{user.currentUser.email}</Link>
                  </li>
                  <li>
                    <button  className="signout-button" onClick={ signOut}>signout</button>
                  </li>
                </>
              
              </ul>
          
            </div>
            <div className="hamburger-menu">
              <button className="hamburger-icon" onClick={toggleMenu}>
                ☰
            </button>
            </div>
        </div>
        
        
         
          {isOpen && 
          <div className="menu">
          <ul>
            <li>
              <Link 
                to={`/${user.currentUser.uid}/blogs`}
                style={style}>
                Blogs
              </Link>
            </li>

            <li>
              <Link 
                to={`/${user.currentUser.uid}/createblog`}
                state={style} >
                Create Blog
              </Link>
            </li>

            <li>
              <Link 
                to={`/${user.currentUser.uid}/profile`}
                style={style}>
                Profile
              </Link>
            </li>
            
            <li> 
              <button 
                className="signout-button" 
                onClick={ signOut}>
                Sign Out
              </button>
            </li>

          </ul>

        </div>
        
        }
      </nav>
      
    </header>
  );
}
