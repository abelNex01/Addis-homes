const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/addishomes")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("users", EmployeeSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Property Schema and Model
const PropertySchema = mongoose.Schema({
  location: String,
  type: String,
  bedrooms: Number,
  bathrooms: Number,
  price: String,
  disc: String,
  image: String,
  payments: [
    {
      cardNumber: String,
      amount: String,
      location: String,
      expiryDate: String,
      cvv: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const PropertyModel = mongoose.model("Property", PropertySchema);

// Fetch all properties
app.get("/api/properties", async (req, res) => {
  try {
    const properties = await PropertyModel.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new property
app.post("/api/properties", async (req, res) => {
  try {
    const newProperty = new PropertyModel(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Registered card numbers and CVVs
const authorizedCards = [
  { number: "4111111111111111", cvv: "123" },
  { number: "5500000000000004", cvv: "456" },
  { number: "340000000000009", cvv: "7890" },
  { number: "6011000000000004", cvv: "234" },
  { number: "3530111302000000", cvv: "567" },
  { number: "4000000000009995", cvv: "321" },
];

// Payment logic
app.post("/api/payments", async (req, res) => {
  try {
    const { cardNumber, amount, propertyId, location, expiryDate, cvv } =
      req.body;

    // Validate the card number and CVV
    const card = authorizedCards.find(
      (c) => c.number === cardNumber && c.cvv === cvv
    );
    if (!card) {
      return res.status(400).json({ error: "Invalid card number or CVV." });
    }

    // Validate expiry date
    if (!expiryDate) {
      return res.status(400).json({ error: "Invalid card expiry date." });
    }

    // Ensure the amount is a valid positive number
    if (parseFloat(amount) <= 0) {
      return res.status(400).json({ error: "Invalid payment amount." });
    }

    // Update the property document to include payment information
    await PropertyModel.updateOne(
      { _id: propertyId },
      {
        $push: {
          payments: {
            cardNumber,
            amount,
            location,
            expiryDate,
            cvv,
            date: new Date(),
          },
        },
      }
    );

    // Respond with success
    res.status(201).json({ message: "Payment recorded successfully." });
  } catch (err) {
    console.error("Payment processing error:", err);
    res
      .status(500)
      .json({ error: "Payment processing failed. Please try again later." });
  }
});

// Start the server
const PORT = process.env.PORT || 30001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
