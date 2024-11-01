import Image from "next/image"
import Link from "next/link"


const About = () => {
  return (
    <div id="about"className="about section-padding">
      <div className="about-section">
        <div className="about-img">
         <Image src="/media/donia.png" alt="Donia picture" width={2000} height={2000}/>
        </div>
        <div className="about-text">
          <h2><span>Full-Stack</span> Developer</h2>
          <p>
          As a full-stack web developer, I m committed to blending creativity with functionality to bring projects to life. 
          My journey in web development has been fueled by a desire to push the boundaries of what&apos;s possible online, 
          using the latest technologies like Next.js, Sanity, and Tailwind CSS to deliver sleek and intuitive websites. 
          From dynamic e-commerce platforms to visually engaging portfolio sites, my work focuses on sustainable design, 
          performance, and seamless user interaction.
          </p>
          <Link href="#">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default About