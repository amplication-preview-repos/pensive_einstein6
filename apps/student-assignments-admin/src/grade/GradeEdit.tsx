import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";

export const GradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
