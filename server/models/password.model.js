import { Mongoose } from "mongoose";

const schema = new Mongoose.Schema({
  website: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const passwordModel = Mongoose.model("password", schema);
