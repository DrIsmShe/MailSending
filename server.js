const express = require("express");
const nodemailer = require("nodemailer");
var cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  host: "mxslurp.click",
  port: 2525,
  secure: false,
  auth: {
    user: "1716bc91-285d-4b23-a448-c29b3a78325f@mailslurp.net",
    pass: "UTBXjEQ0Qy9GWo1IKSqLhNxzgOVMJoQV",
  },
});

app.post("/sendEmail", async (req, res) => {
  const { subject, text, to_value } = req.body;

  const mailOptions = {
    from: "1716bc91-285d-4b23-a448-c29b3a78325f@mailslurp.net",
    to: to_value,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.status(200).send("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
