import { Schema, model } from "mongoose";
import { IUnion } from "../../interface/lookup/union";

const unionSchema = new Schema<IUnion>({
  id: {
    type: String,
    unique: true,
  },
  unionName: {
    type: String,
    required: true,
  },
});

export default model<IUnion>("Union", unionSchema);
