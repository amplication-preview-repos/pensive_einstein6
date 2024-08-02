import { Submission } from "../submission/Submission";

export type Grade = {
  comments: string | null;
  createdAt: Date;
  grade: number | null;
  id: string;
  submission?: Submission | null;
  teacher: string | null;
  updatedAt: Date;
};
