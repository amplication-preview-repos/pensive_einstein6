import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "student";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.student?.toString() || String(record.id);
};
