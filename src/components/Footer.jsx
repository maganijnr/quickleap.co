import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import './index.css'

const Footer = () => {
   return(
      <div className="footer-body">
         <div className="flex items-center h-80 justify-center md:justify-start">
            <div className="text-primary text-2xl mx-1 md:text-3xl">
               <a href="https://web.facebook.com/quickleap" _blank="true" data-click><BsFacebook/></a>
            </div>
            <div className="text-primary text-2xl mx-1 md:text-3xl">
               <a href="https://twitter.com/quickLeap" _blank="true"><AiFillTwitterCircle/></a>
            </div>
            <div className="text-primary text-2xl mx-1 md:text-3xl">
               <a href="https://www.linkedin.com/company/quick-leap/" _blank="true"><AiFillLinkedin/></a>
            </div>
            <div className="text-primary text-2xl mx-1 md:text-3xl">
               <a href="https://www.instagram.com/quickleaphq/" _blank="true"><AiFillInstagram/></a>
            </div>
         </div>

      </div>
   );
};

export default Footer;
