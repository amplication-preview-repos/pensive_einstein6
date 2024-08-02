import { Submission } from "../submission/Submission";

export type Assignment = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  submissions?: Array<Submission>;
  teacher: string | null;
  title: string | null;
  updatedAt: Date;
};
