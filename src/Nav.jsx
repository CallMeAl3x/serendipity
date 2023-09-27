import logo from'./assets/icons/Logo.svg';
import serendipity from'./assets/icons/Serendipity.svg';
import HamburgerOpen from './assets/icons/HamburgerOpen.svg';
import HamburgerClosed from './assets/icons/HamburgerClosed.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [isClicked, setIsClicked] = useState(true);

    function OpenMenu() {
        const menu = document.getElementById('menu');
      
        if (menu) {
          const computedStyle = window.getComputedStyle(menu);
          const currentDisplay = computedStyle.getPropertyValue('display');
      
          if (currentDisplay === 'none' || currentDisplay === '') {
            menu.style.display = 'flex';
            setIsClicked(false);
          } else {
            menu.style.display = 'none';
            setIsClicked(true);
          }
        }
      }
  return (
    <header className='sm:backdrop-blur-[2.25px] pb-6'>
        <div>
            <img 
            src={isClicked ? HamburgerOpen : HamburgerClosed} 
            alt=""
            height={45}
            width={45}
            className='fixed ml-3 mt-1 z-20 sm:hidden'
            onClick={OpenMenu}
            id='menubutton'
            />
        </div>
        <div className='p-12 flex justify-between font-Inter w-full pb-0 max-w-[1800px] max-sm:p-3 max-sm:ml-[22.5%] max-sm:w-fit'>
          <Link to="/" className='z-20'>
            <div className='flex'>
                <img 
                src={logo} 
                alt="" 
                className='mr-2' />
                <img src={serendipity} alt="" />
            </div>
            </Link>
            <div className='flex items-center gap-10 text-white max-sm:hidden max-sm:bg-black/100 max-sm:fixed max-sm:h-screen max-sm:w-screen max-sm:top-0 max-sm:left-0 max-sm:z-10' id='menu'>
                <ul className='flex gap-10 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:bottom-0 max-sm:right-0 max-sm:flex-col max-sm:text-[rgb(204,81,214)] max-sm:text-2xl max-sm:justify-center max-sm:items-center'>
                <Link to="/"><li>Home</li> </Link>
                    <li>Browse</li>
                    <li>Updates</li>
                    <li>Pricing</li>
                </ul>
                <Link to="/Form" className=''>
                  <button className='rounded-[10px] py-2 px-6 generate_button max-sm:top-[70%] max-sm:fixed max-sm:left-[36%]'>Sign up</button>
                </Link>
            </div>
        </div>
  </header>
  )
}

export default Nav