import { Schema, model } from "mongoose";
import { ILocation, entityType } from "../../interface/mapping/location";

const locationEntitySchema = new Schema<ILocation>({
  id: {
    type: String,
    unique: true,
  },
  entityId: {
    type: String,
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    required: true,
    enum: entityType,
  },
});

export default model<ILocation>("LocationEntity", locationEntitySchema);
