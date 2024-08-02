import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { GradeTitle } from "../grade/GradeTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assignment.id"
          reference="Assignment"
          label="Assignment"
        >
          <SelectInput optionText={AssignmentTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="grades"
          reference="Grade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GradeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Student" source="student" />
        <DateTimeInput label="submissionDate" source="submissionDate" />
      </SimpleForm>
    </Create>
  );
};
