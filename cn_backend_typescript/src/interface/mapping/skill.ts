export enum entityType {
  user = "user",
  role = "role",
}
export interface ISkill {
  id: string;
  entityId: string;
  skillId: string;
  entityType: entityType;
}
