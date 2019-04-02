import React from 'react';
import CheckBox from './checkbox'

export default class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Form Submitted');
    event.preventDefault();
  }


  render() {
    const data = {
      '01bbb998‑af3d‑47a4‑b0ff‑e67d033d80e9' : 'Luz Ballard' ,
      '01021494‑f157‑4183‑964c‑6b0ddc964ab8' : 'Corey Johnson' ,
      '97a2daa4‑406b‑4b1c‑831e‑bdfd90b224f2' : 'Andrew Torres' ,
      '6256ba85‑b59f‑40b9‑8715‑406cc54d7f05' : 'Nichole Wilson' ,
      '5c0c746c‑ec56‑4fb7‑8b32‑066b64d70611' : 'Nancy Hall' ,
      'c103b480‑8efb‑450f‑9141‑6a8037de2348' : 'Agnes Lorenzen' ,
      '4e0cc3dc‑fce9‑45d9‑85c7‑a3ae5cb0ce57' : 'Donald Hyde' ,
      'f80af139‑5c68‑4475‑8cb6‑ced7e38c6f43' : 'Dennis Fuller' ,
      '5073359e‑b228‑4852‑b1a3‑3f2edfc8672f' : 'Francis Hodgkins' ,
      '9c9a3cc8‑044e‑43d0‑87ff‑58a6b44eca53' : 'David McLain'
      }

    const checkBoxes = Object.values(data).map((title, idx) => {
      return <CheckBox checkBoxTitle={title} key={idx} selected={title === 'Agnes Lorenzen' || title === 'Nichole Wilson' || title === 'Andrew Torres'}/>
    })
    return (
      <form onSubmit={this.handleSubmit}>
        {checkBoxes}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}