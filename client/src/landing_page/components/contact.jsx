import React, { Component } from "react";

import baseAxios from "../../config/axios";

//form page in contact page
class contact extends Component {
  constructor(props) {
    super(props);
    this.state = { Email: "", Subject: "", Message: "" };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //get value from the form and set it in state
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }
  onChangeSubject(e) {
    this.setState({
      Subject: e.target.value,
    });
  }
  onChangeMessage(e) {
    this.setState({
      Message: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      Email: this.state.Email,
      Subject: this.state.Subject,
      Message: this.state.Message,
    };

    baseAxios
      .post("Contact/add", obj)
      .then((res) => console.log(res.data));

    this.setState({
      Email: "",
      Subject: "",
      Message: "",
    });
  }
  render() {
    return (
      <header
        id="contact"
        style={{
          background: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact.jpg') no-repeat center center/cover`,
        }}
      >
        <div id="contact-content">
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="E-mail"
                name="Email"
                type="email"
                value={this.state.Email}
                onChange={this.onChangeEmail}
              />
              <input
                placeholder="Subject"
                name="Subject"
                type="text"
                value={this.state.Subject}
                onChange={this.onChangeSubject}
              />
              <textarea
                placeholder="Message"
                name="Message"
                type="text"
                value={this.state.Message}
                onChange={this.onChangeMessage}
              />
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default contact;
