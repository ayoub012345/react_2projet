import React from "react";
import '../component/nav.css';
function Nav() {
  return (
    <>  
    <header>
    <div className="brand"><a href="/">ayoub ait ahmad</a></div>

    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Our Works</a></li>
        </ul>
    </nav>
</header>
  </>
  );
}
export default Nav;