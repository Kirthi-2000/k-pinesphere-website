import React from 'react';
import './CultureSection.css'; // Custom styles for layout
import img1 from './images/Nandhini.jpg';
import img2 from './images/Kiruthika.jpg';
import img6 from './images/Vishali.jpeg';
import img7 from './images/Vandhana.jpg';
import img8 from './images/Kauvery.jpeg';
import img9 from './images/Gokul.jpg';



const CultureSection = () => {
  return (
    <>

    <section className="culture-section">
      <div className="center-content">
        <div className="text-content">
          <span className="label">• Culture</span>
          <h1>
            Life At Pinesphere
            {/* <span className="highlight"> </span> */}
          </h1>
          <button className="intrigue-button">
            See more
          </button>
        </div>
      </div>

      {/* Images scattered around */}
      <img src={img1} alt="Nandhini" className="image image-pos-1" />
      <img src={img2} alt="Kiruthika" className="image image-pos-2" />
      <img src={img6} alt="Vishali" className="image image-pos-3" />
      <img src={img7} alt="Vandhana" className="image image-pos-4" />
      {/* <img src={img8} alt="Kauvery" className="image image-pos-5" />
      <img src={img9} alt="Gokul" className="image image-pos-6" /> */}
      
    </section>
    </>
    
  );
};

export default CultureSection;
