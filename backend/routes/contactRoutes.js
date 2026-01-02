const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST - Add new contact with validation
router.post("/", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Required field validation
        if (!name || !email || !phone) {
            return res.status(400).json({
                error: "Name, email, and phone are required"
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Invalid email format"
            });
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                error: "Phone number must contain 10–15 digits only"
            });
        }

        // Duplicate email check
        const existingContact = await Contact.findOne({
            email: email.toLowerCase()
        });

        if (existingContact) {
            return res.status(409).json({
                error: "This email has already been used"
            });
        }

        // Save contact
        const contact = new Contact({
            name: name.trim(),
            email: email.toLowerCase(),
            phone,
            message
        });

        await contact.save();

        res.status(201).json({
            message: "Contact saved successfully",
            contact
        });

    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({
                error: "Email already exists"
            });
        }

        res.status(500).json({
            error: "Server error",
            details: err.message
        });
    }
});

// GET - Fetch contacts with sorting
router.get("/", async (req, res) => {
    try {
        const { sort } = req.query;

        let sortOption = { createdAt: -1 }; // latest first

        if (sort === "oldest") {
            sortOption = { createdAt: 1 };
        }

        const contacts = await Contact.find().sort(sortOption);
        res.json(contacts);

    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch contacts",
            details: err.message
        });
    }
});

// PUT - Update contact
router.put("/:id", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Required validation
        if (!name || !email || !phone) {
            return res.status(400).json({
                error: "Name, email, and phone are required"
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Invalid email format"
            });
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                error: "Phone number must contain 10–15 digits only"
            });
        }

        // Check email conflict with other contacts
        const existingContact = await Contact.findOne({
            email: email.toLowerCase(),
            _id: { $ne: req.params.id }
        });

        if (existingContact) {
            return res.status(409).json({
                error: "This email is already used by another contact"
            });
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            {
                name: name.trim(),
                email: email.toLowerCase(),
                phone,
                message
            },
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({
                error: "Contact not found"
            });
        }

        res.json({
            message: "Contact updated successfully",
            contact: updatedContact
        });

    } catch (err) {
        res.status(500).json({
            error: "Failed to update contact",
            details: err.message
        });
    }
});

// DELETE - Remove contact
router.delete("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                error: "Contact not found"
            });
        }

        await contact.deleteOne();
        res.json({
            message: "Contact deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;