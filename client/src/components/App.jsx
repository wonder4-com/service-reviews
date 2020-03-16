import React from "react";
import Form from './Form.jsx';
import ReviewList from './ReviewList.jsx'
import $ from 'jquery';


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
        <h3>Reviews</h3>
        <Form />
        <ReviewList  reviews={this.state.reviews}/>
      </div>
    );
  }
};

export default App;