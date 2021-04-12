const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getToken, processPayment } = require("../controllers/payments");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);

router.post(
  "/payment/barintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);

module.exports = router;
