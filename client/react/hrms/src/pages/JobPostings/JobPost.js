import "./css/JobPost.css";

import React from "react";
export default function JobPost({ jobPost, setCurrentJobPost }) {
  let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

  function setJobDetails() {
    setCurrentJobPost(jobPost);
  }

  function getHowLongAgo(publishedAt) {
    let today = new Date();
    let publishedDate = new Date(publishedAt);
    let difference = today.getTime() - publishedDate.getTime();
    let days = difference / (1000 * 3600 * 24);
    if (days > 30) {
      return Math.floor(days / 30) + " ay önce";
    }
    if (days > 7) {
      return Math.floor(days / 7) + " hafta önce";
    }
    if (Math.floor(days) <= 0) {
      return "Bugün";
    }
    return Math.floor(days) + " gün önce";
  }
  return (
    <div>
      <div className="job-post">
        <div className="company-image">
          <img src={defaultImage} alt="" width="64" height="64" />
        </div>
        <div className="job-informations">
          <div className="job-position">
            <div onClick={() => setJobDetails()}>
              {jobPost.jobPosition.name}
            </div>
          </div>
          <div className="company-name">
            <div>{jobPost.employer.companyName}</div>
          </div>
          <div className="city-name">
            <span>{jobPost.city.name}</span>
          </div>
          <div>
            <time dateTime={jobPost.publishedAt} className="published-at">
              {getHowLongAgo(jobPost.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
