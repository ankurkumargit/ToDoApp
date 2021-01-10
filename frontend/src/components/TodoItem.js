import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItem,
  markItemComplete,
  updateItem,
} from '../redux/actions/todo_items';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-awesome-modal';
import 'react-toastify/dist/ReactToastify.css';

export const TodoItem = (props) => {
  const getStyle = () => {
    return {
      textDecoration: props.todo.completed ? 'line-through' : 'none',
      verticalAlign: 'middle',
    };
  };

  const bucketState = useSelector((state) => {
    return state.buckets;
  });

  const itemsState = useSelector((state) => {
    return state.todos;
  });

  const [state, setState] = useState({
    item: '',
    bucket_id: '',
    item_id: '',
    completed: 0,
    visible: false,
  });

  const getCbStyle = () => {
    return {
      width: '15px',
      height: '15px',
      verticalAlign: 'middle',
      background: props.todo.completed ? 'green' : 'white',
    };
  };

  const dispatch = useDispatch();
  const onDeleteItem = () => {
    var deleteData = {
      id: item_id,
    };
    dispatch(deleteItem(deleteData));
  };

  const onMarkComplete = (e) => {
    var markCompleteData = {
      item_id,
      completed: e.target.checked ? 1 : 0,
    };
    dispatch(markItemComplete(markCompleteData));
  };

  const openModal = (item, e) => {
    var _item = itemsState.items.filter((x) => x.item_id === item);
    setState({
      ...state,
      item: _item[0].item,
      item_id: _item[0].item_id,
      bucket_id: _item[0].bucket_id,
      completed: _item[0].completed,
      visible: true,
    });
  };

  const updateTodo = () => {
    var updatePayload = {
      item_id: state.item_id,
      item: state.item,
      bucket_id: state.bucket_id,
      completed: state.completed,
    };
    dispatch(updateItem(updatePayload));
    setState({ ...state, visible: false });
    toast.success('Item Updated Successfully!');
  };

  const closeModal = () => {
    setState({ ...state, visible: false });
  };

  const onChange = (e) => {
    setState({
      ...state,
      item: e.target.value,
    });
  };

  const formSubmit = (e) => {
    setState({
      ...state,
      bucket_id: e.target.value,
    });
  };

  const { item_id, item, completed, bucket_name } = props.todo;
  return (
    <div style={divStyle}>
      <input
        type='checkbox'
        style={getCbStyle()}
        onChange={onMarkComplete}
        checked={completed === 0 ? false : true}
      />
      &nbsp;
      <span style={contentStyle}>
        <label style={getStyle()}>{item}</label>
        <label tooltip='Bucket' style={bucketStyle}>
          {bucket_name}
        </label>
      </span>
      <button style={btnStyle2} tooltip='Delete' onClick={onDeleteItem}>
        <MdDelete />
      </button>
      <button
        style={btnStyle}
        tooltip='Edit'
        onClick={openModal.bind(this, item_id)}
      >
        <MdEdit />
      </button>
      <ToastContainer autoClose={2000} />
      <Modal
        visible={state.visible}
        width='800'
        height='150'
        effect='fadeInUp'
        onClickAway={() => closeModal()}
      >
        <div className='header'>Edit To-Do Item</div>
        <div className='content'>
          <div>
            <form style={formStyle} onSubmit={formSubmit}>
              <span>
                <label style={labelStyle}>Item</label>
                <input
                  type='text'
                  required
                  value={state.item}
                  onChange={onChange}
                  style={inputStyle}
                ></input>
              </span>
              <span>
                <label style={labelStyle}>Bucket Name</label>
                <select
                  required
                  style={inputStyle}
                  value={state.bucket_id}
                  onChange={formSubmit}
                >
                  <option value=''>Select a Bucket</option>
                  {bucketState.buckets.map((bucket) => (
                    <option key={bucket.bucket_id} value={bucket.bucket_id}>
                      {bucket.bucket_name}
                    </option>
                  ))}
                </select>
              </span>
            </form>
          </div>

          <button className='btn popupBtn' onClick={updateTodo}>
            Save
          </button>
          <button className='btn popupBtn' onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

const labelStyle = {
  marginLeft: '30px',
};

const formStyle = {
  display: 'content',
  marginTop: '5px',
  textAlign: '-webkit-center',
};

const inputStyle = {
  height: '30px',
  width: '200px',
  marginLeft: '10px',
  marginTop: '5px',
  marginBottom: '15px',
};

const contentStyle = {
  width: '80%',
  display: 'inline-block',
  marginLeft: '10px',
};

const bucketStyle = {
  float: 'right',
};

const btnStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  float: 'right',
  fontSize: 'x-large',
  marginLeft: '4px',
};

const btnStyle2 = {
  background: 'transparent',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  float: 'right',
  fontSize: 'x-large',
  marginRight: '20px',
  marginLeft: '4px',
};

const divStyle = {
  textDecoration: 'none',
  background:
    'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  padding: '15px',
  borderBottom: '1px #ccc dotted',
  borderRadius: '50px',
  margin: '10px auto',
  width: '70%',
};
