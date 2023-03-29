import React from "react";

export default function Alert(props) {
  return (
    <div id="msg">
      <div className="alert alert-success alert-dismissible " id="alertmsg">
        <strong>Success!</strong> {props.action}
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
      </div>
    </div>
  );
}
