import React, {Component} from 'react';
import store from '../db';

class Manage extends Component {
  constructor(props) {
    super()
    this.state = {
        index:"",
        con:{}
    }
  }

  componentWillMount() {
      const i = this.props.match.params.index;
   this.setState({index:i,con:store.getConnection(i)})
  }

  render() {

    return (
      <div className="Manage">

{this.state.index}
      </div>
    );
  }
}

export default Manage;


         