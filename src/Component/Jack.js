import React from "react";
import { Link } from "react-router-dom";


function Jack(){

return(
    <div>
        <nav>
      <div className="brand-name">
        <Link to={'/'}>t Home Page</Link>
     
      </div>
      <ul>
        <li>
           <div>
            <Link to={'/Mike'}>Mike component</Link>
           </div>
        </li>
        <li>
          <div>
          <Link to={'/Jack'}>Jack component</Link>
            </div>
        </li>
      </ul>
    </nav>
        <h1>These is jack component</h1>
    </div>
)
}
export default Jack;