var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
    }
    DatabaseConnection.getInstance = function () {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    };
    DatabaseConnection.prototype.connect = function () {
        console.log("connected to database");
    };
    DatabaseConnection.prototype.disconnect = function () {
        console.log("disconnected from database");
    };
    DatabaseConnection.instance = null;
    return DatabaseConnection;
}());
var connection1 = DatabaseConnection.getInstance();
connection1.connect();
var connection2 = DatabaseConnection.getInstance();
connection2.disconnect();
if (connection1 === connection2) {
    console.log("Same Instance");
}
