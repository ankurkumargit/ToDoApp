import React, { useState } from 'react';
import { addBucket } from '../redux/actions/bucket';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBucket() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    bucket_name: '',
  });

  const onChange = (e) => {
    setState({ ...state, bucket_name: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    var postPayload = {
      bucket_name: state.bucket_name,
    };
    dispatch(addBucket(postPayload));
    setState({ ...state, bucket_name: '' });
    toast.success('Bucket Saved Successfully!');
  };

  return (
    <div>
      <form style={formStyle} onSubmit={formSubmit}>
        <h1>Add New Bucket</h1>
        <span>
          <label style={bucketStyle}>Bucket Name</label>
          <input
            type='text'
            required
            value={state.bucket_name}
            onChange={onChange}
            style={inputStyle}
          ></input>
        </span>
        <input type='submit' value='Submit' className='btn' />
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
}

const formStyle = {
  display: 'content',
  marginTop: '25px',
  textAlign: '-webkit-center',
};

const bucketStyle = {
  fontSize: 'large',
  verticalAlign: 'middle',
};

const inputStyle = {
  height: '30px',
  width: '200px',
  margin: '20px 10px 0px 10px',
  marginTop: '30px',
  padding: '5px',
};

export default AddBucket;
