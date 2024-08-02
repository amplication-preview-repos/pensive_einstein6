import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SubmissionWhereInput = {
  assignment?: AssignmentWhereUniqueInput;
  content?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  student?: StringNullableFilter;
  submissionDate?: DateTimeNullableFilter;
};
