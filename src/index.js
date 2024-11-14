import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Jack from "./Component/Jack";
import Mike from "./Component/Mike";


const router = createBrowserRouter([
{
path:"/",
element:<App/>
},{
  path:"/Mike",
  element:<Mike/>
},{
  path:"/Jack",
  element:<Jack/>

}
])

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)