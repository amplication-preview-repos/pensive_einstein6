import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "teacher";

export const GradeTitle = (record: TGrade): string => {
  return record.teacher?.toString() || String(record.id);
};
