import Image from "next/image";
import Hero from "./components/hero/hero";
import About from "./components/about/about"
import Skills from "./components/skills/skills";
import Project from "./components/project/projects";

import Contact from "@/app/components/contact/contact"
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
       <Skills/> 
       <Project/>
       <Contact/>
       
      </div>
  );
}
