export enum emailStatus {
  sent = "sent",
  inProgress = "inProgress",
  failed = "failed",
  pending = "pending",
}

export interface INotification {
  id: string;
  email: string;
  emailStatus: emailStatus;
}
