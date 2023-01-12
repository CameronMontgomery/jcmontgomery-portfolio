import { useState } from 'react';
import { useRouteError, Link } from 'react-router-dom';
import errorIcon from '../assets/red-error.svg';

const getErrorStack = (stackString) => {
  const stackArray = stackString?.split('\n');
  if (stackArray[stackArray?.length - 1].length === 0) {
    console.log('test', stackArray?.pop());
  }
  return stackArray;
};

const Error = () => {
  const error = useRouteError();
  const [showDetails, setShowDetails] = useState(false);
  const stackArray = getErrorStack(error?.error?.stack);

  console.log('Error', error);
  console.log('stack', stackArray);

  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
      <img
        className='mb-10 max-h-24 w-auto sm:max-h-40'
        src={errorIcon}
        alt='Red error symbol'
      />
      <p className='mb-10'>Sorry, an unexpected error has occurred.</p>
      <p className='mb-10'>
        <i className='text-lg text-stone-500'>
          {error.statusText || error.message}
        </i>
      </p>
      <Link
        className='mb-8 rounded-md border bg-blue-500 p-1.5 text-white drop-shadow-md hover:bg-blue-600'
        to='/'
      >
        Return Home
      </Link>
      <button className='mb-2' onClick={() => setShowDetails(!showDetails)}>
        <sub className='text-red-600'>View Details</sub>
      </button>
      <div
        className={`${
          showDetails ? 'flex' : 'hidden'
        } mx-auto max-w-xl flex-col justify-around overflow-auto rounded-xl border bg-red-200 p-2 text-sm drop-shadow-lg sm:p-4 sm:text-base`}
      >
        <p className='my-1'>
          <span className='mr-1 font-semibold'>Status:</span>
          {error.status}
        </p>
        <p className='my-1'>
          <span className='mr-1 font-semibold'>Message:</span>
          {error?.error?.message}
        </p>
        <p className='my-1'>
          <span className='mr-1 font-semibold'>Line Number:</span>
          {error?.error?.lineNumber}
        </p>
        <div className='my-1'>
          <p className='mr-1 font-semibold'>Stack:</p>
          {stackArray.map((el) => (
            <p
              key={el}
              className=' border-b-2 border-red-800 px-1 pb-1 pt-0 last:border-0 last:pb-0'
            >
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error;
