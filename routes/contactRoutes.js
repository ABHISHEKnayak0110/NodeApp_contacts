const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();
router.use(validateToken)
router.route(`/`).get(getContacts);
router.route(`/:id`).get(getContact);
router.route(`/`).post(createContact);
router.route(`/:id`).put(updateContact);
router.route(`/:id`).delete(deleteContact);
module.exports = router;
