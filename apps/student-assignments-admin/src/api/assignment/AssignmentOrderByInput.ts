import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  teacher?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
