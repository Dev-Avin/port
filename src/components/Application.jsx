import React, { useEffect, useRef } from 'react';
import page from '../assets/page.png';
import section from '../assets/section.png';

const Application = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.dataset.animation === 'moveUp') {
              entry.target.classList.add('moveUp');
            } else if (entry.target.dataset.animation === 'moveDown') {
              entry.target.classList.add('moveDown');
            }
            else{
              entry.target.classList.remove('moveUp');
              entry.target.classList.remove('moveDown');
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const items = containerRef.current.querySelectorAll('.applicationContainer');
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
    <div className='application'>
      <div className='applicationText'>
        Apply On Any Section Or Enable For Whole Page
      </div>
      <div className='applicationSub'  ref={containerRef}>
        <div className='container applicationContainer' data-animation='moveDown'>
          <div className='sectionHeading'>
            Apply On Section
          </div>
          <div className='sectionSub'>
            Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
          </div>
          <img src={section} className='sectionImg' alt="Section" />
        </div>
        <div className='container applicationContainer' data-animation='moveUp'>
          <div className='sectionHeading'>
            Apply On Page
          </div>
          <div className='sectionSub'>
            Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
          </div>
          <img src={page} className='sectionImg' alt="Page" />
        </div>
      </div>
    </div>
  );
}

export default Application;
