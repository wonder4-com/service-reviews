import React from "react";
import ReviewList from './ReviewList.jsx'
import $ from 'jquery';
import SetRating from './SetRating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: Math.floor(Math.random() * 100) + 1,
      reviews: []
    }
  }
  
  componentDidMount() {
    // this.getReviews();
    this.getReviewsByRestaurant(this.state.restaurant);
  }

  // getReviews() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/reviews',
  //     success: (content) => {this.setState({reviews: content})},
  //     error: (err) => (console.log('error from get request: ', err))
  //   })
  // }

  getReviewsByRestaurant(id) {
    $.ajax({
      method: 'GET',
      url: `/api/restaurants/${id}/reviews`,
      success: (content) => {this.setState({reviews: content})},
      error: (err) => (console.log('error from get request: ', err))
    })
  }

  render() {
    return (
      <div>
        <h3>Recommended Reviews</h3>
        <SetRating />
        <ReviewList  reviews={this.state.reviews}/>
      </div>
    );
  }
};

export default App;