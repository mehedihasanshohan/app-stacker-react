import icon from '/assets/logo.png';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#01305A] text-primary-content p-4">
      <div className="text-center">
        <img src={icon} className='w-12 h-12 mx-auto' alt="App Stacker Logo" />
        <p className="font-bold mt-2">App Stacker Software Solution.</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
        <div className='flex justify-center items-center mt-2 gap-4 text-2xl'>
          <a href="https://github.com/mehedihasanshohan" target='_blank'>
            <FaGithub className="hover:text-gray-300 transition-colors duration-200" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100007820023284" target='_blank'>
            <FaFacebook className="hover:text-gray-300 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/mehedi-hasan-1a08b22b7/" target='_blank'>
            <FaLinkedin className="hover:text-gray-300 transition-colors duration-200" />
          </a>
      </div>
    </footer>
  );
};

export default Footer;
