import "./css/JobInformationCard.css";

import React, { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import CandidateJobPostingFavoriteService from "../../services/candidateJobPostingFavoriteService";

export default function JobInformationCard({ jobPost }) {
  const [fakeCandidateId, setFakeCandidateId] = useState(2);
  const [candidateFavorite, setCandidateFavorite] = useState([]);
  const [startState, setStarState] = useState(false);
  let test = 1;
  let candidateJobPostingFavoriteService =
    new CandidateJobPostingFavoriteService();
  let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

  useEffect(() => {
    candidateJobPostingFavoriteService
      .getByCandidateIdAndJobPostingId(fakeCandidateId, jobPost.id)
      .then((result) => {
        setCandidateFavorite(result.data.data);
        setStarState(result.data.data ? true : false);
      });
  }, [jobPost, test]);

  const addToFavorite = () => {
    let candidateJobPostingFavorite = {
      candidate: { id: fakeCandidateId },
      jobPosting: jobPost,
    };
    candidateJobPostingFavoriteService
      .save(candidateJobPostingFavorite)
      .then((result) => {
        setStarState(true);
        console.log(result);
      });
  };

  const removeFromFavorite = () => {
    candidateJobPostingFavoriteService
      .delete(candidateFavorite)
      .then((result) => {
        setStarState(false);
        console.log(result);
      });
  };

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
      <div className="company-image">
        <img src={defaultImage} alt="" width="122" height="122" />
      </div>
      <div style={{ display: "flex" }}>
        {startState ? (
          <Button
            className="star-button"
            circular
            icon="star"
            onClick={() => removeFromFavorite()}
          />
        ) : (
          <Button
            className="star-button"
            circular
            icon="star outline"
            onClick={() => addToFavorite()}
          />
        )}
        <div className="job-informations">
          <div className="job-position">
            <span>{jobPost.jobPosition.name}</span>
          </div>
          <div className="company-informations">
            <span className="company-name">{jobPost.employer.companyName}</span>
            &nbsp; | &nbsp;
            <span className="city-name">{jobPost.city.name}</span>
          </div>
          <div>
            <time dateTime={jobPost.publishedAt} className="published-at">
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
