const connectDB = require('./db');

async function startApp() {
  try {
    const db = await connectDB();
    if (db) {
      console.log("🚀 Database connection is ready!");
      // You can now perform database operations here
    }
  } catch (error) {
    console.error("❌ Error starting the app:", error.message);
    process.exit(1); // Exit the app if the database connection fails
  }
}

startApp();

