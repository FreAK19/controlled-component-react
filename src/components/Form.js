import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Controlled component

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.hint}
          id="text"
          className="inputField"
          onChange={this.handleChange} />
        <RaisedButton label="Send" secondary={true}/>
        <div className="textContainer">
          <h1>{this.state.value}</h1>
        </div>
      </div>
    )
  }
};

export default Form;