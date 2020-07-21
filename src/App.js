import React, { Component } from "react";
import "./App.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StartDate: null,
      EndDate: null,
      Reason: null,
      LeaveType: null,
      formErrors: {
        StartDate: "",
        EndDate: "",
        Reason: "",
        LeaveType: ""
      }
    };
  }

  handleSubmit = e => {
    if (formValid(this.state)) {
      alert(`Leave Apply Successfull !!!!`);
      console.log(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert(`Please fill all the fields properly`);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "StartDate":
        formErrors.StartDate =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "EndDate":
        formErrors.EndDate =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Reason":
        formErrors.Reason =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "LeaveType":
        formErrors.LeaveType =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Apply for Leaves</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="StartDate">
              <label htmlFor="StartDate">Start Date</label>
              <input
                className={formErrors.StartDate.length > 0 ? "error" : null}
                placeholder=""
                type="date"
                name="StartDate"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.StartDate.length > 0 && (
                <span className="errorMessage">{formErrors.StartDate}</span>
              )}
            </div>
            <div className="EndDate">
              <label htmlFor="">End Date</label>
              <input
                className={formErrors.EndDate.length > 0 ? "error" : null}
                placeholder=""
                type="date"
                name="EndDate"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.EndDate.length > 0 && (
                <span className="errorMessage">{formErrors.EndDate}</span>
              )}
            </div>
            <div className="Reason">
              <label htmlFor="">Reason</label>
              <input
                className={formErrors.Reason.length > 0 ? "error" : null}
                placeholder="Reason"
                type="text"
                name="Reason"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Reason.length > 0 && (
                <span className="errorMessage">{formErrors.Reason}</span>
              )}
            </div>
            <div className="LeaveType">
              <label htmlFor="">Leave Type</label>
              <input
                className={formErrors.LeaveType.length > 0 ? "error" : null}
                placeholder="Leave Type"
                type="text"
                name="LeaveType"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.LeaveType.length > 0 && (
                <span className="errorMessage">{formErrors.LeaveType}</span>
              )}
            </div>
            <div className="Apply">
              <button type="submit">Apply</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
