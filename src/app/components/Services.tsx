import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Services = () => {
  return (
    <div id="services" className="services section-padding">
        <div className="section-header">
            <h2>My <span>Services</span></h2>   
        </div>
        <div className="services-content">
            <div className="single-service">
                <div className="icon-area">
                  <i className="fa fa-martini-glass"></i>
                </div>
                <h2>Web Design</h2>
                <p>I m a web designer dedicated to building visually captivating and user-friendly websites that leave a lasting impact. I focus on creating responsive, 
                  accessible designs that adapt beautifully to any device, ensuring a seamless experience for every user.</p>
                <Link href="#">Learn More</Link>
            </div>

            <div className="single-service">
                <div className="icon-area">
                  <i className="fa fa-gem"></i>
                </div>
                <h2>UI / UX Design</h2>
                <p>As a UI/UX designer, I craft intuitive and visually engaging digital experiences that prioritize user 
                  satisfaction and accessibility. I focus on creating seamless interactions and aesthetics that resonate
                   with users, blending creativity with functionality.</p>
                <Link href="#">Learn More</Link>
            </div>

            <div className="single-service">
                <div className="icon-area">
                  <i className="fa fa-hashtag"></i>
                </div>
                <h2>Graphics Design</h2>
                <p>As a graphic designer, I specialize in bringing ideas to life through visually compelling designs that communicate effectively. 
                  I blend creativity with strategy, crafting designs that not only look great but also resonate with audiences. </p>
                <Link href="#">Learn More</Link>
            </div>


        </div>
    </div>
  )
}

export default Services