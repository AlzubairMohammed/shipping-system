const router = require("express").Router();
const { protect } = require("../middleware/auth");
const { login, register } = require("../controllers/auth");

router.post("/register", protect, register);
router.post("/login", login);

module.exports = router;
