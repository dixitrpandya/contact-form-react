import React from "react";

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="deliver-note">
        <h3>
          Dear{" "}
          <span style={{ color: this.props.color }}>{this.props.name}</span>
        </h3>
        <p>
          Our salesperson will reach your home{" "}
          <strong>{this.props.address}</strong> before the end of the day, and
          the invoice will be sent to <strong>{this.props.email}</strong>.
        </p>
        <h4>Thank you!</h4>
      </div>
    );
  }
}

export default FormDetails;
