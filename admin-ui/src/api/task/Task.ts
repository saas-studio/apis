import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
