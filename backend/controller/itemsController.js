import asyncHandler from 'express-async-handler';
import { v4 } from 'uuid';

// @desc    Gets all the Items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  connection.query(
    'SELECT * from todo_items i inner join bucket_list b on i.bucket_id = b.bucket_id',
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        res.status(200).json(results);
      }
    }
  );
};

// @desc    Adds an item
// @route   POST /api/items
// @access  Public
const addItem = async (req, res) => {
  var params = req.body;
  params.item_id = v4().toString();
  connection.query(
    'INSERT INTO todo_items SET ?',
    params,
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        connection.query(
          'SELECT * from todo_items i inner join bucket_list b on i.bucket_id = b.bucket_id',
          function (error, results, fields) {
            if (error) {
              return res.status(400).json({ error: true, message: error });
            } else {
              res.status(201).json(results);
            }
          }
        );
      }
    }
  );
};

// @desc    Updates an item
// @route   POST /api/items/update
// @access  Public
const updateItem = async (req, res) => {
  var params = req.body;
  connection.query(
    'UPDATE todo_items SET item = ?, completed = ?, bucket_id = ? WHERE item_id = ?',
    [params.item, params.completed, params.bucket_id, params.item_id],
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        connection.query(
          'SELECT * from todo_items i inner join bucket_list b on i.bucket_id = b.bucket_id',
          function (error, results, fields) {
            if (error) {
              return res.status(400).json({ error: true, message: error });
            } else {
              res.status(201).json(results);
            }
          }
        );
      }
    }
  );
};

// @desc    Deletes an item
// @route   POST /api/items/delete
// @access  Public
const deletItem = async (req, res) => {
  var id = req.body.data.id;
  connection.query(
    'DELETE FROM todo_items WHERE item_id = ?',
    id,
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        connection.query(
          'SELECT * from todo_items i inner join bucket_list b on i.bucket_id = b.bucket_id',
          function (error, results, fields) {
            if (error) {
              return res.status(400).json({ error: true, message: error });
            } else {
              res.status(201).json(results);
            }
          }
        );
      }
    }
  );
};

// @desc    Marks item completed and vice-versa
// @route   POST /api/items/markcomplete
// @access  Public
const markCompleteItem = async (req, res) => {
  var params = req.body;
  connection.query(
    'UPDATE todo_items SET completed = ? WHERE item_id = ?',
    [params.completed, params.item_id],
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        connection.query(
          'SELECT * from todo_items i inner join bucket_list b on i.bucket_id = b.bucket_id',
          function (error, results, fields) {
            if (error) {
              return res.status(400).json({ error: true, message: error });
            } else {
              res.status(201).json(results);
            }
          }
        );
      }
    }
  );
};

export { getItems, addItem, updateItem, deletItem, markCompleteItem };
