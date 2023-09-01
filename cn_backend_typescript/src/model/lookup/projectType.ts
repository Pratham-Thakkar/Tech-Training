import { Schema, model } from "mongoose";
import { IProjectType } from "../../interface/lookup/projectType";

const projectTypeSchema = new Schema<IProjectType>({
  id: {
    type: String,
    unique: true,
  },
  projectType: {
    type: String,
    required: true,
  },
});

export default model<IProjectType>("ProjectType", projectTypeSchema);
