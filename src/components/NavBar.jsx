import { useState } from 'react';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex items-center justify-between border-b border-gray-500 py-5'>
      <h1 className='font-gruppo ml-8 text-2xl sm:text-3xl'>JC Montgomery</h1>
      <nav className=''>
        <section className='flex lg:hidden'>
          <button
            className={`group z-50 mr-8 space-y-1.5 ${
              isNavOpen
                ? ` rounded-3xl bg-gray-200 px-1 pb-2 pt-4 drop-shadow-md`
                : ''
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span
              className={`block h-1 w-6 origin-center rounded-sm bg-gray-500 duration-500 ${
                isNavOpen ? 'translate-to-x-top' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-6 rounded-sm bg-gray-500 duration-300 group-hover:translate-x-2 group-hover:bg-red-600 ${
                isNavOpen ? 'opacity-0' : 'block'
              }`}
            ></span>
            <span
              className={`block h-1 w-6 origin-center rounded-sm bg-gray-500 duration-500 ${
                isNavOpen ? 'translate-to-x-bottom' : ''
              }`}
            ></span>
          </button>
          <div className={isNavOpen ? 'showNavMenu' : 'hideNavMenu'}>
            <ul className='flex flex-col items-center border border-green-900'>
              <li>
                <a href={'about'}>About</a>
              </li>
              <li></li>
              <li>Test</li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
