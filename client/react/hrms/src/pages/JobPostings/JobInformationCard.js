import "./css/JobInformationCard.css";

import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function JobInformationCard({ jobPost }) {
  let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

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
    <div className="job-information-card">
      <div class="company-image">
        <img src={defaultImage} alt="" width="122" height="122" />
      </div>
      <div style={{ display: "flex" }}>
        <div class="job-informations">
          <div class="job-position">
            <span>{jobPost.jobPosition.name}</span>
          </div>
          <div class="company-informations">
            <span class="company-name">{jobPost.employer.companyName}</span>
            &nbsp; | &nbsp;
            <span class="city-name">{jobPost.city.name}</span>
          </div>
          <div>
            <time datetime={jobPost.publishedAt} class="published-at">
              {getHowLongAgo(jobPost.publishedAt)} yayınlandı.
            </time>
          </div>
        </div>
      </div>
      <div style={{ float: "left", marginTop: "10px" }}>
        <Button icon labelPosition="right" size="medium">
          Şirket websitesi
          <Icon name="linkify" />
        </Button>
        <Button color="green" icon labelPosition="right" size="medium">
          Başvur
          <Icon name="external alternate" />
        </Button>
      </div>
    </div>
  );
}
