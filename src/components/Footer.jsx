import { Link } from 'react-router-dom';
import linkedIn from '../assets/linkedin-blue-circle.svg';
import github from '../assets/github-blk.svg';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full rounded-t-lg border border-gray-800 bg-white p-4 text-center shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6'>
      <span className='flex-shrink text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        © 2022{' '}
        <Link href='/' className='hover:underline'>
          J.C. Montgomery{' '}
        </Link>
        - All Rights Reserved.
      </span>
      <ul className='mt-3 flex flex-col flex-wrap  text-sm text-gray-500 dark:text-gray-400 sm:mt-0 md:flex-row md:items-center'>
        <li>
          <Link to='about/' className='mr-4 hover:underline md:mr-6 '>
            About
          </Link>
        </li>
        <li>
          <Link href='privacy/' className='mr-4 hover:underline md:mr-6'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href='/' className='mr-4 hover:underline'>
            Contact
          </Link>
        </li>
        <li>
          <div className='flex items-center justify-center border'>
            <Link href='/' className='mr-1'>
              <img
                className='max-w-[1.75rem] transition duration-300 ease-in-out hover:scale-110'
                src={linkedIn}
                alt='LinkedIn Logo'
              />
            </Link>
            <Link href='/'>
              <img
                className='max-w-[1.75rem] transition duration-300 ease-in-out hover:scale-110'
                src={github}
                alt='GitHub Logo'
              />
            </Link>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
