import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  registerUser: async (req, res) => {
    try {
      const email = await User.findOne({ email: req.body.email });
      console.log(email);
      if (email) {
        return res.status(400).json({
          data: {},
          status: false,
          messages: "email da ton tai",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        username: req.body.name,
        email: req.body.email,
        password,
      });

      user.save();

      return res.status(200).json({
        data: {},
        status: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({
          data: {},
          status: false,
          messages: "sai email",
        });
      }

      const checkpassword = bcrypt.compare(req.body.password, user.password);
      if (!checkpassword) {
        return res.status(404).json({
          data: {},
          status: false,
          messages: "sai pass",
        });
      }

      const token = jwt.sign({ user }, "abc");

      return res.status(200).json({
        data: { token },
        status: true,
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  },
  me: (req, res) => {
    try {
      const user = jwt.verify(req.body.token, "abc");
      if (user) {
        return res.status(200).json({
          data: { user },
          status: true,
          messages: "success",
        });
      }
    } catch (error) {
      return res.status(500).json("can phai login");
    }
  },
};

export default authController;
