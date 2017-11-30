import React, {Component} from 'react';
import './App.css';
import db from '../db';

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
      conArr: [],
      edit: -1
    }
  }

  componentWillMount() {
    db
      .getConnections()
      .then(r => {
        this.setState({
          conArr: [...r.rows]
        });
      })
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
                  <a className="navbar-item">
                    Connection
                  </a>
                </div>
                <div className="navbar-end"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="panel">
              <p className="panel-heading">
                Connections
              </p>
              <div className="panel-block">
                <div class="columns">

                  {this
                    .state
                    .conArr
                    .map((c, i) => (
                      <div class="column">
                        <div className="card">
                          <div className="card-content">
                            <div className="content">
                              {this.state.edit === i
                                ? <div>
                                    <div class="field">
                                      <label class="label">Title:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.title}/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">Vendor:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.vendor} disabled/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">Host:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.host}/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">Port:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.port}/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">DB Name:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.db_name}/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">User:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.user}/>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <label class="label">Password:</label>
                                      <div class="control">
                                        <input class="input" type="text" value={c.password}/>
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
                              this.setState({
                                edit: this.state.edit === i
                                  ? -1
                                  : i
                              })
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
        </section>

      </div>
    );
  }
}

export default App;
