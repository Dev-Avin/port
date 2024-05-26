import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  const handlePurchaseClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
  };
  return (
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
      <div className='header adj'>
        <div className='flexRow'>
           <img src={logo} alt="Motion Effects"/>
         </div>
         <div>
            <button 
             className='headerButton'
             onClick={handlePurchaseClick}
             >
                 Purchase now

            </button>
         </div>
    </div>
    </div>
  )
}

export default Header
