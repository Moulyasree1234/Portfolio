import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Testimonals from './Components/Testimonial';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

console.log("✅ App component is loading...");

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-auto antialiased"> {/* ✅ Ensure scroll works */}
      <div className='bg-image inset-0 bg-cover bg-center'> {/* ✅ Removed `fixed` */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          {console.log("✅ Rendering Projects component...")}
          <Projects />
          <Skills/>
          <Experience/>
       
          <Education/>
          {/* <Testimonals /> */}
          <Contact />
        </div>
      </div>
    </main>
  );
}


export default App;
