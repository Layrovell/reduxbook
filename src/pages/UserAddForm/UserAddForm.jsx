import React, {useState} from 'react';
import './UserAddForm.scss';
import {useDispatch} from "react-redux";
import {createUser} from "../../store/actions";
import {Link} from "react-router-dom";

export const UserAddForm = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && number !== '') {
      dispatch(createUser(name, number));
    }
    props.history.goBack();
  }

  return (
    <form
      className="form__add"
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='name'
      />
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder='number'
      />
      <div className="buttons">
        <button className='btn' type='submit'>save</button>
        <Link to={`/book/`} className='btn'>back</Link>
      </div>
    </form>
  );
};
