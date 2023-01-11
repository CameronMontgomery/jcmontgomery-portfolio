import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full rounded-t-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6'>
      <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        © 2022{' '}
        <Link href='/' className='hover:underline'>
          J.C. Montgomery{' '}
        </Link>
        - All Rights Reserved.
      </span>
      <ul className='mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
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
          <Link href='/' className='mr-4 hover:underline md:mr-6'>
            Licensing
          </Link>
        </li>
        <li>
          <Link href='/' className='hover:underline'>
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
