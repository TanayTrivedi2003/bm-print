import mongoose from "mongoose";

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bmprints",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const OrderSchema = new mongoose.Schema({
  customer: Object,
  items: Array,
  totalAmount: Number,
  paymentMethod: String,
  paymentStatus: String,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      orderId: order._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
