import React, { useEffect, useRef } from 'react';
import glogo from '../assets/g.png';
import leaf from '../assets/leaf.png';
import wordpress from '../assets/wordpress.png';
import ratings from '../assets/ratings.png';

const Achievements = () => {
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
        threshold: 0.1,
      }
    );

    const items = containerRef.current.querySelectorAll('.contItem');
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
    <div className='achievements'>
      <div className='achievementLine'>Trusted by thousands of users around the world</div>
      <div className='achievementsCont' ref={containerRef}>
        <div className='contItem'>
          <img className='achievementsImg' src={leaf} alt="Leaf" />
          <div>
            <img className='achievementsRating' src={ratings} alt="Ratings" />
            <p>4.6 score, 200 reviews</p>
          </div>
        </div>
        <div className='contItem'>
          <img className='achievementsImg' src={glogo} alt="G" />
          <div>
            <img className='achievementsRating' src={ratings} alt="Ratings" />
            <p>4.6 score, 200 reviews</p>
          </div>
        </div>
        <div className='contItem'>
          <img className='achievementsImg' src={wordpress} alt="Wordpress" />
          <div>
            <img className='achievementsRating' src={ratings} alt="Ratings" />
            <p>4.6 score, 200 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
