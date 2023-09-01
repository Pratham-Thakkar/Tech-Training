import { Schema, model } from "mongoose";
import { ISkill, entityType } from "../../interface/mapping/skill";

const skillEntitySchema = new Schema<ISkill>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  entityId: {
    type: String,
    required: true,
  },
  skillId: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    required: true,
    enum: entityType,
  },
});

export default model<ISkill>("SkillEntity", skillEntitySchema);
