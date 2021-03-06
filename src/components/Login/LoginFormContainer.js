import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/login/action";
import LoginForm from "./LoginForm";

class LoginFormContainer extends Component {
  state = { username: "", email: "", password: "" };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);

    this.setState({
      username: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { loggedInUser: state.loggedInUser };
}

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
