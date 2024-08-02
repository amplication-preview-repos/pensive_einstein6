import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { GradeUpdateManyWithoutSubmissionsInput } from "./GradeUpdateManyWithoutSubmissionsInput";

export type SubmissionUpdateInput = {
  assignment?: AssignmentWhereUniqueInput | null;
  content?: string | null;
  grades?: GradeUpdateManyWithoutSubmissionsInput;
  student?: string | null;
  submissionDate?: Date | null;
};
