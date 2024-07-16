const mongoose = require("mongoose");
const colors = require("colors");
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to database ${mongoose.connection.host}`.bgCyan);
  } catch (error) {
    console.log("DB ERROR ", error);
  }
};

module.exports = dbConnect;
