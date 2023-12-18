import { Schema } from "mongoose";

// Document interface
interface User {
  name: string;
  email: string;
}
interface Destination {
  name: string;
  geometry: object;
  image: string;
}

// Schema
const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
const destinationSchema = new Schema<Destination>({
  name: { type: String, required: true },
  geometry: { type: Object, required: true },
  image: { type: String },
});
