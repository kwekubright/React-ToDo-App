/* eslint-disable */
import React from 'react';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { comState } = this.state;
    const { comProps } = this.props;
    e.preventDefault();
    if (comState.title.trim()) {
      comProps.addTodoProps(comState.title);
      this.setState({
        title: '',
      });
    } 
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  }
}
export default InputTodo;
