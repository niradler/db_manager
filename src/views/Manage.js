import React, {Component} from 'react';
import store from '../db';

class Manage extends Component {
  constructor(props) {
    super()
    this.state = {
        index:"",
        con:{},
        tables:[]
    }
  }

  componentWillMount() {
      const i = this.props.match.params.index;
   this.setState({index:i,con:store.getConnection(i)})
  }

  render() {

    return (
      <div className="Manage">

      <div className="tabs is-boxed">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small"><i className="fa fa-table"></i></span>
            <span>Tables</span>
          </a>
        </li>
        <li className="is-active">
        <a>
          <span className="icon is-small"><i className="fa fa-database"></i></span>
          <span>SQL</span>
        </a>
      </li>
      </ul>
    </div>
    <nav class="panel">
    <div class="panel-block">
    <aside class="menu">
    <p class="menu-label">
      {this.state.con.db_name}
    </p>
    <ul class="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
  </aside>
  </div>
</nav>
      </div>
    );
  }
}

export default Manage;


         