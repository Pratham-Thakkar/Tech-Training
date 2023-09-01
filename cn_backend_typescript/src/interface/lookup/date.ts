export enum entityType {
  projectWork = "projectWork",
  projectAudition = "projectAudition",
  roleWork = "roleWork",
  roleAudition = "roleAudition",
}
export interface IDate {
  id: string;
  date: Date;
  entityId: string;
  entityType: entityType;
}
