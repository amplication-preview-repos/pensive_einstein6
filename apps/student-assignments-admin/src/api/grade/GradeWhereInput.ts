import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubmissionWhereUniqueInput } from "../submission/SubmissionWhereUniqueInput";

export type GradeWhereInput = {
  comments?: StringNullableFilter;
  grade?: IntNullableFilter;
  id?: StringFilter;
  submission?: SubmissionWhereUniqueInput;
  teacher?: StringNullableFilter;
};
