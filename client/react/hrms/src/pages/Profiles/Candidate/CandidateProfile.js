import "./css/CandidateProfile.css";

import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import CandidateService from "../../../services/candidateService";
import ProfileCard from "./ProfileCard";
import CoverLetterCard from "./CoverLetterCard";
import LinksCard from "./LinksCard";
import EducationsCard from "./EducationsCard";
import ExperiencesCard from "./ExperiencesCard";
import LanguagesCard from "./LanguagesCard";
import SkillsCard from "./SkillsCard";

export default function CandidateProfile() {
  const [candidate, setCandidate] = useState([]);
  const [fakeUserId, setFakeUserId] = useState(2);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getById(fakeUserId)
      .then((result) => setCandidate(result.data.data));
  }, []);
  return (
    <div>
      <ProfileCard candidate={candidate} />
      <CoverLetterCard candidate={candidate} />
      <LinksCard candidate={candidate} />
      <EducationsCard candidate={candidate} />
      <ExperiencesCard candidate={candidate} />
      <LanguagesCard candidate={candidate} />
      <SkillsCard candidate={candidate} />
    </div>
  );
}
