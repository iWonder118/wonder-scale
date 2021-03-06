import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const server = 'http://localhost:8000/hello';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      result: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    axios.get(server)
    .then((res) => {
      this.setState({
        status: true,
        result: res.data
      });
      console.log(this.state);
    })
    .catch((e) => {
      console.error(e);
      this.setState({
        status: false,
        result: e,
      });
    });
  }

  
  render() {
    const result = (this.state.status) ? (<div>{this.state.result.message}</div>) : (<div>Not Yet</div>);
    return (
      <div>
        <button onClick={this.handleClick}> Get Data</button>
        {result}
        <Link to='/goodbye'>Goodbye</Link>
      </div>
    );
  }
}

export default App;