import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type AssignmentWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  submissions?: SubmissionListRelationFilter;
  teacher?: StringNullableFilter;
  title?: StringNullableFilter;
};
