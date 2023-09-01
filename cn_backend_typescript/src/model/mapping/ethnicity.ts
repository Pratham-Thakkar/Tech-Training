import { Schema, model } from "mongoose";
import { IEthnicity } from "../../interface/mapping/ethnicity";

const ethnicityEntitySchema = new Schema<IEthnicity>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  entityId: {
    type: String,
    required: true,
  },
  ethnicityId: {
    type: String,
    required: true,
  },
});

export default model<IEthnicity>("EthnicityEntity", ethnicityEntitySchema);
