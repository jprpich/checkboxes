import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false 
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      isSelected: event.target.checked
    });
  }

  render() {
    return (
        <div>
          <label>
            {this.props.checkBoxTitle}
            <input
              name="isSelected"
              type="checkbox"
              checked={this.state.isSelected}
              onChange={this.handleInputChange} />
          </label>
          <br />
        </div>
    );
  }
}