import "./css/JobPostings.css";

import React, { useState } from "react";
import JobPostList from "../pages/JobPostings/JobPostList";

import { Grid } from "semantic-ui-react";
import JobPostDetails from "../pages/JobPostings/JobPostDetails";

export default function JobPostings() {
  const [jobPost, setJobPost] = useState(null);

  const setCurrentJobPost = (value) => {
    setJobPost(value);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <JobPostList setCurrentJobPost={setCurrentJobPost} />
          </Grid.Column>
          <Grid.Column width={8}>
            <JobPostDetails jobPost={jobPost} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
