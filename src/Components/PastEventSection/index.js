import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesLink,
  ServicesContent,
} from './PastEventElements';

const Services = () => {
  const events = [
    {
      title: 'Orientation and Treasure Hunt',
      link: 'https://www.instagram.com/reel/Cnrgq8Jha-p/',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png',
    },
    {
      title: 'Find Global Career opportunities on Web3 and Metaverse',
      link: 'https://www.instagram.com/reel/Coy0FTINtEt/',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png',
    },
    {
      title: 'Intro to Web3 and its Career Scope',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png',
    },
    {
      title: 'BFF Hackathon',
      link: 'https://www.instagram.com/reel/Cs3nO1yN3-6/',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png',
    },
  ];



  return (
    <ServicesContainer id="services">
      <ServicesH1>Past Events</ServicesH1>
      <ServicesWrapper>
        <Carousel
          showArrows={true} // Display arrow buttons for navigation
          showThumbs={false} // Hide thumbnail images
          showStatus={false} // Hide status indicators
          infiniteLoop={true} // Enable infinite loop
          autoPlay={true} // Enable auto-play
          interval={5000} // Set auto-play interval in milliseconds (e.g., 5 seconds)
          centerMode={true} // Enable center mode
          centerSlidePercentage={33.33} // Set the width of the centered slide as a percentage (33.33% for 3 items)
        >
          {events.map((event, index) => (
            <ServicesCard key={index}>
              <ServicesIcon src={event.image} />
              <ServicesContent>
                <ServicesH2>
                  <b>{event.title}</b>
                </ServicesH2>
                <ServicesLink
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Instagram<FontAwesomeIcon icon={faArrowRight} /> 
                </ServicesLink>
              </ServicesContent>
            </ServicesCard>
          ))}
        </Carousel>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;