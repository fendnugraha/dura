import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import duraLogo from "./assets/dura-logo.svg";
function App() {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center h-screen" id="home">
        <img src={duraLogo} alt="logo" width={500} className="mx-auto" />
      </section>
      <Shop />
      <About />
      <Contact />
    </>
  );
}

export default App;
