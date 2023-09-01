class DatabaseConnection {
  private static instance: DatabaseConnection;

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  connect(): void {
    console.log("connected to database");
  }

  disconnect(): void {
    console.log("disconnected from database");
  }
}

const connection1 = DatabaseConnection.getInstance();
connection1.connect();

const connection2 = DatabaseConnection.getInstance();
connection2.disconnect();

if (connection1 === connection2) {
  console.log("Same Instance");
}
