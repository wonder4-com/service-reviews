import React from "react";
// import Stars from './Stars.jsx';
import ReviewList from './ReviewList.jsx'
import $ from 'jquery';
import SetRating from './SetRating.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }
  
  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    $.ajax({
      method: 'GET',
      url: '/api/reviews',
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