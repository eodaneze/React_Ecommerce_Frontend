import React from "react";
import { Alert} from "react-bootstrap";

const MessageBox = (props) => {
  return (
      <Alert varient={props.varient || 'danger'}>{props.children}</Alert>
  );
};

export default MessageBox;
