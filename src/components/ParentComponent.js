// src/components/ParentComponent
import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent;

//Controlled forms can very useful for specific purposes - since we can set our state elsewhere using this setup, its easy to populate forms from existing available data.

//When we have a controlled form, the state does not need to be stored in the same component.
//We could store state in a parent component, instead. To demonstrate this, we'll need to create a new component.
//To keep it simple, we'll call this ParentComponent.
//ParentComponent can maintain all the functions while Form just handles the display of JSX
