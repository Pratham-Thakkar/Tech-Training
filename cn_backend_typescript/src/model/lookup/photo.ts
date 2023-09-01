import { Schema, model } from "mongoose";
import { IPhoto } from "../../interface/lookup/photo";

const photoSchema = new Schema<IPhoto>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  roleId: {
    type: String,
    required: true,
  },
  url: String,
});

export default model<IPhoto>("Photo", photoSchema);
