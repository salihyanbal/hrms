import React from "react";
import { Grid } from "semantic-ui-react";
import AdminManagementMenu from "../pages/AdminManagement/AdminManagementMenu";
import AdminEmployerList from "../pages/AdminManagement/Employers/AdminEmployerList";
import AdminJobPostList from "../pages/AdminManagement/JobPostings/AdminJobPostList";

export default function AdminManagement() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <AdminManagementMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <AdminEmployerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
