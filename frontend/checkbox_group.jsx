import React from 'react';
import CheckBox from './checkbox'

export default class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      '01bbb998‑af3d‑47a4‑b0ff‑e67d033d80e9': false,
      '01021494‑f157‑4183‑964c‑6b0ddc964ab8': true,
      '97a2daa4‑406b‑4b1c‑831e‑bdfd90b224f2': false 
    }
  }

  handleSubmit(event) {
    alert('Form Submitted');
    event.preventDefault();
  }


  render() {
    const data = {
      '01bbb998‑af3d‑47a4‑b0ff‑e67d033d80e9' : 'Luz Ballard' ,
      '01021494‑f157‑4183‑964c‑6b0ddc964ab8' : 'Corey Johnson' ,
      '97a2daa4‑406b‑4b1c‑831e‑bdfd90b224f2' : 'Andrew Torres' 
      }

    const checkBoxes = Object.keys(data).map((id, idx) => {
      return <CheckBox checkBoxTitle={data[id]} key={idx} selected={this.state[id]} name={id}/>
    })
    return (
      <form onSubmit={this.handleSubmit}>
        {checkBoxes}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}