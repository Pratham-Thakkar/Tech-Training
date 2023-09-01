import { Schema, model } from "mongoose";
import { INotification, emailStatus } from "../interface/notification";

const notificationSchema = new Schema<INotification>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  emailStatus: {
    type: String,
    enum: emailStatus,
    default: emailStatus.pending,
  },
});

export default model<INotification>("Notification", notificationSchema);
