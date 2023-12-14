import { useState } from "react";
function About() {

    const [state, setState] = useState(0);
    
  
    return (
      <div className="flex h-screen overscroll-none bg-stone-800">
        <div className=" w-screen bg-blue-500 ">
            <h1>bword</h1>
        </div>
        <div className="w-8/12 bg-blue-800 ">
            <h1 className="m-2 text-slate-100"> Vestibulum in pulvinar turpis, eu lacinia mi. Aenean finibus malesuada sagittis. Donec odio nisi, sollicitudin vitae laoreet molestie, imperdiet vel ipsum. Suspendisse mauris arcu, finibus ac vestibulum in, vehicula scelerisque enim. Aliquam et mi dui. Maecenas dignissim arcu in erat rutrum euismod. Proin imperdiet urna ut diam dictum ullamcorper. Fusce rhoncus arcu dignissim libero posuere, eget varius turpis feugiat. Morbi elit dui, posuere ac vulputate dictum, fermentum nec eros. Integer dolor sapien, ultricies quis semper at, ultrices ut libero. Duis id ipsum et neque laoreet fermentum. Pellentesque vestibulum, ipsum nec scelerisque pharetra, est nulla dictum nisi, sed vehicula libero purus at justo. Donec vel tincidunt risus. Pellentesque ex eros, feugiat nec neque ut, aliquet bibendum lectus. Proin malesuada lacus at quam accumsan porta. Integer congue risus interdum, posuere lacus vitae, volutpat dolor. </h1>
        </div>
      </div>
    );
  }
  
  export default About;