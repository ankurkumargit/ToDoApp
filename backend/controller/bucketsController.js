import asyncHandler from 'express-async-handler';
import { v4 } from 'uuid';

// @desc    Gets all the buckets
// @route   GET /api/buckets
// @access  Public
const getBuckets = async (req, res) => {
  connection.query(
    'SELECT * from bucket_list',
    function (error, results, fields) {
      if (error) {
        return res.status(404).json({ error: true, message: error });
      } else {
        res.status(200).json(results);
      }
    }
  );
};

// @desc    Add a bucket
// @route   POST /api/buckets
// @access  Public
const addBucket = async (req, res) => {
  var params = req.body;
  params.bucket_id = v4().toString();
  connection.query(
    'INSERT INTO bucket_list SET ?',
    params,
    function (error, results, fields) {
      if (error) {
        res.status(404);
        throw new Error(error);
      } else {
        connection.query(
          'SELECT * from bucket_list',
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

// @desc    Updates the bucket
// @route   POST /api/buckets/update
// @access  Public
const updateBucket = async (req, res) => {
  var params = req.body;
  connection.query(
    'UPDATE bucket_list SET bucket_name = ? WHERE bucket_id = ?',
    [params.bucket_name, params.bucket_id],
    function (error, results, fields) {
      if (error) {
        return res
          .status(400)
          .send(JSON.stringify({ error: true, message: error }));
      } else {
        connection.query(
          'SELECT * from bucket_list',
          function (error, results, fields) {
            if (error) {
              return res
                .status(400)
                .send(JSON.stringify({ error: true, message: error }));
            } else {
              res.status(201).send(JSON.stringify(results));
            }
          }
        );
      }
    }
  );
};

// @desc    Deletes the bucket
// @route   POST /api/buckets/delete/:id
// @access  Public
const deleteBucket = async (req, res) => {
  var params = req.params.id;
  if (!params) {
    return res
      .status(400)
      .json({ error: true, message: 'Parameter not found' });
  }
  connection.query(
    'DELETE FROM bucket_list WHERE bucket_id = ?',
    params,
    function (error, results, fields) {
      if (error) {
        return res.status(400).json({ error: true, message: error });
      } else {
        connection.query(
          'SELECT * from bucket_list',
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

export { getBuckets, addBucket, updateBucket, deleteBucket };
