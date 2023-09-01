import { Schema, model } from "mongoose";
import { IDate, entityType } from "../../interface/lookup/date";

const dateSchema = new Schema<IDate>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  entityId: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    required: true,
    enum: entityType,
  },
});

export default model<IDate>("Date", dateSchema);
