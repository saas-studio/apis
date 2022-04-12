import { RequestCreateNestedManyWithoutUsersInput } from "./RequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  requests?: RequestCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
