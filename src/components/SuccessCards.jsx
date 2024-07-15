import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "../styles.css"
import imageDivider from "../assets/img/success_heading_divider.png";
// desktop view images
import img1 from '../assets/img/expertise_alt.png';
import img2 from '../assets/img/agility_alt.png';
import img3 from '../assets/img/integrity_alt.png';
import img4 from '../assets/img/innovative_alt.png';
import img5 from '../assets/img/client_alt.png';
import img6 from '../assets/img/collab_alt.png';
// mobile view images
import img7 from '../assets/img/expertise_alt_mobile.png';
import img8 from '../assets/img/agility_alt_mobile.png';
import img9 from '../assets/img/integrity_alt_mobile.png';
import img10 from '../assets/img/innovative_alt_mobile.png';
import img11 from '../assets/img/client_alt_mobile.png';
import img12 from '../assets/img/collab_alt_mobile.png';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 'bold',
    fontSize: 30
  },
});

function SuccessCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const desktopImg = [
    { text: "Expertise", number: 1, image: img1 },
    { text: "Agility", number: 2, image: img2 },
    { text: "Integrity", number: 3, image: img3 },
    { text: "Innovative", number: 4, image: img4 },
    { text: "Client Centric", number: 5, image: img5 },
    { text: "Collaboration", number: 6, image: img6 },
  ];

  const mobileImg = [
    { text: "Expertise", number: 1, image: img7 },
    { text: "Agility", number: 2, image: img8 },
    { text: "Integrity", number: 3, image: img9 },
    { text: "Innovative", number: 4, image: img10 },
    { text: "Client Centric", number: 5, image: img11 },
    { text: "Collaboration", number: 6, image: img12 },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setItems([...mobileImg]);
      } else {
        setItems([...desktopImg]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="route-to-success">
        <img src={imageDivider} alt="Vector Image"/>
        <h1>OUR ROUTE <span className='orange-text'>TO SUCCESS</span> </h1>
      </div>
      <div className='cardgg'>
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`semi-hover ${index === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="content">
              <span className="item-number">{item.number}</span>
              <span className="item-text">{item.text}</span>
            </div>
            <div className="image-container">
              <img src={item.image} alt="" className="hover-image" />
            </div>
          </div>
        ))}
      </div> 
    </ThemeProvider>
  )
}

export default SuccessCards;