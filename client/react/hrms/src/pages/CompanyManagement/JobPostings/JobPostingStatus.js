import React, { useEffect, useState } from "react";
import JobPostingStatusService from "../../../services/jobPostingStatusService";

export default function JobPostingStatus({ jobPostingId }) {
  const [jobPostingStatus, setJobPostingStatus] = useState([]);
  useEffect(() => {
    let jobPostingStatusService = new JobPostingStatusService();
    jobPostingStatusService
      .getLastByJobPostingId(jobPostingId)
      .then((result) => {
        console.log(result);
        setJobPostingStatus(result.data.data);
      });
  }, []);
  return <div>{jobPostingStatus.statusType?.name}</div>;
}
