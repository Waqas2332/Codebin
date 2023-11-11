import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(
      "mongodb+srv://wmunir232:wmunir232@task-manager.sf6auvh.mongodb.net/"
    )
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((err) => console.log(err));
}
