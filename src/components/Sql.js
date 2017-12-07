import React, {Component} from 'react';
import store from '../store';
import bridge from '../bridge';

class Sql extends Component {
    constructor(props) {
        super()
        this.state = {
            index: "",
            con: {},
            result: "",
            query: ""
        }
        this.onChange = this
            .onChange
            .bind(this);
            this.runQuery = this
            .runQuery
            .bind(this);
    }

    componentWillMount() {
        const i = this.props.index;
        const con = store.getConnection(i);
        bridge.init(con);
    }
    runQuery() {
        const result = bridge.query(this.state.query);
        if(result){
            result.then((res)=>{
              const r = res.data.result;
              this.setState({result:r})
            })
          }
    }
    onChange(e) {
        this.setState({query: e.target.value})
    }
    buildFields(fields){
        const flist = [];
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                flist.push(fields[key]);
            }
        }
        return flist.map((f)=>(<td>{f}</td>));
         
    }
    buildFieldsHead(fields){
        const flist = [];
        if(typeof(fields)!=='object'){
            return;
        }
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                flist.push(key);
            }
        }
        return flist.map((f)=>(<th>{f}</th>));
         
    }
    buildTable(){
        return (
            <table className="table is-hoverable" >
            <thead>
              <tr>
                {this.buildFieldsHead(this.state.result[0])}
              </tr>
            </thead>
            <tbody>
              
              {this.state.result.map((c)=>(
                <tr key={c}>
                {typeof(c)==='object'?this.buildFields(c):c}
                
                </tr>
              ))}
              
            </tbody>
          </table>
        )
    }
    render() {

        return (
            <div className="Tables">

                <nav className="panel">
                    <p className="panel-heading">
                        Query
                    </p>
                    <div className="panel-block">

                        <textarea className="textarea" onChange={this.onChange}></textarea>

                    </div>
                    <div className="panel-block">

                        <div className="is-pulled-right">
                            <a className="button is-link " onClick={this.runQuery}>Run</a>
                        </div>

                    </div>
                </nav>
                <nav className="panel">
                <p className="panel-heading">
                    Result
                </p>
                <div className="panel-block overflowX">
             {(this.state.result && this.state.result.length > 0) ? this.buildTable():<p>no data</p>}
              </div>
              </nav>
            </div>
        );
    }
}

export default Sql;
