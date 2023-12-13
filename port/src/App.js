import { useState } from "react";
import Projects from "./projects";
import About from "./about";
import pfp from "./LOGO.jpg";
function App() {
  const [state, setState] = useState(0);

  function button() {
    if (state != 0) {
      setState(0);
    } else {
      setState(1);
    }
  }

  const handler = () => {
    switch (state) {
      case 0:
        return <About />;
      case 1:
        return <Projects />;
    }
  };

  return (
    <div className="bg-blue-900 h-screen w-screen">
      <NavBar button={button} />
      <div className="pt-24">{handler()}</div>
      <Footer/>
    </div>
  );
}

const NavBar = ({ button }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-stone-800/90 w-screen h-24 overscroll-none ">
      <div className="flex items-center justify-center">
      
        <h1 className="text-blue-200">rawr</h1>
        <img className="w-20 m-2 rounded-2xl" src={pfp} />
        <button onClick={button}>CLICK</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return(
    <div className="flex items-center justify-center text-center text-white bg-stone-800">
        Philip King
    </div>
  );
}

export default App;
