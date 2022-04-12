import { RequestWhereInput } from "./RequestWhereInput";
import { RequestOrderByInput } from "./RequestOrderByInput";

export type RequestFindManyArgs = {
  where?: RequestWhereInput;
  orderBy?: Array<RequestOrderByInput>;
  skip?: number;
  take?: number;
};
