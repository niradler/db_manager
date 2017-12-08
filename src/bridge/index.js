
import axios from 'axios';
class Bridge {
    constructor() {
        this.server_url = 'https://db-bridge.herokuapp.com/bridge';
        this.con = {};
        this.isCon = false;
    }
    init(con) {
        this.con = con;
        this.isCon = true;
    }
    query(q) {
        if (this.isCon) {
            return axios.post(this.server_url, {
                "con": {
                    "host": this.con.host,
                    "user": this.con.user,
                    "password": this.con.password,
                    "database": this.con.db_name
                },
                "query": q
            })
        }
        return null;
    }
    func(f) {
        if (this.isCon) {
            return axios.post(this.server_url, {
                "con": {
                    "host": this.con.host,
                    "user": this.con.user,
                    "password": this.con.password,
                    "database": this.con.db_name
                },
                "action": "func"
                ,func:f
            })
        }
        return null;
    }
    filter(f) {
        if (this.isCon) {
            return axios.post(this.server_url, {
                "con": {
                    "host": this.con.host,
                    "user": this.con.user,
                    "password": this.con.password,
                    "database": this.con.db_name
                },
                "action": "filter"
                ,filter:f
            })
        }
        return null;
    }

}
const bridge = new Bridge();
export default bridge;