import { User } from "../user/User";

export type Request = {
  createdAt: Date;
  id: string;
  user?: User | null;
};
