import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="contact section-padding">
      <div className="section-header">
        <h2>Contact <span>Me</span></h2>
      </div>
      <div className="contact-content">
        <div className="single-contact">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name..." />
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Email..." />
          <label>Your Queries</label>
          <input type="text" placeholder="Enter Your Query..." />
          <Link href="#">
            Send Now 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
