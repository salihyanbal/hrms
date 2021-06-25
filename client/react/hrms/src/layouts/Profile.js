import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateProfile from "../pages/Profiles/Candidate/CandidateProfile";
import CompanyProfile from "../pages/Profiles/Company/CompanyProfile";

export default function Profile() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <CandidateProfile />
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
