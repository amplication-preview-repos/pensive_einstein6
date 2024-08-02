import { SubmissionCreateNestedManyWithoutAssignmentsInput } from "./SubmissionCreateNestedManyWithoutAssignmentsInput";

export type AssignmentCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  submissions?: SubmissionCreateNestedManyWithoutAssignmentsInput;
  teacher?: string | null;
  title?: string | null;
};
