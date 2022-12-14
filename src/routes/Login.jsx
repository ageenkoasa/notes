/*
2. Login - страница входа в систему. 
2 поля: email, password. 
Только если на “сервере” есть такой созданный пользователь, мы сможем войти в систему, то есть перейти на страницу 3. 
Далее, в авторизованной части приложения мы можем нажать кнопку logout, которая позволяет выйти из нашего приложения и попасть на страницу Login 2.
*/

import { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../components/userContext';

function Login() {
  const userContext = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const [password, setPassword] = useState('');
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
        } else {
          alert('User data invalid! Try again or sign up');
        }
      });
  }, [email, navigate, password, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate('/');
    }
  }, [navigate, userContext.user]);

  return (
    <div className='p-2 flex flex-col items-center gap-1'>
      <div className='p-2 bg-slate-300 text-white flex gap-8 justify-center mb-5 rounded-md w-2/3'>
        Login
      </div>
      <input
        placeholder=' email'
        value={email}
        onChange={handleSetEmail}
      />
      <input
        placeholder=' password'
        type='password'
        value={password}
        onChange={handleSetPassword}
      />
      <button
        onClick={handleLogin}
        className='bg-blue-200 rounded-md w-20 h-10'
      >
        Log in
      </button>
      <Link
        to='/signup'
        className='text-red-500 hover:text-red-300 active:text-red-300'
      >
        Don't have an account? Sign up
      </Link>
    </div>
  );
}

export default Login;
