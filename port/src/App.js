import { useState } from "react";
import Projects from "./projects";
import About from "./about";
import pfp from "./logowhite.svg";
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
    <div className="fixed top-0 left-0 right-0 bg-stone-800/90 w-screen h-24 overscroll-none  shadow-stone-800/50 transform hover:bg-stone-800 motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg hover:shadow-blue-500/40">
      <div className="flex items-center justify-center">      
        <button className="mx-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-extrabold py-3 px-6 rounded-full transform hover:scale-[125%] motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg hover:shadow-blue-500/40"
          onClick={button}>click</button>
        <button className="mx-10  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-extrabold py-3 px-6 rounded-full transform hover:scale-[125%] motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg hover:shadow-blue-500/40"
          onClick={button}>click</button>
        <button>
        <img className="w-20 m-2 rounded-2xl white transform hover:scale-[125%] motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg "
         src={pfp} 
         onClick={button}/>
        </button>
        
        <button className="mx-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-extrabold py-3 px-6 rounded-full transform hover:scale-[125%] motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg hover:shadow-blue-500/40"
          onClick={button}>click</button>
        <button className="mx-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-extrabold py-3 px-6 rounded-full transform hover:scale-[125%] motion-reduce:transform-none transition duration-250 ease-in-out shadow-lg hover:shadow-blue-500/40"
          onClick={button}>click</button>
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
