import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

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

  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
}
