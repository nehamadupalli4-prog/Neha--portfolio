import db from "../db.js";
import transporter from "../config/mail.js";

// Save Contact + Send Email
export const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save in database
    await db.query(
      "INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
      [name, email, message]
    );

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Contacts
export const getContacts = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM contacts ORDER BY id DESC"
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM contacts WHERE id = ?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};