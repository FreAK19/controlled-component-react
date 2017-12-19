import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';

// Uncontrolled component

class FormUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const target = ReactDOM.findDOMNode(this.refs.formValue);
    const value = ReactDOM.findDOMNode(this.refs.formInput).firstElementChild.nextElementSibling.value;
    target.innerText = value;
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.hint}
          id="text"
          className="inputField"
          ref="formInput"
          onChange={this.handleChange}
        />
        <RaisedButton label="Send" primary={true}/>
        <div className="textContainer">
          <h1 defaultValue='' ref="formValue">{this.value}</h1>
        </div>
      </div>
    )
  }
}

export default FormUncontrolled;