import mongoose from 'mongoose';


const userchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 50,
  },
  email: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 10,
  },
  admin: {
    type: Boolean,
    default: false,
    minlength: 10,
  },
}, {timestamps: true});

export default mongoose.model("User", userchema, 'users')
