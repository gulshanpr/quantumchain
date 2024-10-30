import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    hybrid: {
      type: Boolean,
      required: true,
    },
    jobFunction: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
