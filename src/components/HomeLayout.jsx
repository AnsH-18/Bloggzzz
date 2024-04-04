import { useEffect, useState } from "react";
import { fetch_data } from "../databse";
import { useAuth } from "./AuthProvider";
import Blog from "./BlogComponent";
import  {Outlet}  from "react-router-dom";

export default function HomeLayout(){
       return (
        <Outlet/>
       )
}