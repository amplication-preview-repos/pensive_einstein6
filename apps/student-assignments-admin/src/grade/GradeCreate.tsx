import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <NumberInput step={1} label="grade" source="grade" />
        <ReferenceInput
          source="submission.id"
          reference="Submission"
          label="Submission"
        >
          <SelectInput optionText={SubmissionTitle} />
        </ReferenceInput>
        <TextInput label="Teacher" source="teacher" />
      </SimpleForm>
    </Create>
  );
};
