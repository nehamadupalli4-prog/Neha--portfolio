import express from "express";
import {
  saveContact,
  getContacts,
  deleteContact,
} from "../controllers/contactControllers.js";

const router = express.Router();

// Save Contact Form
router.post("/", saveContact);

// Get All Contacts
router.get("/", getContacts);

// Delete Contact
router.delete("/:id", deleteContact);

export default router;