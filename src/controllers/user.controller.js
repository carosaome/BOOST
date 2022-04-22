const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class UserController {

  async login(req, res, next) {
    try {
      console.log(req.body);
      const { username, password } = req.body;

      const existedUser = await UserModel.findOne({
        username,
      });

      if (!existedUser) {
        throw new Error('Username hoặc password không đúng');
      }

      const matchedPassword = await bcrypt.compare(password, existedUser.password);

      if (!matchedPassword) {
        throw new Error('Username hoặc password không đúng');
      }

      const userId = existedUser._id;

      const token = jwt.sign({
        userId,
      }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7
      })

      res.send({
        success: 1,
        data: { _id: userId, token }
      });

    } catch (err) {
      // res.status(400).send({ success: 0, message: err.message })
      next(err)

    }

  }
  async register(req, res, next) {
    try {
      console.log(req.body);
      const { username, password } = req.body;

      const existedUser = await UserModel.findOne({ username });

      if (existedUser) {
        throw new Error('Username duplicate');
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = await UserModel.create({
        username,
        password: hashPassword
      });

      res.send({
        success: 1,
      });

    } catch (err) {
      // res.status(400).send({ success: 0, message: err.message })
      next(err)

    }
  }
}

module.exports = new UserController