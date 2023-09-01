import { Schema, model } from "mongoose";
import { ISkill } from "../../interface/lookup/skill";

const skillSchema = new Schema<ISkill>({
  id: {
    type: String,
    unique: true,
  },
  skillName: {
    type: String,
    required: true,
  },
});

export default model<ISkill>("Skill", skillSchema);
