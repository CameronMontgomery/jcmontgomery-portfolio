import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-500 py-5 dark:bg-gray-800'>
      <h1 className='font-gruppo ml-8 text-2xl dark:text-white sm:text-3xl'>
        <Link to='/'>JC Montgomery</Link>
      </h1>
      <nav className=''>
        <section className='flex lg:hidden'>
          <button
            className={`group z-50 mr-8 space-y-1.5 ${
              isNavOpen
                ? ` rounded-3xl bg-gray-300 px-1 pb-2 pt-4 drop-shadow-md dark:bg-gray-700`
                : ''
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span
              className={`block h-1 w-6 origin-center rounded-sm bg-gray-500 duration-500 dark:bg-white ${
                isNavOpen ? 'translate-to-x-top' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-6 rounded-sm bg-gray-500 duration-300 group-hover:translate-x-2 group-hover:bg-red-600 dark:bg-white ${
                isNavOpen ? 'opacity-0' : 'block'
              }`}
            ></span>
            <span
              className={`block h-1 w-6 origin-center rounded-sm bg-gray-500 duration-500 dark:bg-white ${
                isNavOpen ? 'translate-to-x-bottom' : ''
              }`}
            ></span>
          </button>
          <div className={isNavOpen ? 'showNavMenu' : 'hideNavMenu'}>
            <ul className=' flex flex-col items-center border border-green-900 text-white'>
              <li>
                <Link to={'about'}>About</Link>
              </li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
        </section>
        {/*
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </nav>
    </div>
  );
};

export default NavBar;
