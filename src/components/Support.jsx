import React from 'react';
import supports from '../assets/supports.png';

const Support = () => {
  return (
    <>
      <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'center' }}>
      <div className='container adj'>
        <div className='support'>
          <div className='supportHeading'>
            Supported by All Popular Browsers
          </div>
          <div className='supportSub'>
            Rest assured, Motion Art is designed to be compatible with all major web browsers.
          </div>
          <hr style={{ width: '80%', backgroundColor: '#eee5ffbd', borderRadius: '10px', margin: '20px auto' }} />
          <div className='supportImg'>
            <img src={supports} style={{ width: '100%' }} alt="Supported browsers" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Support;
