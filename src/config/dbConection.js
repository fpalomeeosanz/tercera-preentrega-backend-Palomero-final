import mongoose from "mongoose";
import { options } from "./config.js";


export const dbConection = async()=>{
try {
  await mongoose.connect(options.mongo.url)
  console.log("En la BDD:",options.mongo.url);
} catch (error) {
    console.log(`Hubo un error conectandose a la base ${error}`);
}
};
