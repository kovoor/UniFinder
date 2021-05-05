import mongoose from "mongoose";
import slug from "slug";

const UniSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    roomCharge: {
      type: Number,
    },
    boardCharge: {
      type: Number,
    },
    tuition: {
      type: Number,
      required: [true, "Uni tuition required"],
    },
    fees: {
      type: Number,
    },
    bookSupplies: {
      type: Number,
    },
    onCampusCost: {
      type: Number,
    },
    offCampusCost: {
      type: Number,
    },
    acceptRate: {
      type: Number,
    },
    totalStudents: {
      type: Number,
    },
    website: {
      type: String,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { validateBeforeSave: true }
);

UniSchema.pre("save", function (next) {
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.models.Uni || mongoose.model("Uni", UniSchema);
