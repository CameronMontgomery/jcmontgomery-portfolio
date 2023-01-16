import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
import SocialBadges from './SocialBadges';

const NavBar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-500 py-5 dark:bg-gray-800'>
      <h1 className='font-gruppo ml-3 text-2xl dark:text-white sm:text-3xl md:ml-6'>
        <Link to='/'>JC Montgomery</Link>
      </h1>
      <nav className='flex'>
        <DarkModeButton
          isDarkMode={props.isDarkMode}
          darkModeHandler={props.darkModeHandler}
        />
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
      </nav>
    </div>
  );
};

export default NavBar;
