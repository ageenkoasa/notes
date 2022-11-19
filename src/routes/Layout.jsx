import { NavLink, Outlet } from 'react-router-dom';
import { useUserContext } from '../components/userContext';

export default function Layout() {
  const user = useUserContext();
  const handleLogout = () => {
    user.setUser({ email: '' });
  };

  return (
    <div className='p-2'>
      <header className='p-2 bg-slate-300 flex gap-8 justify-center mb-5 rounded-md'>
        <NavLink
          to='/'
          end={true}
          className='hover:text-white active:text-white'
        >
          About
        </NavLink>
        <NavLink
          to='/notes'
          end={true}
          className='hover:text-white active:text-white'
        >
          Notes
        </NavLink>
        <button
          onClick={handleLogout}
          className='text-red-500 hover:text-white active:text-white'
        >
          Log out
        </button>
      </header>
      <footer className='fixed bottom-0 text-slate-300 bg-white'>
        <span>
          ________________________________________________________________________________________________________________________________________________
        </span>
        <div className='flex justify-between py-5 mt-auto '>
          <span>Created by: Anna-Sofia Ageenko</span>
          <span>BSU: 2022</span>
        </div>
      </footer>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
