import React, {Component} from 'react';

import Tables from '../components/Tables';
import Sql from '../components/Sql';
class Manage extends Component {
  constructor(props) {
    super()
    this.state = {
        tab:'Tables',
        update:Math.random()
    }
  }
changeTab(tab){
this.setState({tab})
}
  render() {

    return (
      <div className="Manage">

      <div className="tabs is-boxed">
      <ul>
        <li className="is-active">
          <a onClick={()=>this.changeTab('Tables')}>
            <span className="icon is-small"><i className="fa fa-table"></i></span>
            <span>Tables</span>
          </a>
        </li>
        <li className="is-active">
        <a  onClick={()=>this.changeTab('SQL')}>
          <span className="icon is-small"><i className="fa fa-database"></i></span>
          <span>SQL</span>
        </a>
      </li>
      </ul>
    </div>
    {this.state.tab === 'Tables' ? <Tables index={this.props.match.params.index} /> : <Sql index={this.props.match.params.index}/>}
      </div>
    );
  }
}

export default Manage;


         