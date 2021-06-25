import "./css/JobPostList.css";

import React, { useState, useEffect } from "react";
import { Pagination, Table } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import JobPost from "./JobPost";

export default function JobPostList({ setCurrentJobPost }) {
  const [jobPostings, setJobPostings] = useState([]);
  const [activePage, setActivePage] = useState(1);
  let jobPostingService = new JobPostingService();
  useEffect(() => {
    jobPostingService
      .getAllApprovedStatusByPageNumber(activePage)
      .then((result) => setJobPostings(result.data.data));
  }, []);
  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
    jobPostingService
      .getAllApprovedStatusByPageNumber(activePage)
      .then((result) => setJobPostings(result.data.data));
  };
  return (
    <section className="scroll-bar job-postings">
      <Table className="job-postings-table">
        <Table.Body>
          {jobPostings.map((jobPosting, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <JobPost
                  setCurrentJobPost={setCurrentJobPost}
                  jobPost={jobPosting}
                />
              </Table.Cell>
            </Table.Row>
          ))}
          <Pagination
            className="width-100-percent"
            defaultActivePage={1}
            totalPages={10}
            onPageChange={handlePaginationChange}
          />
        </Table.Body>
      </Table>
    </section>
  );
}
