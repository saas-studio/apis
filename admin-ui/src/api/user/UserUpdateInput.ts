import { RequestUpdateManyWithoutUsersInput } from "./RequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  requests?: RequestUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
