import mysql from 'mysql';

const connectDB = async () => {
  try {
    global.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'ankurk1',
      database: 'todo_list',
    });
    connection.connect();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
