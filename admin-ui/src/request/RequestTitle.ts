import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "id";

export const RequestTitle = (record: TRequest): string => {
  return record.id || record.id;
};
