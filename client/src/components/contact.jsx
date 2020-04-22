import React, { Component } from "react";


//form page in contact page
class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChanged = this.handleChanged.bind(this);
  }
  //get value from the form and set it in state
  handleChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <header
        id="contact"
        style={{
          background: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/contact.jpg") no-repeat center center/cover`,
        }}
      >
        <div id="contact-content">
          <div className="container">
            <form>
              <input
                placeholder="E-mail"
                name="email"
                type="email"
                value={this.state.Email}
                onChange={this.handleChange}
              />
              <input
                placeholder="Subject"
                name="subject"
                type="text"
                value={this.state.Subject}
                onChange={this.handleChange}
              />
              <textarea
                placeholder="Message"
                name="message"
                type="text"
                value={this.state.Message}
                onChange={this.handleChange}
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
