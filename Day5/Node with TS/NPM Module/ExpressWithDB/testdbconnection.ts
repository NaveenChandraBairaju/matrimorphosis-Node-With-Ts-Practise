import pool from "./dbconnection";

const testDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✔ MySQL Database Connected Successfully!");
    connection.release();
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
  }
};

// Call function to test database connectivity
testDB();
