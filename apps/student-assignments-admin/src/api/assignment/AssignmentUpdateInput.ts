import { SubmissionUpdateManyWithoutAssignmentsInput } from "./SubmissionUpdateManyWithoutAssignmentsInput";

export type AssignmentUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  submissions?: SubmissionUpdateManyWithoutAssignmentsInput;
  teacher?: string | null;
  title?: string | null;
};
