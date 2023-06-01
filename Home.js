import React from "react";
import RoadList from "./AllRoads";
import Harta from "./harta";
import Logo from "./logo.png";
import Logoo from "./imipasadecluj-logo.png";

function Home() {


    return (
        <>
<div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <title>My Website</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <title>Sidebar Menu</title>
        <div className="sidebar close">
          {/*import image*/}
          <div className="logo-details">
            <img src="logo.png" alt="logo" width={100} height={100} />
          </div>
          <ul className="nav-links">
            
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-collection" />
                  <span className="link_name">Harta</span>
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu">
                <li><a className="link_name" href="#">Harta</a></li>
                <li><a href="./harta">Harta Orasului Cluj-Napoca</a></li>
                
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-grid-alt" />
                <span className="link_name">Setarile Contului</span>
              </a>
              <ul className="sub-menu blank">`
                <li><a className="link_name" href="./comments">Comments and Feedback</a></li>
              </ul>
            </li>
          
           
          </ul></div>
          
        <section className="home-section">
          <div className="home-content">
            
            <span className="text">&nbsp;&nbsp;Evidenta Drumurilor din Cluj (mai in josul paginii sunt strazile afectate)
            

            </span>
          </div><RoadList/>
        </section>

      </div>

</>
    );
}

export default Home;