import React, { useEffect, useRef } from 'react';
import like from '../assets/like.png';
import lightning from '../assets/lightning.png';
import moon from '../assets/moon.png';

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
          else{
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const items = containerRef.current.querySelectorAll('.featureItem');
    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <div className='features adj'>
      <div className='featureHead'>Why work with me ?..</div>
      <div className='featureSubHead'>
        A seasoned web designer who's capable of seamlessly integrating your innovation bringing your ideas to life , providing with a seamless and intuitive experience.
      </div>
      <div className='featuresCont' ref={containerRef}>
        <div className='featureItem container'>
          <img src={lightning} alt="Lightning"/>
          <div className='featureText'>
            <div className='featureHeading'>Light Weight</div>
            <div className='featureSub'>Blazing fast light weight websites with quick loading</div>
          </div>
        </div>
        <div className='featureItem container'>
          <img src={like} alt="Like"/>
          <div className='featureText'>
            <div className='featureHeading'>100% Responsive</div>
            <div className='featureSub'>Create a consistent visual experience across all devices.</div>
          </div>
        </div>
        <div className='featureItem container'>
          <img src={moon} alt="Moon"/>
          <div className='featureText'>
            <div className='featureHeading'>User Friendly Interface</div>
            <div className='featureSub'>Ensure a smooth experience for both applicants and administrators.</div>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div style={{marginBottom: '100px'}}></div>
      </>
  );
}

export default Features;
