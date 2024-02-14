import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import duraLogo from "./assets/dura-logo.svg";
function App() {
  return (
    <>
      <Navbar />
      <section className="flex justify-center flex-col items-center h-screen bg-[url('https://source.unsplash.com/random/1920x1080/?fashion')] bg-cover bg-center" id="home">
        <img src={duraLogo} alt="logo" width={800} className="mx-auto" />
        <button className="text-xl text-white font-black mt-10 p-5 bg-slate-800 w-[200px] hover:bg-slate-600">SHOP NOW</button>
      </section>
      <Shop />
      <About />
      <Contact />
    </>
  );
}

export default App;
