import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "../styles.css"
import imageDivider from "../assets/img/success_heading_divider.png";
// Import your images
import img1 from '../assets/img/expertise_alt.png';
import img2 from '../assets/img/agility_alt.png';
import img3 from '../assets/img/integrity_alt.png';
import img4 from '../assets/img/innovative_alt.png';
import img5 from '../assets/img/client_alt.png';
import img6 from '../assets/img/collab_alt.png';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 'bold',
    fontSize: 30
  },
});

const items = [
  { text: "Expertise", number: 1, image: img1 },
  { text: "Agility", number: 2, image: img1 },
  { text: "Integrity", number: 3, image: img1 },
  { text: "Innovative", number: 4, image: img1 },
  { text: "Client Centric", number: 5, image: img1 },
  { text: "Collaboration", number: 6, image: img1 },
];

function SuccessCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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