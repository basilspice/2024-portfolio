import React from "react";
import Button from "./reusables/Button";



function NavBar() {
  return (
    <div className="z-10 flex justify-between pt-1 pb-8 pr-5 pl-5">
     
     <Button text="About" onClick={() => console.log("About Me Clicked")} className="my-custom-class" />
     <Button text="Projects" onClick={() => console.log("Projects Clicked")} className="my-custom-class" />
     <Button text="Contact" onClick={() => console.log("Contact Me Clicked")} className="my-custom-class" />
      </div>
    
  );
}

export default NavBar;


