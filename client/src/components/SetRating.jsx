import React from "react";
import Star from "./Star.jsx";
import Form from "./Form.jsx";


class SetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
      showForm: false
    };
  }

  togglePop() {
    this.setState({showForm: !this.state.showForm});
  }

  handleRating(value) {
    this.setState({rating: value});
  }

  handleHoverRating(value) {
    this.setState({hoverRating: value});
  }

  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let styleClass = "star-rating-blank";
      if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 1 || this.state.hoverRating === 1)) {
        styleClass = "star-rating-1"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 2 || this.state.hoverRating === 2)) {
        styleClass = "star-rating-2"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 3 || this.state.hoverRating === 3)) {
        styleClass = "star-rating-3"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 4 || this.state.hoverRating === 4)) {
        styleClass = "star-rating-4"
      } else if ((this.state.rating > i || this.state.hoverRating > i ) && (this.state.rating === 5 || this.state.hoverRating === 5)) {
        styleClass = "star-rating-5"
      } 
      stars.push(
        <Star 
          key={i}
          styleClass={styleClass} 
          onClick={() => {
            this.handleRating(i + 1);
            this.togglePop();
          }} 
          onMouseEnter={() => {this.handleHoverRating(i + 1)}}
          onMouseLeave={() => {this.handleHoverRating(0)}}
        />
      )
    }

    return (
      <div className="input column">
        <div className="column user">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/public/empty_profile.yelp-react-component-review.yji-1f2e356daa5c4d3f196e4da56d029152.png"/>
        </div>
        <ul className="column input-box list">
          {stars}
        </ul>
        {this.state.showForm ? <Form togglePop={this.togglePop.bind(this)}/> : <div></div>}
      </div>
    )
  }
}


export default SetRating;