import { Schema, model } from "mongoose";
import { IGender } from "../../interface/lookup/gender";

const genderSchema = new Schema<IGender>({
  id: {
    type: String,
    unique: true,
  },
  genderType: {
    type: String,
    required: true,
  },
});

export default model<IGender>("Gender", genderSchema);
