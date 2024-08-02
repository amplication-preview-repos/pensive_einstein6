import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  assignmentId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  student?: SortOrder;
  submissionDate?: SortOrder;
  updatedAt?: SortOrder;
};
