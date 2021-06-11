import "./css/JobPostDetails.css";

import React from "react";
import JobInformationCard from "./JobInformationCard";
import JobDescriptionCard from "./JobDescriptionCard";
import JobSalary from "./JobSalary";

export default function JobPostDetails({ jobPost }) {
  return (
    <div>
      {jobPost && (
        <section className="scroll-bar job-post-details">
          <div style={{ padding: "16px 12px" }}>
            <div style={{ paddingTop: "24px" }}>
              <JobInformationCard jobPost={jobPost} />
            </div>
            <div>
              <JobDescriptionCard jobPost={jobPost} />
              <JobSalary jobPost={jobPost} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
