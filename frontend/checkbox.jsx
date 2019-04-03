import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
        <div>
          
          <label className={this.props.selected ? "selected" : ""}>
            {this.props.checkBoxTitle}
            
            <input
              name={this.props.name}
              type="checkbox"
              checked={this.props.selected}
              onChange={this.props.handleInputChange} />
          </label>
          <br />
        </div>
    );
  }
}