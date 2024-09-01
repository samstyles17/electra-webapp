import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

// Styled components remain the same
const BannerContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 960px) {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 961 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 960, min: 0 },
    items: 1
  }
};

function Banner() {
  const [images, setImages] = useState({ web: [], mobile: [] });
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:960px)");
  // Handling API call and response
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://1a2fagymd7.execute-api.ap-south-1.amazonaws.com/v2/fetchBannerImageDetails');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched banner data:', data);
        
        const sortImages = (imageArray) => {
          return imageArray.sort((a, b) => {
            if (a.position_index === 1) return -1;
            if (b.position_index === 1) return 1;
            return a.position_index - b.position_index;
          });
        };

        const webImages = sortImages(data.filter(image => image.mode === "Desktop"));
        const mobileImages = sortImages(data.filter(image => image.mode === "Mobile"));

        setImages({ web: webImages, mobile: mobileImages });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const selectedImages = isMobile ? images.mobile : images.web;

  if (isLoading || selectedImages.length === 0) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <BannerContainer>
      <StyledCarousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={false}
        pauseOnHover={false}
        rtl={true}
      >
        {selectedImages.map((image, index) => (
          <div key={image.id}>
            <Link to={image.link}>
              <BannerImage 
                src={image.image_url} 
                alt={image.alt || `Slide ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </StyledCarousel>
    </BannerContainer>
  );
}

export default Banner;