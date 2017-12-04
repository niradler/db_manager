class ConStore {
    constructor() {
        this.conArr = [];
    }
    addConnections(con) {
        this.conArr.push(con)
        this.save();
    }
    updateConnections(con, i) {
        this.conArr[i] = con;
        this.save();
    }
    getConnections() {
        return this.conArr;
    }
    getConnection(i) {
        return this.conArr[i];
    }
    delConnections(i) {
        debugger;
        this.conArr.splice(i, 1);
        this.save();
    }
    save() {
        localStorage.setItem("connections", JSON.stringify(this.conArr));
    }
    restore() {
        this.conArr = JSON.parse(localStorage.getItem("connections"));
    }
}
const store = new ConStore();
export default store;