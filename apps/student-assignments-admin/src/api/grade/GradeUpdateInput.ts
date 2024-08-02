import { SubmissionWhereUniqueInput } from "../submission/SubmissionWhereUniqueInput";

export type GradeUpdateInput = {
  comments?: string | null;
  grade?: number | null;
  submission?: SubmissionWhereUniqueInput | null;
  teacher?: string | null;
};
