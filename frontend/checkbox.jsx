import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
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
          <label className={this.props.selected ? "selected" : ""}>
            {this.props.checkBoxTitle}
            
            <input
              name={this.props.id}
              type="checkbox"
              checked={this.props.selected}
              onChange={this.handleInputChange} />
          </label>
          <br />
        </div>
    );
  }
}