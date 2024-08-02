import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SUBMISSION_TITLE_FIELD } from "./SubmissionTitle";
import { ASSIGNMENT_TITLE_FIELD } from "../assignment/AssignmentTitle";

export const SubmissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Assignment"
          source="assignment.id"
          reference="Assignment"
        >
          <TextField source={ASSIGNMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Student" source="student" />
        <TextField label="submissionDate" source="submissionDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Grade"
          target="submissionId"
          label="Grades"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Submission"
              source="submission.id"
              reference="Submission"
            >
              <TextField source={SUBMISSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Teacher" source="teacher" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
