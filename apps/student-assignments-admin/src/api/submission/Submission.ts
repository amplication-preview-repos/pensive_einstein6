import { Assignment } from "../assignment/Assignment";
import { Grade } from "../grade/Grade";

export type Submission = {
  assignment?: Assignment | null;
  content: string | null;
  createdAt: Date;
  grades?: Array<Grade>;
  id: string;
  student: string | null;
  submissionDate: Date | null;
  updatedAt: Date;
};
