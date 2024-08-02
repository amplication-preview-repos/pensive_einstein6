import { SubmissionWhereUniqueInput } from "../submission/SubmissionWhereUniqueInput";

export type GradeCreateInput = {
  comments?: string | null;
  grade?: number | null;
  submission?: SubmissionWhereUniqueInput | null;
  teacher?: string | null;
};
