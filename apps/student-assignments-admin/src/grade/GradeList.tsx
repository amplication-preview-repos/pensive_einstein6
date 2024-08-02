import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBMISSION_TITLE_FIELD } from "../submission/SubmissionTitle";

export const GradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Grades"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
