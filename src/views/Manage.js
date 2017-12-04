import React, {Component} from 'react';
import store from '../db';
import bridge from '../bridge';

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
      const con = store.getConnection(i);
      bridge.init(con);
      const tables = bridge.query('show tables;');
      if(tables){
        tables.then((res)=>{
          const t = res.data.result;
          this.setState({index:i,con,tables:t})
        })
      }
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
      {this.state.tables.map(t=>(<li>{t}</li>))}
    </ul>
  </aside>
  </div>
</nav>
      </div>
    );
  }
}

export default Manage;


         