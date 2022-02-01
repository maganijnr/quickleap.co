import BgImage from '../assets/bg.svg'
import './index.css'

const Hero = () => {
   return (
      <div className="hero-body">
         <div className="hero-left">
            <div className="hero-info">
                  <h4>
                  We are building an ecosystem of solutions that delivers Good food for everyone, everywhere, everytime!
               </h4>
               <p>
                  We exist to promote your life, providing all the food you'll need from infancy to adulthood, enabling businesses by providing access to well graded raw materials at scale, while, transforming the communities we operate in.
               </p>
               <div className="btn-wrapper">
                  <button>
                     Coming Soon!
                  </button>
               </div>
            </div>
         </div>
         <div className="hero-right">
            <img src={BgImage} alt="bg"/>
         </div>
      </div>
   );
};

export default Hero;
