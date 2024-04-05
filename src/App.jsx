import Signup from './components/Signup.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Loggedlayout from './components/LoggedLayout.jsx'
import Landinglayout from './components/Landinglayout.jsx'
import HomeLayout from './components/HomeLayout.jsx'
import About from './components/About.jsx'
import Create from './components/Create.jsx'
import {SoloBlog} from './components/SoloBlog.jsx'
import BlogWrapper from './components/BlogWrapper.jsx'
import Profile from './components/Profile.jsx'

function App() {
  return(
    <div className="app">
    <BrowserRouter>
      
      <AuthProvider>
        <Routes>
          
            <Route path='/' element= {<Landinglayout/>}>
              <Route index element={<Signup />} />
              <Route path='login' element={<Login />} />
            
            </Route>
            <Route path='/:id' element = {<Loggedlayout/>}>
              <Route index element = {<BlogWrapper/>}></Route>
              <Route path='blogs' element = {<BlogWrapper/>}></Route>
              <Route path='blogs/:blogsid' element = {<SoloBlog/>}></Route>
              <Route path='about' element = {<About/>}></Route>
              <Route path='createblog' element = {<Create/>}></Route>
              <Route path='profile' element = {<Profile/>}></Route>
            </Route>
           
          </Routes>
      </AuthProvider>
    </BrowserRouter>
       
    </div>
 
      
  )
}

export default App
