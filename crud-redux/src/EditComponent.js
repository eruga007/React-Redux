import React, { Component } from "react";
import { connect } from "react-redux";
class EditComponent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const editname = this.getName.value;
    const editmessage = this.getMessage.value;
    const data = {
      editname,
      editmessage
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.comment.id,
      data: data
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="ป้อนชื่อ"
            ref={input => (this.getName = input)}
            defaultValue={this.props.comment.name}
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            placeholder="ข้อความ"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.comment.message}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
