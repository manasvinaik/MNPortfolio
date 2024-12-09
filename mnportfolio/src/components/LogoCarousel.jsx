import React from 'react';
import './LogoCarousel.css';
import pythonLogo from '../assets/icons8-python.svg';
import mysqlLogo from '../assets/icons8-mysql-logo.svg';
import githubLogo from '../assets/icons8-github.svg';
import reactLogo from '../assets/icons8-react-native.svg';
import htmlLogo from '../assets/icons8-html.svg';
import cssLogo from '../assets/icons8-css.svg';
import javascriptLogo from '../assets/icons8-javascript.svg';

const LogoCarousel = () => {
  const logos = [
    { src: pythonLogo, alt: 'Python' },
    { src: mysqlLogo, alt: 'MySQL' },
    { src: githubLogo, alt: 'Github' },
    { src: htmlLogo, alt: 'HTML' },
    { src: cssLogo, alt: 'CSS' },
    { src: javascriptLogo, alt: 'JavaScript' },
    { src: reactLogo, alt: 'ReactJS' },
  ];

  // Repeat logos multiple times to create the infinite scroll effect
  const repeatedLogos = [...logos, ...logos, ...logos,...logos,...logos];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll py-4">
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto mx-6 mb-16" // Adjusted space between logos
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
