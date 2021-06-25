import React, { useEffect, useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import CandidateExperienceService from "../../../services/candidateExperienceService";
import ExperienceAddModal from "./modals/ExperienceAddModal";
import ExperienceUpdateModal from "./modals/ExperienceUpdateModal";

export default function ExperiencesCard({ candidate }) {
  const [candidateExperiences, setCandidateExperiences] = useState([]);
  useEffect(() => {
    let candidateExperienceService = new CandidateExperienceService();
    candidateExperienceService
      .getAllByCandidateIdAndOrderByDate(2) // TODO: fakeid sorun değiştirilecek
      .then((result) => setCandidateExperiences(result.data.data));
  }, []);
  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Deneyimler
          </Card.Header>
          <ExperienceAddModal
            trigger={
              <Button
                icon
                floated="right"
                style={{ width: "5%", backgroundColor: "white" }}
              >
                <Icon name="add" />
              </Button>
            }
            candidateId={candidate.id}
          />
        </Card.Content>

        <Card.Content>
          {candidateExperiences.map((candidateExperience, index) => {
            return (
              <Card key={index} className="width-100-percent text-align-left">
                <Card.Content>
                  <Card.Header style={{ display: "inline-block" }}>
                    {candidateExperience.workplaceName}
                  </Card.Header>

                  <ExperienceUpdateModal
                    trigger={
                      <Button
                        icon
                        floated="right"
                        style={{ width: "5%", backgroundColor: "white" }}
                      >
                        <Icon name="pencil" />
                      </Button>
                    }
                    candidateExperience={candidateExperience}
                  />
                  <Card.Meta>
                    {candidateExperience.startDate}
                    {" | "}
                    {candidateExperience.leaveDate}
                  </Card.Meta>
                </Card.Content>

                <Card.Content>{candidateExperience.position}</Card.Content>
              </Card>
            );
          })}
        </Card.Content>
      </Card>
    </div>
  );
}
