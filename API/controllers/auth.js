"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleware/async");
const { User } = require("../models");
const ErrorResponse = require("../utils/errorResponse");
require("dotenv").config();

// @desc    Logging user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  // return res.send(req.body);
  const { email, password } = req.body;
  // Validate email and password
  if (!email) return next(new ErrorResponse("please enter your email", 400));
  if (!password)
    return next(new ErrorResponse("please enter your password", 400));
  // Check for user
  const user = await User.findOne({ where: { email } });
  if (!user) return next(new ErrorResponse("user not found", 404));
  // Match pssword
  if (await bcrypt.compare(password, user.password)) {
    // Create token
    sendTokenResponse(user, 200, res);
  } else {
    return next(new ErrorResponse("password incorrect", 404));
  }
});

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) return next(new ErrorResponse("please add an email", 400));
    if (!password) return next(new ErrorResponse("please add a password", 400));
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    if (user) return res.status(200).json({ success: true });
  } catch (err) {
    next(new ErrorResponse(err, 500));
  }
});

// Get token from model, create cookie and send response

const sendTokenResponse = async (user, statusCode, res) => {
  jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
    const options = {
      httpOnly: true,
    };

    if (process.env.NODE_ENC === "production") {
      options.secure = true;
    }
    if (!err)
      return res
        .status(statusCode)
        .cookie("token", token, options)
        .json({ token, success: true });
  });
};
