const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mycluster.pmxay.mongodb.net/portfolio?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error);
  }
}

connect();

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb is up and running");
});
