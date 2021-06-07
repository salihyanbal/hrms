import "./css/JobPostDetails.css";

import React from "react";
import CompanyCard from "./CompanyCard";
import JobDescriptionCard from "./JobDescriptionCard";

export default function JobPostDetails({ jobPost }) {
  return (
    <div>
      {jobPost && (
        <div>
          <div>
            <CompanyCard jobPost={jobPost} />
          </div>
          <div>
            <JobDescriptionCard jobPost={jobPost} />
          </div>
        </div>
      )}
    </div>
  );
}
