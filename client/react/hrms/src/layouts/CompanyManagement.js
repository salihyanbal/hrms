import React from "react";
import { Grid } from "semantic-ui-react";
import CompanyJobPostList from "../pages/CompanyManagement/JobPostings/CompanyJobPostList";
import CompanyManagementMenu from "../pages/CompanyManagement/JobPostings/CompanyManagementMenu";

export default function CompanyManagement() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CompanyManagementMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <CompanyJobPostList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
