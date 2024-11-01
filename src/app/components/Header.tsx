import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <div className="header ">
        <nav>
            <div className="logo">
             Donia <span>Batool.</span>
            </div>
            <div className="menu">
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#services">Skills</Link></li>
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>

            </div>
        </nav>
        
        <div className="banner">
    <div className="b-text">
        <h1>I'm Donia Batool <span>Web Designer</span></h1>
        <p>
            "I'm a passionate web developer with expertise in Next.js, React, and Tailwind CSS, creating responsive and dynamic web experiences. 
            My projects focus on functionality, aesthetics, and user engagement through optimized design and code."
        </p>
        <button>Learn More</button>
    </div>
    <div className="b-image">
        <Image src="/media/donia.png" alt="my picture" width={400} height={300} />
    </div>
</div>

    </div>
  )
}

export default Header