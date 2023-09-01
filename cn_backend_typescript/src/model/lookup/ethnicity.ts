import { Schema, model } from "mongoose";
import { IEthnicity } from "../../interface/lookup/ethnicity";

const ethnicitySchema = new Schema<IEthnicity>({
  id: {
    type: String,
    unique: true,
  },
  ethnicityType: {
    type: String,
    required: true,
  },
});

export default model<IEthnicity>("Ethnicity", ethnicitySchema);
