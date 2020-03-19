import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleClick() {
    this.props.togglePop();
  }

  handleChange(e) {
    this.setState({comment: e.target.value});
  }

  handlePost() {
    console.log('calling handlePost from Form component')
    const faker = require('faker');
    let date = new Date();
    let review = {
      rating: this.props.rating,
      comment: this.state.comment,
      username: faker.internet.userName(),
      date: date.toLocaleDateString(),
      usercity: faker.fake('{{address.city}}, {{address.state}}'),
      restaurant_id: this.props.restaurant
    }
    this.props.handleNewReview(review);
    this.props.togglePop();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick.bind(this)}>&times;</span>
          <form>
            <textarea placeholder="Add some comments..." onChange={this.handleChange.bind(this)}></textarea>
            <br />
            <input className="post-button" type="button" value="Post Review" onClick={this.handlePost.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}
  
export default Form;