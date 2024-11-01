import About from "./components/About";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Services from "@/app/components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Quote/>
      <Services/>
       <Contact/>
       <Footer/>
      </div>
  );
}
