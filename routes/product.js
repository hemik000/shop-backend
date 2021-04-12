const express = require("express");
const router = express.Router();

const {
  getproductById,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
  photo,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { groupBy } = require("lodash");

//All Params
router.param("userId", getUserById);
router.param("productId", getproductById);

//All Routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//Read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//Delete routes
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

//Update routes
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//Listing routes
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);
module.exports = router;
