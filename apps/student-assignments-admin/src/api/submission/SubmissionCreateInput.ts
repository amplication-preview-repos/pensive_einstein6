import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { GradeCreateNestedManyWithoutSubmissionsInput } from "./GradeCreateNestedManyWithoutSubmissionsInput";

export type SubmissionCreateInput = {
  assignment?: AssignmentWhereUniqueInput | null;
  content?: string | null;
  grades?: GradeCreateNestedManyWithoutSubmissionsInput;
  student?: string | null;
  submissionDate?: Date | null;
};
