import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
