import React, {Component} from 'react';

class NewCon extends Component {
    constructor(props) {
        super()
        this.state = {
            con:{}
        }

    }
    handleChange(e,i){
        const state= this.state;
        state.con[e.target.name]=e.target.value
        this.setState(state)
    }
    handleAdd(){
this.props.handleAdd(this.state.con)
this.setState({con:{}})
    }
    render() {

        return (
            <div className="NewCon">
            <div className="panel">
            <p className="panel-heading">
              New Connection
            </p>
            <div className="panel-block">
              <div className="container">
              <div className="columns">
                                  <div className="field column">
                                    <label className="label">Title:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="title"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">Vendor:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="vendor" value="mysql" disabled />
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">Host:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="host"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">Port:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="port"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">DB Name:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="db_name"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">User:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="user"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                    <label className="label">Password:</label>
                                    <div className="control">
                                      <input className="input" type="text" name="password"  onChange={(e)=>this.handleChange(e)}/>
                                    </div>
                                  </div>
                                  <div className="field column">
                                  <label className="label">Action:</label>
                                    <div className="control">
                                      <button className="button" type="button" onClick={()=>{this.handleAdd();}}>Add</button>
                                    </div>
                                  </div>
                                </div>
              </div>
              </div>
              </div> 
            </div>
        );
    }
}

export default NewCon;
