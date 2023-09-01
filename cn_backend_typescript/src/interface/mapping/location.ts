export enum entityType {
  roleAudition = "roleAudition",
  roleWork = "roleWork",
  project = "project",
  role = "role",
  projectAudition = "projectAudition",
  projectWork = "projectWork",
}

export interface ILocation {
  id: string;
  entityId: string;
  locationId: string;
  entityType: entityType;
}
