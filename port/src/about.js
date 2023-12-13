import { useState } from "react";
function About() {

    const [state, setState] = useState(0);
    
  
    return (
      <div className="flex h-screen overscroll-none bg-stone-800">
        <div className=" w-screen bg-blue-500 ">
            <h1>bword</h1>
        </div>
        <div className="w-8/12 bg-blue-800 ">
            <h1>fword</h1>
        </div>
      </div>
    );
  }
  
  export default About;