require("dotenv").config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  try {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["dangthienbaominh@gmail.com"],
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Send error:", error);
    res.status(500).json({ success: false });
  }
});
