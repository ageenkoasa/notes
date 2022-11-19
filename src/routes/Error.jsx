/*
8. Страница 404, которая предлагает нам пройти в about (Home), то есть на страницу 3.
 */

import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='text-center m-60'>
      <h1>404</h1>
      <strong>Page not found</strong>
      <p>
        Go{' '}
        <Link
          to='/'
          className='hover:text-blue-800 underline active:text-blue-800 underline'
        >
          Home
        </Link>
      </p>
    </div>
  );
};

export { Error };
