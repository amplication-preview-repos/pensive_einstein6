import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SUBMISSION_TITLE_FIELD } from "../submission/SubmissionTitle";

export const GradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
