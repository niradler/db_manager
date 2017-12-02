import webSqlApi from './webSqlApi';
import pouchdbApi from './pouchdbApi';
class ConStore {
    constructor() {
        this.conArr = [];
    }
    addConnections(con) {
        this.conArr.push(con)
    }
    updateConnections(con,i) {
        this.conArr[i] = con;
    }
    getConnections() {
return this. conArr;
    }
    delConnections(uid) {

    }
}
const store = new ConStore();
export default store;