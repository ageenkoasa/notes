/*
3. Страница About - информация о пользователе. 
Включает дату регистрации пользователя.
 */
import { useUserContext } from '../components/userContext';
import { Link } from 'react-router-dom';

function About() {
  const { user } = useUserContext();
  return (
    <div className='p-2 flex flex-col items-center gap-1'>
      <p>
        Hello, <strong>{user.name}</strong>!
      </p>
      <p className='text-xs'>Email: {user.email}</p>
      <p className='text-xs'>Registration date: {user.createdAt}</p>
      <Link
        to='/notes'
        className='p-1 text-lg bg-blue-200 w-40 h-10 text-center'
      >
        Go to notes
      </Link>
    </div>
  );
}

export default About;
