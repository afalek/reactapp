import React from 'react';
import axios from 'axios';

class Loadapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {responseData:''};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/test')
      .then((response) => {
        this.setState({responseData: response.data.test});
      });
  }

  render() {
    return(
        <div>
          {this.state.responseData}
        </div>
    )
  }
}

export default Loadapp;
