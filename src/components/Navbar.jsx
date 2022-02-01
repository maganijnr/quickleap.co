import Logo from '../assets/logo.svg'
import './index.css'

const Navbar = () => {
   return(
      <div className='navbar'>
         <div className='navbar-wrapper'>
            <img src={Logo} alt="logo" className="logo"/>
         </div>
      </div>
   );
};

export default Navbar;
