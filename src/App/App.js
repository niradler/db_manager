import React, {Component} from 'react';
import './App.css';
import Con from '../views/Connection'
import Manage from '../views/Manage'
import { Switch, Route,Link } from 'react-router-dom'
// db.addConnections({vendor:'mysql', title:'dev1',
// host:'devdb-55gb.chfucjrlryhv.us-east-1.rds.amazonaws.com', port:'3306',
// db_name:'shelfmintdev2', user:'root', password:'z$Wuh!chBes3#a'}).then(r => {
//   console.log('add con',r)   db.getConnections().then(r => {
// console.log('con list',r)     const uid = r.rows[0].uid;
// db.delConnections(uid).then(r => { console.log('del ',uid)
// db.getConnections().then(r => { console.log('con list',r)       })  })   })
// })

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      menu: false,
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    }
  }



  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {

    return (
      <div className="App">
        <section className="section">
          <div className="">
            <div
              className="navbar is-info is-fixed-top"
              role="navigation"
              aria-label="main navigation">
              <div className="navbar-brand">
                <button
                  className="button navbar-burger"
                  onClick={this
                  .toggleMenu
                  .bind(this)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <div
                className={this.state.menu
                ? 'navbar-menu is-active'
                : 'navbar-menu'}>
                <div className="navbar-start">
                
                  <Link className="navbar-item" to="/connections/">Connections</Link>
                </div>
                <div className="navbar-end"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
          <Switch>
          <Route exact path='/' component={Con}/>
          <Route path='/manage/:index' component={Manage}/>
          <Route path='/connections' component={Con}/>
        </Switch>
   
          </div>
        </section>

      </div>
    );
  }
}

export default App;
