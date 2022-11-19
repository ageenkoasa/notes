/*
1. Страница signup/register - регистрация. 
Есть 3 поля: email, password, repeat password. 
Ожидается, что, только введя правильные данные, мы сможем создать пользователя, иначе, покажем ошибки.
*/

import { useCallback, useState } from 'react';
//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useUserContext } from '../components/userContext';

function Signup() {
  //const userContext = useUserContext();
  const navigate = useNavigate();

  const NAMES = ['Anna', 'Sasha', 'Polina', 'Lena', 'Alex', 'Artyom', 'Sergey', 'Tanya', 'Sonya'];
  const getRandomValue = (value) => value[Math.floor(Math.random() * value.length)];
  const getRandomDate = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const [email, setEmail] = useState('');
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState('');
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSetConfirmPassword = useCallback((e) => setConfirmPassword(e.target.value), []);

  // useEffect(() => {
  //   if (password === confirmPassword) {
  //     navigate('/');
  //   }
  // }, [navigate, userContext.user]);

  const handleSignup = () => {
    const user = {
      id: Date.now().toString(),
      email: email,
      password: password,
      name: getRandomValue(NAMES),
      createdAt: `2022-${getRandomDate(1, 12).toString()}-${getRandomDate(
        1,
        31
      ).toString()}T0${getRandomDate(0, 23).toString()}:${getRandomDate(
        0,
        59
      ).toString()}:${getRandomDate(0, 59).toString()}.980Z`,
    };
    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        alert('you have account now !');
        navigate('/login');
      })
      .catch(() => {
        alert('error');
      });
  };

  return (
    <div className='p-2 flex flex-col items-center gap-1'>
      <div className='p-2 bg-slate-300 text-white flex gap-8 justify-center mb-5 rounded-md w-2/3'>
        Signup
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
      <input
        placeholder=' repeat password'
        type='password'
        value={confirmPassword}
        onChange={handleSetConfirmPassword}
      />
      <button
        onClick={handleSignup}
        className='bg-blue-200 rounded-md w-20 h-10'
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;
