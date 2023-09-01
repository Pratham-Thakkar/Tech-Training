import { Schema, model } from "mongoose";
import { IRoleType } from "../../interface/lookup/roleType";

const roleTypeSchema = new Schema<IRoleType>({
  id: {
    type: String,
    unique: true,
  },
  roleType: {
    type: String,
    required: true,
  },
});

export default model<IRoleType>("RoleType", roleTypeSchema);
