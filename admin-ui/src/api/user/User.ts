import { Request } from "../request/Request";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  requests?: Array<Request>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
