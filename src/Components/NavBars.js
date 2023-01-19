import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const NavBars = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light" id="mainNav">
            <div class="container px-4">
            <Link  to={"/"}><button type="button" class="btn btn-info">Yours college Library</button></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                    <Link to="/about"><li class="nav-item"><button type="button" class="btn btn-info">About</button></li></Link>
                    <Link to="/books"><li class="nav-item"><button type="button" class="btn btn-info">Books</button></li></Link>
                    <Link to="/borrowers"><li class="nav-item"><button type="button" class="btn btn-info">Borrowers</button></li></Link>
                    </ul>
                </div>
            </div>
        </nav>

</div>
     
  
  );
};

export default NavBars;
