const mysql = require('mysql');
const db = require('../database')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wonder4'
});


const getRecentReviews = (callback) => {
  let queryString = 'SELECT * FROM reviews ORDER BY date DESC LIMIT 15';
  connection.query(queryString, (err, results) => {
    if (err) {
      console.log('error getting recent reviews form database', err)
    } else {
      // console.log(results);
      callback(null, results);
    }
  })
} 

// const insertReview = () => {

// }


connection.connect((err) => {
  if (err) {
    console.log('error connecting mysql')
  } else {
    console.log('successfully connect to mysql')
  }
})

module.exports = { getRecentReviews }