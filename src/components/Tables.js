import React, {Component} from 'react';
import store from '../store';
import bridge from '../bridge';

class Tables extends Component {
  constructor(props) {
    super()
    this.state = {
        index:"",
        con:{},
        tables:[],
        describe:[],
        cdescribe:'',
        update:Math.random()
    }
  }

  componentWillMount() {
      const i = this.props.index;
      const con = store.getConnection(i);
      bridge.init(con);
      const tables = bridge.func({name:"getTables",params:[]});
      if(tables){
        tables.then((res)=>{
          const t = res.data.result;
          this.setState({index:i,con,tables:t})
        })
      }
  }
  showDescribe(table){
      if(this.state.cdescribe === table){
        this.setState({update:Math.random(),cdescribe:''}) 
        return;
      }
    const cols = bridge.query('describe ' + table);
    if(cols){
      cols.then((res)=>{
        const c = res.data.result || [];
        this.setState({describe:c,update:Math.random(),cdescribe:table})
      })
    }
  }
  render() {

    return (
      <div className="Tables">

    <nav className="panel">
    <div className="panel-block">
    <aside className="menu">
    <p className="menu-label">
      {this.state.con.db_name}
    </p>
    <ul className="menu-list">
      {this.state.tables.map(t=>(<li key={t} className={this.state.cdescribe===t?'is-active':''} onClick={()=>{this.showDescribe(t)}}>
      <a>{t}</a>
      <ul>
      {this.state.cdescribe===t?this.state.describe.map(c=>(<li key={c.Field}><a><strong>{c.Field}</strong> {c.Type}</a></li>)):''}
      </ul>
      </li>))}
      
    </ul>
  </aside>
  </div>
</nav>
      </div>
    );
  }
}

export default Tables;
