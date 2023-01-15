import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialBadges from './SocialBadges';

const NavBar = ({ darkModeHandler, isDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-500 py-5 dark:bg-gray-800'>
      <h1 className='font-gruppo ml-3 text-2xl dark:text-white sm:text-3xl md:ml-6'>
        <Link to='/'>JC Montgomery</Link>
      </h1>
      <nav className='flex'>
        <section className='flex lg:hidden'>
          <button
            className={`group z-20 mr-5 space-y-1.5 md:mr-6 ${
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
            <ul className={`border border-green-900 text-center text-white`}>
              <li>
                <div className='text-center'>
                  <button
                    className={`hover:text-red-600 ${
                      isHamburgerDropdownOpen ? 'text-red-600' : 'text-white'
                    }`}
                    onClick={() =>
                      setIsHamburgerDropdownOpen(!isHamburgerDropdownOpen)
                    }
                  >
                    About
                  </button>
                  {isHamburgerDropdownOpen ? (
                    <ul>
                      <li className='hover:text-red-600'>
                        <Link to={''} onClick={() => setIsNavOpen(false)}>
                          Skills
                        </Link>
                      </li>
                      <li className='hover:text-red-600'>
                        <Link to={'about'} onClick={() => setIsNavOpen(false)}>
                          About Page
                        </Link>
                      </li>
                      <li className='hover:text-red-600'>
                        <Link to={''} onClick={() => setIsNavOpen(false)}>
                          Resume
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </li>
              <li className='hover:text-red-600'>
                <Link to={'projects'} onClick={() => setIsNavOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className='hover:text-red-600'>
                <Link to={''} onClick={() => setIsNavOpen(false)}>
                  Contact
                </Link>
              </li>
              <hr className={`border border-red-500 `} />
              <li className='hover:text-red-600'>
                <Link to={'blog'} onClick={() => setIsNavOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className=''>
                <SocialBadges />
              </li>
            </ul>
          </div>
        </section>
        {/*
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <button
          type='button'
          onClick={() => darkModeHandler()}
          className='group mr-3 rounded-lg border-[0.5px] border-gray-700 p-2.5 text-sm text-gray-500 shadow shadow-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-[0.5px] dark:border-white dark:text-gray-400 dark:shadow dark:shadow-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700 md:mr-8'
        >
          {isDarkMode ? (
            <svg
              className='h-5 w-5 group-hover:fill-yellow-500 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
          ) : (
            <svg
              className='h-5 w-5 group-hover:fill-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
