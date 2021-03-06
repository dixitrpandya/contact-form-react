import React from "react";
import FormDetails from "./formDetails";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", address: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let address = this.state.address;
    if (!name || name.length < 3) {
      alert("Please enter name that is at least 3 characters long.");
      return;
    } else if (!email) {
      alert("Please enter email.");
      return;
    } else if (!address) {
      alert("Please enter address.");
      return;
    }
    this.setState({ showForm: true });
    this.setState({ showFormDetails: true });
  }

  handleBack(event) {
    event.preventDefault();
    this.setState({ showForm: false, showFormDetails: false });
  }

  render() {
    return (
      <div>
        {!this.state.showForm && (
          <>
            <h2>Contact</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.name}
                  name="name"
                  autoComplete="off"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </>
        )}

        {this.state.showFormDetails && (
          <>
            <FormDetails
              name={this.state.name}
              address={this.state.address}
              email={this.state.email}
              color="#4285f4"
            />
            <button type="submit" onClick={this.handleBack}>
              Edit Contact
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Form;
