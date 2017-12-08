import React, {Component} from 'react';
import store from '../store';
import bridge from '../bridge';
import Tables from '../components/Tables';
import Compartion from '../components/Compartion';
/*
SHOW CREATE DATABASE ;
SHOW TABLES;
SHOW CREATE TABLE Bins;
SHOW COLUMNS FROM Bins;
SHOW INDEX FROM Bins;
SELECT t.TABLE_NAME,c.* FROM INFORMATION_SCHEMA.TABLES as t
join INFORMATION_SCHEMA.COLUMNS as c on c.TABLE_NAME=t.TABLE_NAME
where t.DATA_LENGTH!=0 and t.TABLE_SCHEMA ='shelfmintdev2'

*/

class Compare extends Component {
  constructor(props) {
    super()
    this.state = {
        conArr:[],
        pick:[],
        showCompare:false
    }
    this.runCompare=this.runCompare.bind(this);
  }
  componentWillMount(){
      this.getConnections();
  }
  getConnections(){
    const conArr = store.getConnections();
     this.setState({conArr:[...conArr]}) 
  }
  handlePick(i){
      if(this.state.pick >1){
        alert('maximum 2 db connections!')  
        return; 
      }
      let loc=this.state.pick.indexOf(i);
      let pickArr = this.state.pick;
      if(loc>-1){
        pickArr.splice(loc,1)
      }else{
        pickArr.push(i)
      }
      this.setState({pick:[...pickArr]})
  }
  runCompare(){
this.setState({showCompare:!this.state.showCompare})
  }
  render() {

    return (
      <div className="Compare">
      <nav className="panel">
      <p className="panel-heading">
      Connections
      </p>
      <div className="panel-block">
      {this
        .state
        .conArr
        .map((c, i) => (
            <div className="column" key={i}>
            <div  onClick={()=>this.handlePick(i)} className={this.state.pick.indexOf(i)>-1? 'card picked':'card'}>
              <div className="card-content">
                <div className="content">
      <div>
      <p>
      <i className="fa fa-database"></i> <strong> {c.title}</strong>
      </p>
      <p>{c.host}</p>
    </div>    
    </div> 
    </div> 
    </div> 
    </div>     
        ))
    }
      </div>
      <div className="panel-block">

          <div className="is-pulled-right">
              <button className="button is-link " type="button" disabled={this.state.pick.length!==2} onClick={this.runCompare} >Compare</button>
              {this.state.conArr.length<2 ?<span className="help">you need at least 2 db connections to compare db`s</span>:'' }
              
          </div>

      </div>
  </nav>
  <nav className="panel">
  <p className="panel-heading">
      Result
  </p>
  <div className="panel-block overflowX">
  {this.state.showCompare ?
  <div className="columns">
  <div className="column is-6">
  <Compartion index={this.state.pick}/>
  </div>
  {/* 
  <div className="column is-6">
    <Tables index={this.state.pick[0]}/>
  </div>
  <div className="column is-6">
  <Tables index={this.state.pick[1]}/>
  </div>
   */}
  </div>
  :<p>no data</p>}
</div>
</nav>
</div>
    );
  }
}

export default Compare;