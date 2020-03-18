import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.togglePop();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick.bind(this)}>&times;</span>
          <form>
            <textarea placeholder="Add some comments..."></textarea>
            <br />
            <input className="post-button" type="submit" value="Post Review"/>
          </form>
        </div>
      </div>
    )
  }
}
  
export default Form;