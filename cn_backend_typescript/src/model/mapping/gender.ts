import { Schema, model } from "mongoose";
import { IGender } from "../../interface/mapping/gender";

const genderEntitySchema = new Schema<IGender>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  entityId: {
    type: String,
    required: true,
  },
  genderId: {
    type: String,
    required: true,
  },
});

export default model<IGender>("GenderEntity", genderEntitySchema);
