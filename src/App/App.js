import React, {Component} from 'react';
import './App.css';
import Con from '../views/Connection'
import Manage from '../views/Manage'
import Compare from '../views/Compare'
import { Switch, Route,Link, } from 'react-router-dom'
import store from '../store';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      menu: false,
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    }
  }


componentWillMount(){
  store.restore();
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
                
                  <Link className="navbar-item" to="/connections">Connections</Link>
                  <Link className="navbar-item" to="/compare">Compare</Link>
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
          <Route path='/compare' component={Compare}/>
        </Switch>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
