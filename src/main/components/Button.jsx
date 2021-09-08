import React from "react";
import { Button as MaterialUIButton } from "@material-ui/core";

class Button extends React.Component {
  render() {
    return (
      <MaterialUIButton color="primary" onClick={this.props.onClick}>
        {this.props.children}
      </MaterialUIButton>
    );
  }
}

export default Button;
