import "./css/JobPostList.css";

import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import JobPost from "./JobPost";

export default function JobPostList({ setCurrentJobPost }) {
  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllByIsConfirmed(true)
      .then((result) => setJobPostings(result.data.data));
  }, []);
  return (
    <section className="scroll-bar job-postings">
      <Table className="job-postings-table">
        <Table.Body>
          {jobPostings.map((jobPosting, i) => (
            <Table.Row>
              <Table.Cell key={i}>
                <JobPost
                  setCurrentJobPost={setCurrentJobPost}
                  jobPost={jobPosting}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
