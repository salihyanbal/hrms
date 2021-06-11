import "./css/JobDescriptionCard.css";

import React from "react";

export default function JobDescriptionCard({ jobPost }) {
  return <div className="job-description">{jobPost.jobDescription}</div>;
}
