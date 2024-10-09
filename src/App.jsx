// @ts-nocheck
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect , useState } from "react";
function App() {


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY  > 400) {
        setshowScrollBTN(true)
        
      } else {
        setshowScrollBTN(false)
      }
    });
  }, []);
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
     
        <a style={{opacity: setshowScrollBTN? 1 : 0 , transition:"3s"}}  href="#up">
          <button className="scroll2Top icon-cheveron-up "></button>
        </a>
    </div>
  );
}

export default App;
