const express = require('express')
const app = express();
const db = require('../database/models.js')
const bodyParser = require('body-parser');
const port = 3003


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/reviews', (req, res) => {
  console.log("handling the get request!", req.body)
  // console.log(db.getRecentReviews)
  db.getRecentReviews((err, reviews) => {
    if (err) {
      console.log('error calling db.getRecentReviews')
    } else {
      res.send(reviews);
    }
  })
  
});


app.get('/api/restaurants/:id/reviews', (req, res) => {
  console.log('handleing get request for reviews by restaurant', req.params)
  db.getReviewsByRestaurant(req.params.id, (err, reviews) => {
    if (err) {
      console.log('error calling db.getReviewsByRestaurant')
      res.status(501).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
