require("dotenv").config();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: "*", // or your Vercel domain later
}));

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  requireTLS: true,
  tls: {
    rejectUnauthorized: false,
    family: 4
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Ready to Send ✅");
  }
});

router.post("/contact", async (req, res) => {
  try {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email, // IMPORTANT: allows you to reply to sender
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await contactEmail.sendMail(mail);

    res.status(200).json({
      code: 200,
      status: "Message Sent"
    });

  } catch (error) {
    console.log("Send error:", error);
    res.status(500).json({
      status: "Error sending message"
    });
  }
});
