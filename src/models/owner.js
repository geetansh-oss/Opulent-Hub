import { Schema, model, models } from 'mongoose';

const ownerSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exist!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  password:{
    type: String,
  },
  image: {
    type: String,
  }
});

const Owner = models.Owner || model("Owner", ownerSchema);

export default Owner;