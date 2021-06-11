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
      <div class="job-post">
        <div class="company-image">
          <img src={defaultImage} alt="" width="64" height="64" />
        </div>
        <div class="job-informations">
          <div class="job-position">
            <div onClick={() => setJobDetails()}>
              {jobPost.jobPosition.name}
            </div>
          </div>
          <div class="company-name">
            <div>{jobPost.employer.companyName}</div>
          </div>
          <div class="city-name">
            <span>{jobPost.city.name}</span>
          </div>
          <div>
            <time datetime={jobPost.publishedAt} class="published-at">
              {getHowLongAgo(jobPost.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
