import React, {Component} from 'react';
import db from '../db';

// db.addConnections({vendor:'mysql', title:'dev1',
// host:'devdb-55gb.chfucjrlryhv.us-east-1.rds.amazonaws.com', port:'3306',
// db_name:'shelfmintdev2', user:'root', password:'z$Wuh!chBes3#a'}).then(r => {
//   console.log('add con',r)   db.getConnections().then(r => {
// console.log('con list',r)     const uid = r.rows[0].uid;
// db.delConnections(uid).then(r => { console.log('del ',uid)
// db.getConnections().then(r => { console.log('con list',r)       })  })   })
// })

class Con extends Component {
  constructor(props) {
    super()
    this.state = {
        conArr: [],
        edit: -1
    }
  }

  componentWillMount() {
    this.getConnections();
  }
handleEdit(i){
    const loc = i;
    const isEdit=this.state.edit === i? -1: i;
    this.setState({
        edit: isEdit
      })
      isEdit ==-1? this.handleUpdate(loc):null;
}
handleDelete(uid){
    
}
handleUpdate(i){
    const con = this.state.conArr[i];
    db.updateConnections({vendor:con.vendor, title:con.title,
host:con.host, port:con.port,
db_name:con.db_name, user:con.user, password:con.password}).then(r => {})
}
handleAdd(i){
    const con = this.state.conArr[i];
    db.addConnections({vendor:con.vendor, title:con.title,
host:con.host, port:con.port,
db_name:con.db_name, user:con.user, password:con.password}).then(r => {})
}
getConnections(){
    db
    .getConnections()
    .then(r => {
      this.setState({
        conArr: [...r.rows]
      });
    })
}
handleChange(e,i){
    const state= this.state;
    debugger;
     state.conArr[i][e.target.name]=e.target.value
this.setState(state)
}
  render() {

    return (
      <div className="App">

      <div className="panel">
      <p className="panel-heading">
        Connections
      </p>
      <div className="panel-block">
        <div className="columns">

          {this
            .state
            .conArr
            .map((c, i) => (
              <div className="column" key={i}>
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      {this.state.edit === i
                        ? <div>
                            <div className="field">
                              <label className="label">Title:</label>
                              <div className="control">
                                <input className="input" type="text" name="title" value={c.title} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Vendor:</label>
                              <div className="control">
                                <input className="input" type="text" name="vendor" value={c.vendor} disabled />
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Host:</label>
                              <div className="control">
                                <input className="input" type="text" name="host" value={c.host} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Port:</label>
                              <div className="control">
                                <input className="input" type="text" name="port" value={c.port} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">DB Name:</label>
                              <div className="control">
                                <input className="input" type="text" name="db_name" value={c.db_name} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">User:</label>
                              <div className="control">
                                <input className="input" type="text" name="user" value={c.user} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Password:</label>
                              <div className="control">
                                <input className="input" type="text" name="password" value={c.password} onChange={(e)=>this.handleChange(e,i)}/>
                              </div>
                            </div>
                          </div>
                        : <div>
                          <p>
                            <strong>{c.title}</strong>
                          </p>
                          <p>{c.host}</p>
                        </div>
}
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a
                      className="card-footer-item"
                      onClick={() => {
                      this.handleEdit(i)
                    }}>{this.state.edit === i
                        ? 'Save'
                        : 'Edit'}</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>

      </div>
    );
  }
}

export default Con;


         