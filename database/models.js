const db = require('../database')


const getRecentReviews = (callback) => {
  //get most recent 15 reviews
  let queryString = 'SELECT * FROM reviews ORDER BY date DESC LIMIT 15';
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('error getting recent reviews form database', err)
    } else {
      // console.log(results);
      callback(null, results);
    }
  })
} 

const getReviewsByRestaurant = (id, callback) => {
  // get All the reviews by a resturant id
  let queryString = `SELECT * FROM reviews INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id WHERE reviews.restaurant_id = ${id} ORDER BY date DESC`
  db.query(queryString, (err, results) => {
    if (err) {
      console.log('error getting reviews by restaurant form database', err)
    } else {
      // console.log(results);
      callback(null, results);
    }
  });
}


// const insertReview = () => {

// }

module.exports = { getRecentReviews, getReviewsByRestaurant };
