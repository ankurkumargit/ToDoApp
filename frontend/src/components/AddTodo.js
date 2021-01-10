import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/actions/todo_items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodo() {
  const bucketState = useSelector((state) => {
    return state.buckets;
  });
  const [state, setState] = useState({
    title: '',
    bucket_id: '',
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setState({ ...state, bucket_id: e.target.value });
  };

  var dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    var postPayload = {
      item: state.title,
      bucket_id: state.bucket_id,
    };
    dispatch(addItem(postPayload));
    setState({ ...state, title: '', bucket_id: '' });
    toast.success('To-Do Saved Successfully!');
  };

  const dropdownStyle = {
    width: '200px',
    marginRight: '5px',
  };

  const TodoStyle = {
    alignSelf: 'center',
    marginRight: '10px',
    fontSize: 'larger',
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', margin: '40px auto 20px', width: '70%' }}
    >
      <label htmlFor='title' style={TodoStyle}>
        Add To-Do
      </label>
      <input
        type='text'
        name='title'
        id='title'
        style={{ flex: '10', padding: '5px', marginRight: '5px' }}
        value={state.title}
        onChange={onChange}
        required={true}
      />
      <select
        required
        style={dropdownStyle}
        value={state.bucket_id}
        onChange={handleChange}
      >
        <option value=''>Select a Bucket</option>
        {bucketState.buckets.map((bucket) => (
          <option key={bucket.bucket_id} value={bucket.bucket_id}>
            {bucket.bucket_name}
          </option>
        ))}
      </select>
      <input
        type='submit'
        value='Submit'
        className='btn'
        style={{ flex: '1' }}
      />
      <ToastContainer autoClose={2000} />
    </form>
  );
}

export default AddTodo;
