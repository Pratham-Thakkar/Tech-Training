import { Schema, model } from "mongoose";
import { ILocation } from "../../interface/lookup/location";

const locationSchema = new Schema<ILocation>({
  id: {
    type: String,
    unique: true,
  },
  locationName: {
    type: String,
    unique: true,
    required: true,
  },
});

export default model<ILocation>("Location", locationSchema);
