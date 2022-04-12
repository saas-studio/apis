import { Login as TLogin } from "../api/login/Login";

export const LOGIN_TITLE_FIELD = "id";

export const LoginTitle = (record: TLogin): string => {
  return record.id || record.id;
};
