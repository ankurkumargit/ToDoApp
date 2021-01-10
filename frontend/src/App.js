import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { fetchItems } from './redux/actions/todo_items';
import { fetchBuckets } from './redux/actions/bucket';
import AddBucket from './components/AddBucket';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchBuckets());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <div className='container'>
          <Header />
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <AddTodo />
                <Todos />
              </React.Fragment>
            )}
          />
          <Route path='/addbucket' component={AddBucket} />
        </div>
      </div>
    </Router>
  );
}

export default App;
