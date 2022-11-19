/*
4. Страница заметок пользователя, в которой отображаются все заметки, сделанные пользователем. 
Порядок отображения: сначала более новые. 
По нажатию на саму заметку, мы переходим на страницу просмотра заметки 7. 
Есть кнопка “создать новую заметку, которая направляет нас на страницу создания заметки 5. 
А также у каждой заметки есть кнопка Редактировать (иконка), отправляет на страницу 6 и кнопка Удалить (иконка), которая предлагает нам удалить заметку пользователя.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { useUserContext } from '../components/userContext';
import { useNoteContext } from '../components/noteContext';
import { Link } from 'react-router-dom';

function Notes() {
  const noteContext = useNoteContext();
  const { user } = useUserContext();
  const [notes, setNotes] = useState('');

  //if (!notes || notes.length === 0) return <h4 className='text-center text-xs'> No notes </h4>;

  return (
    <div className='flex justify-center flex-col items-center gap-1'>
      <div className='text-xl pb-2'>Notes</div>
      <Link
        to='/notes/add'
        className='p-1 text-lg bg-blue-200 w-40 h-10 text-center'
      >
        Add new note
      </Link>
      <div className='flex gap-1 flex-row bg-zinc-100'>
        <Link to='/notes/edit'>
          <img
            src='edit.png'
            className='p-1 w-8 h-8'
          />
        </Link>
        <button onClick={() => {}}>
          <img
            src='delete.png'
            className='p-1 w-8 h-8'
          />
        </button>
      </div>
    </div>
  );
}

export default Notes;
