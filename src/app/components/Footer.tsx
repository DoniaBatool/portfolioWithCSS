import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'; // Corrected import names

const Footer = () => {
  return (
    <footer className="section-padding">
      <p>All Rights Reserved by @Donia Batool</p>
      <div className="socials">
        <Linkedin size={25} className="social-icon" />
        <Instagram size={25} className="social-icon" />
        <Twitter size={25} className="social-icon" />
        <Facebook size={25} className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;

