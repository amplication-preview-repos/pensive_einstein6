import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  submissionId?: SortOrder;
  teacher?: SortOrder;
  updatedAt?: SortOrder;
};
