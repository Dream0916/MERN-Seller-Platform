const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema(
  {
    _id: { 
      type: mongoose.Schema.ObjectId, 
      auto: true 
    },
    crypto: {
      type: String,
      trim: true,
    },
    paypal: {
      type: String,
      trim: true,
    },
    stripe: {
      type: String,
      trim: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Credit", creditSchema);
