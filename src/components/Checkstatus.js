import React from 'react';

class CheckStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="button" className="checkstatus-btn">check status</button>
      </div>
    );
  }
}

export default CheckStatus;
