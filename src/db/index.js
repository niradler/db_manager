class db_store {
    constructor(db_name = 'dbm', db_size = 5 * 1024 * 1024, debug_mode = true) {
        this.db_size = db_size;
        this.name = db_name
        this.init();
        this.debug_mode = debug_mode
    }
    query(q, args = []) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.db.transaction(function (tx) {
                tx.executeSql(q, [...args], (tx, results) => {
                    if (self.debug_mode) {
                        console.log('res',results)
                    }
                    resolve(results);
                }, (tx, err) => {
                    if (self.debug_mode) {
                        console.log('err',err)
                    }
                    reject(err);
                });
            });
        });
    }

    init() {
        var self = this;
        this.db = openDatabase(self.name, "1", "db app store", self.db_size);
        self.query(`CREATE TABLE IF NOT EXISTS 
     connection(uid VARCHAR(255) PRIMARY KEY,
       vendor VARCHAR(255),
       title VARCHAR(255),
       host VARCHAR(255),
       port VARCHAR(255),
       db_name VARCHAR(255),
       user VARCHAR(255),
       password VARCHAR(255),
      created_at DATETIME)`).then((res) => {
            if (self.debug_mode) {
                console.log(`table created`, res)
            }
        })
    }

    addConnections(con) {
        var self = this;
        if (self.debug_mode) {
            console.log(`addConnections got: `, con)
        }
        return self.query(`INSERT INTO connection (uid,vendor, title, host, port, db_name, user, password,created_at) 
        VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ?)`, [parseInt(Math.random() * 1024), con.vendor, con.title, con.host, con.port, con.db_name, con.user, con.password, new Date()]);
    }
    updateConnections(con) {
        var self = this;
        if (self.debug_mode) {
            console.log(`updateConnections got: `, con)
        }
        return self.query(`update connection SET vendor= '?', SET title='?', SET host='?', SET port='?', SET db_name='?',SET user= '?', SET password= '?'
         where uid = ?`, [ con.vendor, con.title, con.host, con.port, con.db_name, con.user, con.password,con.uid]);
    }
    getConnections() {
        var self = this;
        if (self.debug_mode) {
            console.log(`getConnections`)
        }
        return self.query(`SELECT * from connection`, []);
    }
    delConnections(uid) {
        var self = this;
        if (self.debug_mode) {
            console.log(`delConnections got: `, uid)
        }
        return self.query(`DELETE FROM connection WHERE uid = ?`, [uid]);
    }
}
const db_ins = new db_store();
export default db_ins;