import React, { Component } from 'react';

const Alert = ({alertState, alertMessage}) => {
  return (
    <div>
      { alertState ? <div className="col">
          <div className={"alert shadow alert-"+alertState} role="alert">
            {alertMessage}
          </div>
        </div>
        : 
        <></>
      }
    </div>
  );
}

export default Alert;