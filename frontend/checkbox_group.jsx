import React from 'react';
import CheckBox from './checkbox'

export default class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      names: {
        '01bbb998‑af3d‑47a4‑b0ff‑e67d033d80e9' : 'Luz Ballard' ,
        '01021494‑f157‑4183‑964c‑6b0ddc964ab8' : 'Corey Johnson' ,
        '97a2daa4‑406b‑4b1c‑831e‑bdfd90b224f2' : 'Andrew Torres' 
      },
      selected: ['01bbb998‑af3d‑47a4‑b0ff‑e67d033d80e9','01021494‑f157‑4183‑964c‑6b0ddc964ab8']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    alert('Form Submitted');
    event.preventDefault();
  }

  handleInputChange(event) {
    if (this.state.selected.includes(event.target.name)){
      let array = [...this.state.selected]; 
      let index = array.indexOf(event.target.name)
      array.splice(index, 1);
      this.setState({selected: array});
    } else {
      this.setState({
        selected: [...this.state.selected, event.target.name]
      })
    }
  }

  render() {
    const checkBoxes = Object.keys(this.state.names).map((id, idx) => {
      return <CheckBox checkBoxTitle={this.state.names[id]} key={idx} selected={this.state.selected.includes(id)} name={id} handleInputChange={this.handleInputChange}/>
    })
    return (
      <form onSubmit={this.handleSubmit}>
        {checkBoxes}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}